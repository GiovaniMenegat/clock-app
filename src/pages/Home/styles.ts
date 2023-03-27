import styled from "styled-components";

const BACKGROUND_IMAGE = {
    day: 'day',
    night: 'night'
} as const

interface BackgroundImageProps {
    backgroundImage: keyof typeof BACKGROUND_IMAGE
}

export const HomeContainer = styled.main<BackgroundImageProps>`
    background:
    linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
    ),
    url(${(props) => props.backgroundImage === 'day' ? 'src/assets/day-background.jpg' : 'src/assets/night-background.jpg'});
    
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

    @media only screen and (min-width:800px) and (max-width: 1000px ) {
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

    @media only screen and (min-width:800px) and (max-width: 1000px ) {
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

    @media only screen and (min-width:300px) and (max-width: 1000px ) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const BACKGROUND_COLOR = {
    white: 'white',
    black: 'black'
} as const

interface BackgroundProps {
    backgroundColor: keyof typeof BACKGROUND_COLOR
}

const FONT_COLOR = {
    white: 'white',
    black: 'black'
} as const

interface FontProps {
    fontColor: keyof typeof FONT_COLOR
}

export const ExtraInformation = styled.div<BackgroundProps & FontProps>`
    padding: 3.5rem 10.3125rem 6.125rem;
    color: ${(props) => props.theme[FONT_COLOR[props.fontColor]]};
    background-color: ${(props) => props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    hr {
        height: 252px;
        width: 1px;   
    }

    @media only screen and (min-width:800px) and (max-width: 1000px ) {
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