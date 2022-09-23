import React, { useMemo, useState, useEffect } from "react";

export default {
    title: "useEffectTraining"
}

export const ExampleUseEffect = () => {

    const [counter, setCounter] = useState<number>(1)

    console.log("useEffectExample");

    //1 - срабатывает каждый раз, когда отрисовывается/изменяется компонента
    useEffect( () => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })
    //2 - срабатывает только после первой отрисовки. После изменений в компаненте заново не срабатывает
    // например, когда нам нужно через запрос на сервер отобразить юзеров
    useEffect( () => {
        console.log("useEffect only first render (analog componentDidMount)");
        document.title = counter.toString();
    }, [])
    //3 - срабатывает каждый раз, когда изменяется то, что передаем в зависимости
    useEffect( () => {
        console.log("useEffect first render and every time counter change");
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+++</button>
    </>

}
