import { Component, OnDestroy, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { PlaceService } from '../../core/services/place.service';
import { PlaceModel } from '../../core/models/place.model';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.html',
  styleUrls: ['./places-detail.scss'],
  standalone: false
})
export class PlacesDetail implements OnInit, AfterViewInit, OnDestroy {
  place: PlaceModel | null = null;
  loading = false;
  error: string | null = null;

  @ViewChild('placeMap', { static: false }) placeMapEl!: ElementRef<HTMLDivElement>;

  map!: mapboxgl.Map;
  marker!: mapboxgl.Marker;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Id inválido';
      return;
    }

    this.loading = true;
    this.placeService.getPlaceById(id).subscribe({
      next: (res) => {
        this.place = res;
        this.loading = false;
        this.tryInitMap(); // intenta crear el mapa si el contenedor ya está
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo cargar el lugar';
        this.loading = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.tryInitMap(); // intenta crear el mapa cuando ya hay DOM
  }

  private tryInitMap(): void {
    if (!this.place || !this.placeMapEl) return;     // evita "container not found"
    if (this.map) return;                             // evita doble init

    // Crea el mapa (token va en la opción 'accessToken' para evitar mutar imports)
    this.map = new mapboxgl.Map({
      container: this.placeMapEl.nativeElement,
      style: this.style,
      center: [this.place.longitude, this.place.latitude],
      zoom: 13,
      accessToken: environment.MAPBOX_TOKEN
    });

    this.map.on('load', () => {
      this.marker = new mapboxgl.Marker()
        .setLngLat([this.place!.longitude, this.place!.latitude])
        .addTo(this.map);
      this.map.resize();
    });
  }

  difficultyColor(d: string | undefined): string {
    const val = (d || '').toLowerCase();
    if (val.includes('fácil') || val.includes('facil') || val.includes('easy')) return 'green';
    if (val.includes('moder')) return 'orange';
    if (val.includes('difi') || val.includes('hard')) return 'red';
    return 'default';
  }

  ngOnDestroy(): void {
    if (this.marker) this.marker.remove();
    if (this.map) this.map.remove();
  }
}
