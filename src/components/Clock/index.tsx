import { useEffect, useState } from "react";
import { format } from 'date-fns'
import { fetchUserDatetime } from "../../services/apiServices";
import { ClockContainer, ClockTime } from "./styles";

interface Datetime {
    datetime: Date
    location: string
}

export function Clock() {
    const [userDatetime, setUserDatetime] = useState({} as Datetime);

    useEffect(() => {
        fetchUserDatetime().then((datetime) => {
            const cleanString = datetime.timezone.replace("/", ", ").replace("_", " ").toUpperCase()

            setUserDatetime({
                datetime: datetime.datetime,
                location: cleanString
            })
        })
    }, [])

    return (
        <ClockContainer>

            {
                userDatetime.datetime ?
                    <ClockTime>{format(new Date(userDatetime.datetime), 'HH:mm')}</ClockTime> : null
            }

            <h4>IN {userDatetime.location}</h4>
        </ClockContainer>
    )
}