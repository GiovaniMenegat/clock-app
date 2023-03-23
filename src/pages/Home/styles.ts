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

    padding: 3.5rem 10.3125rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`