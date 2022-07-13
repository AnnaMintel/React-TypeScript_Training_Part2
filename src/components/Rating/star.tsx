import React from "react";
import { RaitingValueType } from "./Rating";
 
type StarType = {
    selected: boolean
    onClick: (value: RaitingValueType) =>void
    value: RaitingValueType
}

export const Star = (props: StarType) => {
    // return props.selected === true ? <span><b>star </b></span> : <span>star</span>

    return <span onClick={ () => {props.onClick(props.value) } } >
        {props.selected ? <b>star </b> : "star "}
    </span>
};
