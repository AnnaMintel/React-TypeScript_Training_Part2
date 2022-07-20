import React from "react";
import { ItemType } from "./Accordion";
// import { ItemType } from "./Accordion";

export type AccordionBodyType = {
    items: ItemType[]
    clickHandler: (value: any) => void
}

export const AccordionBody = (props: AccordionBodyType) => {
    return (
        <div>
            <ul>
                {/* @ts-ignore */}
                {props.items.map((i, index) => <li
                    key={index}
                    onClick={() => props.clickHandler( `${i.value} ${i.title}`)}
                >{i.title}</li>)}
            </ul>
        </div>
    );
};