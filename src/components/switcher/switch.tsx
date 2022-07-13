import React, { useState } from "react";

export const Switcher = () => {

    let [value, setValue] = useState(false);

    return (
        <>
            {!value ? <button onClick={() => setValue(true)}>on</button> :
                 <button onClick={() => setValue(false)}>off</button>}
        </>
    )
} 
