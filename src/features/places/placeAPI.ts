import apiClient from '../../api/client';
import type { Place } from './placesSlice';

export async function fetchPlaces(): Promise<Place[]> {
  const response = await apiClient.get('/places');
  return response.data;
}
