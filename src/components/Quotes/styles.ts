import styled from "styled-components";

export const QuotesContainer = styled.div`
    display: flex;
    max-width: 35.8125rem;
`

export const QuotesMain = styled.div`
    margin-right: 1rem;
`

export const QuotesIcon = styled.div`
    cursor: pointer;
    opacity: 0.6;
    height: fit-content;
    &:hover {
        opacity: 1;
    }
`

export const QuoteText = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.75rem;
`

export const QuoteAuthor = styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 0.8125rem;
`