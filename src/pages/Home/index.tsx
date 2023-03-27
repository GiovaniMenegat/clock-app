import { CaretDown, CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { Clock } from "../../components/Clock";
import { Quote } from "../../components/Quotes";
import { fetchUserDatetime } from "../../services/apiServices";
import { ButtonSvg, ExtraInformation, ExtraInformationButton, ExtraInformationText, ExtraInformationTitle, HomeBottom, HomeContainer } from "./styles";

interface Datetime {
    datetime: Date
    location: string
    dayOfYear: number
    dayOfWeek: number
    weekNumber: number
    night: boolean
}

export function Home() {
    const [openExtraInfo, setOpenExtraInfo] = useState(false)
    const [userDatetime, setUserDatetime] = useState({} as Datetime);

    useEffect(() => {
        fetchUserDatetime().then((datetime) => {
            const cleanString = datetime.timezone.replace("/", ", ").replace("_", " ").toUpperCase()
            const isNight = new Date(datetime.datetime).getHours() >= 20 ? true : false
            
            setUserDatetime({
                datetime: datetime.datetime,
                location: cleanString,
                dayOfWeek: datetime.day_of_week,
                dayOfYear: datetime. day_of_year,
                weekNumber: datetime.week_number,
                night: isNight
            })
        })
    }, [])

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
        <HomeContainer backgroundImage={userDatetime.night ? 'night' : 'day'}>
            <Quote />
            <HomeBottom>
                <Clock datetime={userDatetime.datetime} location={userDatetime.location}/>
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

            <ExtraInformation backgroundColor={userDatetime.night ? 'black' : 'white'} fontColor={userDatetime.night ? 'white' : 'black'}>
            <div>
                <ExtraInformationTitle>
                    Current timezone
                </ExtraInformationTitle>
                <ExtraInformationText>
                    {userDatetime.location}
                </ExtraInformationText>

                <ExtraInformationTitle>
                    Day of the year
                </ExtraInformationTitle>
                <ExtraInformationText>
                    {userDatetime.dayOfYear}
                </ExtraInformationText>
            </div>
            <hr/>
            <div>
                <ExtraInformationTitle>
                    Day of the week
                </ExtraInformationTitle>
                <ExtraInformationText>
                    {userDatetime.dayOfWeek}
                </ExtraInformationText>

                <ExtraInformationTitle>
                    Week number
                </ExtraInformationTitle>
                <ExtraInformationText>
                    {userDatetime.weekNumber}
                </ExtraInformationText>
            </div>
        </ExtraInformation>
        </>
    )
}
