import * as React from "react";

import styles from "./InputWater.module.sass";

function InputWater(props) {
    const capacities = [
        {
            value: 20,
            symbol: "water_loss",
        },
        {
            value: 30,
            symbol: "water_medium",
        },
        {
            value: 50,
            symbol: "water_full",
        }
    ];

    return (

        <div className={styles.panel}>
            <div className={styles.buttons}>
                {capacities.map((capacity) => (
                    <div className={styles.capacity}>
                        <span className={"material-symbols-rounded"}>
                            {capacity.symbol}
                        </span>
                        {capacity.value}ml
                    </div>
                ))}
            </div>

            <div>or</div>
            <div className={styles.wrapper}>
                <input className={styles.input} type="number" placeholder="0" onChange={props.onChange}/>
                <button className={styles.button}>
                    <span className="material-symbols-rounded">add</span>
                </button>
            </div>
        </div>
    );
}

export default InputWater;
