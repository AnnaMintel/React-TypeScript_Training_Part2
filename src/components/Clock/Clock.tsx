import React, { useEffect, useState } from "react";
import { AnalogClock } from "./AnalogClock";
import { DigitalClock } from "./DigitalClock";

type PropsType = {
    mode?: 'digital' | 'analog'
}
export type ClockPropsType = {
    data: Date
}

export const Clock: React.FC<PropsType> = (props): any => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, [])

    if (props.mode === 'digital') {
        //@ts-ignore
        return <DigitalClock date={date} />
    } else {
        //@ts-ignore
        return <AnalogClock date={date} />
    }

    // return <div>123</div>


}



