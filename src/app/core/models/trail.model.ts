// src/app/core/models/trail.model.ts
export interface TrailModel {
  id: number;
  placeId: number;
  name: string;
  distanceKm: number;
  estimatedTimeMinutes: number;
  difficulty: string;
  path: string;
  isLoop: boolean;
}
