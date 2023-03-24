import { format } from 'date-fns'
import { ClockContainer, ClockTime } from "./styles";

export function Clock({datetime, location}) {
    return (
        <ClockContainer>

            {
                datetime ?
                    <ClockTime>{format(new Date(datetime), 'HH:mm')}</ClockTime> : null
            }

            <h4>IN {location}</h4>
        </ClockContainer>
    )
}