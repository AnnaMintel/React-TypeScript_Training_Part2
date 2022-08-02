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

export const ControlledInput = () => {
    const [parentValue, setparentValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setparentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange} />
}

export const ControlledCheckbox = () => {
    const [parentValue, setparentValue] = useState(true);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setparentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange} />
}

export const ControlledSelect = () => {
    const [parentValue, setparentValue] = useState<string | undefined>(undefined);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setparentValue(e.currentTarget.value)
    }
    return <select value={parentValue}> 
        <option value={"1"}>none</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Warshawa</option>
    </select> 
}