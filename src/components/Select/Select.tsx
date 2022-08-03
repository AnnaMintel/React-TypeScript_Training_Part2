import React, { useState } from "react";
import styles from './Select.module.css';

export type ItemType = {
  title: string,
  value: number
}

type SelectType = {
  value?: any,
  items: ItemType[],
  setValue: (value: any) => void
}

export const Select = (props: SelectType) => {

  const [active, setActive] = useState(false);

  const showItems = () => setActive(!active);

  const selectedItem = props.items.find(i => i.value == props.value);

  return (
    <>
      <div className={styles.select} onKeyPress={() => {}}>

        <span className={styles.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>
        {
          active &&
          <div className={styles.items}>
            {props.items.map(i => 
            <div className={styles.itemHover}
              key={i.value}
              onClick={() => {props.setValue(i.value); setActive(false)}}
            >
              {i.title}
            </div>)}
          </div>
        }
      </div>
    </>
  )
};




