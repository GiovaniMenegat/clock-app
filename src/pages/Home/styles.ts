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
`

export const ExtraInformation = styled.div`
    padding: 3.5rem 10.3125rem 6.125rem;
    max-width: 52.75rem;
    color: ${(props) => props.theme.grey};
    background-color: ${(props) => props.theme.white};
`