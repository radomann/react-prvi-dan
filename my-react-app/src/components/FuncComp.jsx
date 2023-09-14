import { useState, useEffect } from 'react';

const MyComponent=()=> {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();

    // Ovaj dio funkcije će biti pozvan kada se komponenta unmount-uje
    return () => {
      // Ovdje čistite sve resurse koje ste alocirali u useEffect (kao što su tajmeri ili network requests)
    };
  }, []); // Prazan array znači da će useEffect biti pozvan samo prilikom mounting-a i unmounting-a komponente

  return (
    <div>
      {data ? <p>Data loaded: {JSON.stringify(data)}</p> : <p>Loading data...</p>}
    </div>
  );
}

export default MyComponent;


