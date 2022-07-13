import React from "react";
import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle"; 

export type AccordionType = {
    title: string;
    collapsed: boolean;
    onClick: (accordionCollapsed: boolean) => void
}

 export const Accordion = (props: AccordionType) => { 
    console.log("Accordion rendering")

      return (
        <div>
           <AccordionTitle header={props.title} onClick={props.onClick} collapsed={props.collapsed}/> 
           { props.collapsed &&  <AccordionBody /> }
        </div>
      );
};


