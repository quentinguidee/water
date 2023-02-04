import * as React from 'react';

import ConsumptionVisualizer from '../../components/ConsumptionVisualizer/ConsumptionVisualizer';
import styles from './Home.module.sass';
import InputWater from "../../components/InputWater/InputWater";
import {useState} from "react";

function Home() {
    const[waterLevel,setWaterLevel] = useState(0)
    const onChange = (event) => {
        setWaterLevel(Number.parseInt(event.target.value))
    }
    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <ConsumptionVisualizer waterLevel={waterLevel}/>
            </div>
            <div className={styles.right}>
                <InputWater onChange={onChange}/>
            </div>
        </div>
    );
}

export default Home;
