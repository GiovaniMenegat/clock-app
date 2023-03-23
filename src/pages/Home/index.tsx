import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import { Clock } from "../../components/Clock";
import { Quote } from "../../components/Quotes";
import { ButtonSvg, ExtraInformation, ExtraInformationButton, HomeBottom, HomeContainer } from "./styles";

export function Home() {
    const [openExtraInfo, setOpenExtraInfo] = useState(false)

    function handleScrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
        setOpenExtraInfo(true)
    }

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setOpenExtraInfo(false)
    }
    
    return (
        <>
        <HomeContainer>
            <Quote />
            <HomeBottom>
                <Clock />
                {
                    !openExtraInfo ?
                    <ExtraInformationButton onClick={handleScrollToBottom}>
                        MORE 
                        <ButtonSvg>
                            <CaretDown size={18} weight="bold" />
                        </ButtonSvg>
                    </ExtraInformationButton> :
                    <ExtraInformationButton onClick={handleScrollToTop}>
                        LESS 
                        <ButtonSvg>
                            <CaretUp size={18} weight="bold" />
                        </ButtonSvg>
                    </ExtraInformationButton>
                }
            </HomeBottom>
        </HomeContainer>

        <ExtraInformation>
            <h1>test teste stesd</h1>
        </ExtraInformation>
        </>
    )
}
