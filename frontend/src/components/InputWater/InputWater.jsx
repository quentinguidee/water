import * as React from "react";

import styles from "./InputWater.module.sass";

function InputWater() {
    return (
        <div>
            <input className={styles.input} type="number" placeholder="0"/>
        </div>
    );
}

export default InputWater;
