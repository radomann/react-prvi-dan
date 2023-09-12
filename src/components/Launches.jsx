import { useEffect, useState } from "react"
import { Card } from "./Card";

export const Launches = () => {
    const [launches, setLaunches] = useState([]);
    const limit = 10;
    const [offset, setOffset] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const handleFetchLaunches = async () => {
        try {
            const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            setLaunches(data);
            // console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchLaunches();
    }, [offset])

    const handlePageChange = (currOffset) => {
        if(currOffset>0) setOffset(currOffset)
        setDisabled(currOffset == 10)
    }

    return <>
        <button disabled={disabled} onClick={()=>{handlePageChange(offset-10)}}>PREV</button>
        <button onClick={()=>{handlePageChange(offset+10)}}>NEXT</button>

        <div className="content-wrapper">
            {launches.map(({mission_name, launch_success, launch_date_utc, details, links}, index) =>
                <Card key={index} missionName={mission_name} launchSuccess={launch_success}
                launchDate={launch_date_utc} details={details} links={links}/>)}
        </div>
    </>
}