import React, { useMemo, useState } from "react";

export default {
    title: "useMemo"
}

export const DifficultCountingExanple = () => {
    return <>

    </>
}

export const HelpsForREactMemo = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            tempResultA = tempResultA * i
        }
        return tempResultA;
    }, [a]);
}


