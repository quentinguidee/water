import * as React from 'react';

import ConsumptionVisualizer from '../../components/ConsumptionVisualizer/ConsumptionVisualizer';
import styles from './Home.module.sass';
import InputWater from "../../components/InputWater/InputWater";
import {useState} from "react";

function Home() {
    const[waterLevel,setWaterLevel] = useState(0)
    const onAdd = (value) => {
        setWaterLevel(previous => previous + Number.parseInt(value));
    }
    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <ConsumptionVisualizer waterLevel={waterLevel}/>
            </div>
            <div className={styles.right}>
                <InputWater onAdd={onAdd}/>
            </div>
        </div>
    );
}

export default Home;
