import React, { useReducer, useState } from "react";
import { UncontrolledAccordionBody } from "./UncontrolledAccordionBody";
import { UncontrolledAccordionTitle } from "./UncontrolledAccordionTitle";

type AccordionType = {
  title?: string;
  collapsed?: boolean;
}

export const UncontrolledAccordion = (props: AccordionType) => {
  console.log("Accordion rendering")

  let [collapsed, dispatch] = useReducer(reducer, false);

  const buttonSTyle = {
    width: "330px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: collapsed ? "pink" : "white"
  };

  return (
    <>
      {/* <UncontrolledAccordionTitle title={props.title} onClick={ () => {setCollapsed((!collapsed)}} /> */}
      <UncontrolledAccordionTitle title={props.title} onClick={() => {
        dispatch({ type: SWITCH_COLLAPSED })
      }} />

      {collapsed && <UncontrolledAccordionBody />}

    </>
  );
};
