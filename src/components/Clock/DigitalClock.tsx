import React  from "react";
import { ClockPropsType} from "./Clock";

export const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

//@ts-ignore
export const DigitalClock: React.FC<ClockPropsType> = ({ date }) => {
    return <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}