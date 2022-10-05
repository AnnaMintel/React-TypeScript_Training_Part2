import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Raiting, RaitingValueType } from "./components/Rating/Rating";
import { UncontrolledRaiting } from "./components/UncontrolledRating/UncontrolledRating";
import { Accordion } from "./components/Accordion/Accordion"
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion"
import { ControlledOnOff } from "./components/ControlledOnOff /ControlledOnOff";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff"
import { Switcher } from "./components/switcher/switch";
import { ControlledCheckbox, ControlledInput, ControlledSelect, TrackValueOfUncontrolledInput, TrackValueOfUncontrolledInputByButtonPress, UncontrolledInput } from "./components/input/input";
import { Select } from "./components/Select/Select";
import { Example1 } from "./components/React.memo/ReactMemo";
import { Example2 } from "./components/Accordion/useMemo/ReactMemo";
import { ExampleUseEffect, SetTimeoutExample } from "./components/Accordion/useEffect/useEffect";
import { Clock } from "./components/Clock/Clock";

const App = () => {

  let [onOff, setOnOff] = useState<boolean>(false);
  let [ratingValue, setRatingValue] = useState<RaitingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

  const responseFromServer = Math.floor(Math.random() * 10) > 4 ? true : false;

  // select
  const [value, setValue] = useState(null);

  const onClick = (value: any) => {
    console.log(value)
  }

  return (
    <div className={"App"}>
      <ControlledOnOff onOff={onOff} onClick={setOnOff} />
      <br />
      <UncontrolledOnOff />
      <br />
      <Accordion title={"Menu"}
        collapsed={accordionCollapsed}
        onClick={setAccordionCollapsed}
        clickHandler={onClick}
        items={[{ title: "Ann", value: 1 }, { title: "HHAnn", value: 2 }]} />
      <br />
      <UncontrolledAccordion title={"Menu"} />
      <br />
      <Raiting value={ratingValue} onClick={setRatingValue} />
      <br />
      <UncontrolledRaiting />
      <br />
      <Switcher />
      <br />
      <br />
      <UncontrolledInput />
      <br />
      <br />
      <TrackValueOfUncontrolledInput />
      <br />
      <br />
      <TrackValueOfUncontrolledInputByButtonPress />
      <br />
      <br />
      <ControlledInput />
      <br />
      <br />
      <ControlledCheckbox />
      <br />
      <br />
      <ControlledSelect />
      <br />
      <br />
      <Select
        value={value}
        items={[{ value: 1, title: "Minsk" },
        { value: 2, title: "Mi" },
        { value: 3, title: "Msk" }]}
        setValue={setValue} />
      <br />
      <br />
      <br />
      <Example1 />
      <br />
      <br />
      <Example2 />
      <br />
      <br />
      <ExampleUseEffect />
      <br />
      <SetTimeoutExample />
      <br />
      <br />
      <h5>Clock:</h5>
      <Clock mode={'analog'} />
      <Clock mode={'digital'} />
    </div>
  );
};
export default App;






