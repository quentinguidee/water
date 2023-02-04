import * as React from "react";

import styles from "./InputWater.module.sass";
import {useState} from "react";

function InputWater(props) {
    const capacities = [
        {
            value: 200,
            symbol: "water_loss",
        },
        {
            value: 300,
            symbol: "water_medium",
        },
        {
            value: 500,
            symbol: "water_full",
        }
    ];

    const[boxValue,setBoxValue] = useState(0)
    const onChange = (event) => {
        setBoxValue(Number.parseInt(event.target.value));
    }
    return (

        <div className={styles.panel}>
            <div className={styles.buttons}>
                {capacities.map((capacity) => (
                    <div className={styles.capacity} onClick={()=> props.onAdd(capacity.value)}>
                        <span className={"material-symbols-rounded"}>
                            {capacity.symbol}
                        </span>
                        {capacity.value}ml
                    </div>
                ))}
            </div>

            <div>or</div>
            <div className={styles.wrapper}>
                <input className={styles.input} type="number" placeholder="0" onChange={onChange}/>
                <button className={styles.button} onClick={()=> props.onAdd(boxValue)}>
                    <span className="material-symbols-rounded">add</span>
                </button>
            </div>
        </div>
    );
}

export default InputWater;
