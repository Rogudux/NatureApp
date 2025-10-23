// src/app/core/services/amenity.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { AmenityModel } from '../models/amenity.model';

@Injectable({ providedIn: 'root' })
export class AmenityService {
  private baseUrl = `${environment.API_URL}/amenities`;

  constructor(private http: HttpClient) {}

  // GET: /api/amenities  (trae todo)
  getAllAmenities(): Observable<AmenityModel[]> {
    return this.http.get<AmenityModel[]>(this.baseUrl);
  }

  // (Opcional) GET: /api/amenities?placeId=#
  getAmenitiesByPlace(placeId: number): Observable<AmenityModel[]> {
    const params = new HttpParams().set('placeId', placeId);
    return this.http.get<AmenityModel[]>(this.baseUrl, { params });
  }
}
