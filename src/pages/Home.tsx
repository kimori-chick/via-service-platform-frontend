import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPlaces } from '../features/places/placeAPI';
import { setPlaces } from '../features/places/placesSlice';
import MapView from '../components/MapView';

const Home = () => {
  const dispatch = useAppDispatch();
  const places = useAppSelector((state) => state.places.list);

  useEffect(() => {
    fetchPlaces().then((data) => dispatch(setPlaces(data)));
  }, [dispatch]);

  return <MapView places={places} />;
};

export default Home;
