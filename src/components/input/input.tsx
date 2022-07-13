import React, { ChangeEvent, useRef, useState } from "react";

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
const [value, setValue] = useState("");

const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue)
}

return <>
        <input onChange={onChange} /> - {value} 
    </>;
}

export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    
    const save = () => {
        const actualText = inputRef.current as HTMLInputElement;
        setValue(actualText.value);
      }
    return <><input ref={inputRef} /> <button onClick={save} >save</button>  - actual value:{value} </>;
    }
 