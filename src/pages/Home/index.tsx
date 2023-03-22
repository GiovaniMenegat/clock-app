import { useEffect, useState } from "react"
import { Clock } from "../../components/Clock";
import { Quote } from "../../components/Quotes";

export function Home() {

    return (
        <>
            <Quote/>
            <Clock />
        </>
    )
}
