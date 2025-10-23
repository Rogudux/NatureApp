
export interface ReviewModel {
  Author: string;
  Rating: number;
  Comment: string;
  CreatedAt: string; // ISO string
}

// src/app/core/models/place.model.ts
import type { TrailModel } from './trail.model';
import type { PhotoModel } from './photo.model';
import type { AmenityModel } from './amenity.model';

export interface PlaceModel {
  id: number;
  name: string;
  description: string;
  category: string;
  latitude: number;
  longitude: number;
  elevationMeters: number;
  accessible: boolean;
  entryFee: number;
  openingHours: string;
  createdAt: string;        // ISO

  trails: TrailModel[];
  photos: PhotoModel[];
  reviews: ReviewModel[];

  // Si tu API devuelve las amenidades “planas”:

  // Si tu API devuelve la relación M:N con la tabla puente:
}

