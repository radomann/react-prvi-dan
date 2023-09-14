import { useState, useEffect } from 'react';
import { rickAndMortyService } from '../../service/rick-and-morty';

const { getAllCharacters } = rickAndMortyService;

export const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCharacters();
        console.log(result);
        setData(result.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>Loading...</div>;

  return <div>Home page</div>;
};
