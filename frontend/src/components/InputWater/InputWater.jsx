import * as React from "react";

import styles from "./InputWater.module.sass";

function InputWater() {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} type="number" placeholder="0"/>
            <button className={styles.button}>
                <span className="material-symbols-outlined">add</span>
            </button>
        </div>
    );
}

export default InputWater;
