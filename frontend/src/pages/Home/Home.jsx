import * as React from 'react';

import ConsumptionVisualizer from '../../components/ConsumptionVisualizer/ConsumptionVisualizer';
import styles from './Home.module.sass';
import InputWater from "../../components/InputWater/InputWater";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <ConsumptionVisualizer/>
            </div>
            <div className={styles.right}>
                <InputWater/>
            </div>
        </div>
    );
}

export default Home;
