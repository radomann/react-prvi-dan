import { useEffect, useState } from "react"
import { Card } from "./Card";

export const Launches = () => {
    const [launches, setLaunches] = useState([]);

    const handleFetchLaunches = async () => {
        try {
            const response = await fetch('https://api.spacexdata.com/v3/launches?limit=21');
            const data = await response.json();
            setLaunches(data);
            // console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchLaunches();
    })

    return <>
        <div className="content-wrapper">
            {launches.map(({mission_name, launch_success, launch_date_utc, details, links}, index) =>
                <Card key={index} missionName={mission_name} launchSuccess={launch_success}
                launchDate={launch_date_utc} details={details} links={links}/>)}
        </div>
    </>
}