import { useEffect, useState } from "react"
import { Clock } from "../../components/Clock";
import { Quote } from "../../components/Quotes";
import { HomeContainer } from "./styles";

export function Home() {

    return (
        <HomeContainer>
            <Quote />
            <Clock />
        </HomeContainer>
    )
}
