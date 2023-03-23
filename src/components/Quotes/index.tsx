import { ArrowsClockwise } from "phosphor-react";
import { useEffect, useState } from "react";
import { fetchRandomQuotes } from "../../services/apiServices";
import { QuoteAuthor, QuotesContainer, QuotesIcon, QuotesMain, QuoteText } from "./styles";

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

    function handleFetchQuote() {
        fetchRandomQuotes().then(data => {
            setQuote({
                quote: data.content,
                author: data.author
            })
        })
    }
    
    return (
        <QuotesContainer>
            <QuotesMain>
                <QuoteText>"{quote.quote}"</QuoteText>
                <QuoteAuthor>{quote.author}</QuoteAuthor>
            </QuotesMain>
            <QuotesIcon onClick={handleFetchQuote}>
                <ArrowsClockwise size={24} />
            </QuotesIcon>
        </QuotesContainer>
    )
}