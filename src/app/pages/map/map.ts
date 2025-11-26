import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { PlaceService } from '../../core/services/place.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrl: './map.scss',
    standalone: false

})
export class MapComponent {

    map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  markers: mapboxgl.Marker[] = [];

  constructor(private placesService:PlaceService){}

  ngOnInit(): void {
    console.log("Iniciand Componente")
    
    console.log(`El token de mapbox viene de ${environment.MAPBOX_TOKEN}`)
    this.map = new mapboxgl.Map({
      accessToken : environment.MAPBOX_TOKEN,
      style: this.style,
      container: "map",
      center: [-88.296, 18.500],
      zoom: 5
    })

    this.placesService.getAllPlaces().subscribe((backPlaceResponse)=>{
      console.log(backPlaceResponse)
      backPlaceResponse.forEach((store)=>{
        const marker = new mapboxgl.Marker()
        .setLngLat([store.longitude,store.latitude])
        .addTo(this.map);
        this.markers.push(marker)
      });
    });
  }

}
