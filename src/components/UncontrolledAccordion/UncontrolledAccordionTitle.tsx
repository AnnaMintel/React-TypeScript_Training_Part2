import React from "react"; 

type UncontrolledAccordionTitleType = { 
  title?: string;
  onClick: () => void
};

export const UncontrolledAccordionTitle = (props: UncontrolledAccordionTitleType) => {
  return (
    <div>
      <h3 onClick={ () => { props.onClick() }}>{props.title}</h3>
    </div>
  );
};
