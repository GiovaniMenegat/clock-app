import { useEffect, useState } from "react";
import { fetchRandomQuotes } from "../../services/apiServices";

interface Quote {
    quote: string
    author: string
}

export function Quote() {
    const [quote, setQuote] = useState({} as Quote);

    useEffect(() => {
        fetchRandomQuotes().then(data => {
            setQuote({
                quote: data.content,
                author: data.author
            })
        })
    }, [])
    
    return (
        <>
        <h1>{quote.quote}</h1>
        <p>{quote.author}</p>
        </>
    )
}