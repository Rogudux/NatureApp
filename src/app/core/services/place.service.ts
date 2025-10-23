import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PlaceModel } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private readonly baseUrl = `${environment.API_URL}/places`; // tu controlador: [Route("api/places")]

  constructor(private httpCliente: HttpClient) {}

  // GET: api/places
  getAllPlaces(): Observable<PlaceModel[]> {
    console.log('trayendo places');
    return this.httpCliente.get<PlaceModel[]>(`${this.baseUrl}/all`);
  }

  // GET: api/places/{id}
  getPlaceById(id: number): Observable<PlaceModel> {
    console.log(`trayendo place id=${id}`);
    return this.httpCliente.get<PlaceModel>(`${this.baseUrl}/${id}`);
  }
}
