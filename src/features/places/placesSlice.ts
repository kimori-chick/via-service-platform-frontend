import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface Place {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

interface PlacesState {
  list: Place[];
}

const initialState: PlacesState = {
  list: [],
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces(state, action: PayloadAction<Place[]>) {
      state.list = action.payload;
    },
  },
});

export const { setPlaces } = placesSlice.actions;
export default placesSlice.reducer;
