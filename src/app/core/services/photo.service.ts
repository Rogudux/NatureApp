// src/app/core/services/photo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { PhotoModel } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private baseUrl = `${environment.API_URL}/photos`;

  constructor(private http: HttpClient) {}

  // GET: /api/photos  (trae todo)
  getAllPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.baseUrl);
  }

  // (Opcional) GET: /api/photos?placeId=#
  getPhotosByPlace(placeId: number): Observable<PhotoModel[]> {
    const params = new HttpParams().set('placeId', placeId);
    return this.http.get<PhotoModel[]>(this.baseUrl, { params });
  }
}
