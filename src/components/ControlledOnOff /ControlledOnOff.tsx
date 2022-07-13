import React, { useState } from "react";

type OnOffType = {
    onClick: (value: boolean) => void
    onOff: boolean
} 

export const ControlledOnOff = (props: OnOffType) => {

    const onSTyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.onOff ? "green" : "white"
    };
    const offSTyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.onOff ? "white" : "red"
    }; 
    const indicatorSTyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.onOff ? "green" : "red"
    };   

    return (
        <div>
            <div style={onSTyle} onClick={ () => { props.onClick(true)}} >On</div>
            <div style={offSTyle} onClick={ () => { props.onClick(false)}} >Off</div>
            <div style={indicatorSTyle}></div>
        </div>
    )


}
