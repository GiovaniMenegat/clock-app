import { api } from "../lib/axios";

export async function fetchRandomQuotes() {
    const { data } = await api.get('https://api.quotable.io/random')

    return data
}

export async function fetchUserDatetime() {
    const { data: timezoneResponse } = await api.get('http://ip-api.com/json')

    const { data: datetimeResponse } = await api.get(`https://worldtimeapi.org/api/timezone/${timezoneResponse.timezone || 'Europe/Amsterdam'}`)
  
    return datetimeResponse
}