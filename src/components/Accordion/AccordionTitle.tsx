import React from "react"; 
import {AccordionType} from "./Accordion";
 

type AccordionTitleType = {
  header: string;  
  collapsed: boolean
  onClick: (accordionCollapsed: boolean) => void
};

export const AccordionTitle = (props: AccordionTitleType) => {
  return (
    <div>
      <h3 onClick={ () => {props.onClick(!props.collapsed) } }>{props.header}</h3>
    </div>
  );
};
