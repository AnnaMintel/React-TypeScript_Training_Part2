import React, { useState } from "react";

type OnOffType = {
    // on: boolean;
} 

export const UncontrolledOnOff = (props: OnOffType) => {

    let [on, setOn] = useState<boolean>(false); // hook

    const onSTyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "blue" : "white"
    };
    const offSTyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "pink"
    }; 
    const indicatorSTyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "blue" : "pink"
    };   

    return (
        <div>
            <div style={onSTyle} onClick={ () => { setOn(true)}} >On</div>
            <div style={offSTyle} onClick={ () => { setOn(false)}} >Off</div>
            <div style={indicatorSTyle}></div>
        </div>
    )


}
