import styled from "styled-components";

export const ClockContainer = styled.div``

export const ClockTime = styled.h1`
    font-weight: 700;
    font-size: 12.5rem;
    line-height: 12.5rem;
    @media only screen and (min-width:400px) and (max-width: 799px ) {
        font-size: 6.25rem;
        line-height: initial;
    }
`
export const ClockLocation = styled.h4`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.75rem;
    @media only screen and (min-width:400px) and (max-width: 799px ) {
        font-size: 0.9375rem;
    }
`