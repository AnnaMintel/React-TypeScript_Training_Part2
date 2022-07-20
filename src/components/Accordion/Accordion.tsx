import React from "react";
import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle"; 

// export type ItemType = {
//   title: string
//   value: any
// }

export type AccordionType = {
    title: string;
    collapsed: boolean;
    onClick: (accordionCollapsed: boolean) => void 
    items: ItemType[]
    clickHandler: (value: any) => void
}

export type ItemType = {
  title: string
  value: number 
}

 export const Accordion = (props: AccordionType) => { 
    console.log("Accordion rendering")

      return (
        <div>
           <AccordionTitle header={props.title} onClick={props.onClick} collapsed={props.collapsed}/> 
           { props.collapsed &&  <AccordionBody items={props.items} clickHandler={props.clickHandler} /> }
        </div>
      );
};
