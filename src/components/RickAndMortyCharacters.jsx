import { useState, useEffect } from "react"

import { MemoDemo } from "./memoDemo"

export const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    const [disabled, setDisabled] = useState(true)

    const handleFetchCharacters = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character`)
            const data = await response.json()

            setCharacters(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchCharacters()
    }, [])

    useEffect(() => {
        console.log("PAGE: ", page)
        // handleFetchCharacters()
    }, [page])

    const handlePageChange = (currPage) => {
        if(currPage>0) setPage(currPage)
        setDisabled(currPage == 1)
    }

    return <>
        <button disabled={disabled} onClick={()=>{handlePageChange(page-1)}}>PREV</button>
        <button onClick={()=>{handlePageChange(page+1)}}>NEXT</button>

        {/* {characters.map(({name,status,image,location, url}, index) => <Card key={index} name={name} status={status} image={image} location={location} url={url}/>)} */}
        <MemoDemo list={characters} page={page}/>
    </>
}