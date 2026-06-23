export interface ImageMetadata {
  id: number;
  filename: string;
  filepath: string;
  file_size: number;
  file_type: string;
  width: number;
  height: number;
  camera_make: string | null;
  camera_model: string | null;
  date_taken: string | null;
  iso: number | null;
  shutter_speed: string | null;
  aperture: number | null;
  focal_length: number | null;
  latitude: number | null;
  longitude: number | null;
  altitude: number | null;
  created_at: string;
}

export interface FilterParams {
  q: string;
  cameraModel: string;
  hasGps: string; // 'all' | 'true' | 'false'
  dateFrom: string;
  dateTo: string;
}
