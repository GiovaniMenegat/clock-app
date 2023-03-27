import styled from "styled-components";

export const HomeContainer = styled.main`
    background:
    linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
    ),
    url("src/assets/day-background.jpg");
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    padding: 3.5rem 10.3125rem 6.125rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (min-width:800px) {
        padding: 5rem 4rem 4rem;
    }
    @media only screen and (min-width:400px) and (max-width: 799px ) {
        padding: 2.5rem 1.625rem
    }
`

export const ExtraInformationButton = styled.button`
    width: 9.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: 0.3125rem;
    padding: 0.5rem;
    border-radius: 3.125rem;
    border: none;
    outline: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (min-width:800px) {
        margin-top: 5rem;
    }
    @media only screen and (min-width:400px) and (max-width: 799px ) {
        margin-top: 3rem;
        font-size: 0.75rem;
        line-height: 0.875rem;
        width: 7.1875rem;
    }
`

export const ButtonSvg = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background: ${(props) => props.theme.grey};
    border-radius: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    svg {
        color: ${(props) => props.theme.white};
    }
`

export const HomeBottom = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    @media only screen and (min-width:300px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const ExtraInformation = styled.div`
    padding: 3.5rem 10.3125rem 6.125rem;
    color: ${(props) => props.theme.grey};
    background-color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    hr {
        height: 252px;
        width: 1px;   
    }

    @media only screen and (min-width:800px) {
        padding: 7.4375rem 4rem;
        hr {
            display: none;
        }
    }

    @media only screen and (min-width:400px) and (max-width: 799px ) {
        padding: 1.625rem 3rem;
        flex-direction: column;
        align-items: flex-start;
        hr {
            display: none;
        }
    }
`

export const ExtraInformationTitle = styled.h4`
    font-style: normal;
    font-weight: 400;
    font-size: 0.9375rem;
    line-height: 1.75rem;
    letter-spacing: 0.1875rem;
    text-transform: uppercase;

    @media only screen and (min-width:400px) and (max-width: 799px ) {
        line-height: 0.625rem;
    }
`

export const ExtraInformationText = styled.h6`
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 4.25rem;

    @media only screen and (min-width:400px) and (max-width: 799px ) {
        font-size: 1.25rem;
        line-height: 2.1875rem;
        margin-bottom: 1.25rem;
    }
`