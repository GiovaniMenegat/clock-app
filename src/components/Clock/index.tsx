import { useEffect, useState } from "react";
import { format, parseISO } from 'date-fns'
import { fetchUserDatetime } from "../../services/apiServices";

interface Datetime {
    datetime: Date
    location: string
}

export function Clock() {
    const [userDatetime, setUserDatetime] = useState({} as Datetime);

    useEffect(() => {
        fetchUserDatetime().then((datetime) => {
            const cleanString = datetime.timezone.replace("/", ", ").replace("_", " ")
            
            setUserDatetime({
                datetime: datetime.datetime,
                location: cleanString
            })
        })
    }, [])

    return (
        <>

            {
                userDatetime.datetime ?
                <h1>{format(new Date(userDatetime.datetime), 'HH:mm')}</h1> : null
            }

            <h4>In {userDatetime.location}</h4>
        </>
    )
}