// src/app/core/models/photo.model.ts
export interface PhotoModel {
  id: number;
  placeId: number;
  // Nota: conservo "URL" en mayúsculas para coincidir con tu API/DTO
  url: string;
}
