import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/services/place.service';
import { PlaceModel } from '../../core/models/place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.html',
  styleUrls: ['./places.scss'], // 👈 plural + array
  standalone: false
})
export class Places implements OnInit {
  places: PlaceModel[] = [];
  loading = false;
  error: string | null = null;

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.placeService.getAllPlaces().subscribe({
      next: (res) => { this.places = res; this.loading = false; },
      error: (err) => { this.error = 'No se pudo cargar la lista de lugares'; this.loading = false; console.error(err); }
    });
  }

  trackById = (_: number, p: PlaceModel) => p.id;
}
