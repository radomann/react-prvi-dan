import { useEffect, useState } from "react"
import { Card } from "./Card";

export const RickAndMortyChars = () => {
    const [chars, setChars] = useState([]);

    const handleFetchChars = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setChars(data.results);
            // console.log(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchChars();
    })

    return <>
        {chars.map(({name, status, image, location}, index) => <Card key={index} name={name} status={status}
            image={image} location={location}/>)}
    </>
}