import React from "react";
import styles from './Select.module.css';

export type ItemType = {
  title: string
  value: number
}

type SelectType = {
  value?: any,
  onChange: (value: any) => void
  items: ItemType[]
}

export const Select = (props: SelectType) => {

  const selectedItem = props.items.find(i => i.value === props.value);

  return (
    <div className={styles.select}>
      <select>
        <option value={"1"}>Lalalend</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Warshawa</option>
      </select>

      <h3>{selectedItem && selectedItem.title}</h3>
      {props.items.map(i => <div key={i.value}>{i.title}</div>)}

    </div>
  )
};
