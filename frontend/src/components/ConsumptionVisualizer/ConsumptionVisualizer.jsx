import * as React from "react";
import Wave from "react-wavify"
import styles from "./ConsumptionVisualizer.module.sass";
import {useEffect, Fragment} from "react";


function ConsumptionVisualizer(props) {
    useEffect(()=>{
        console.log(props.waterLevel);
    }, [props.waterLevel])
    return (
        <div className={styles.container}>
            <Wave className={styles.wave}
                  fill='#1277b0'
                  paused={false}
                  options={{
                      height: 80,
                      amplitude: 40,
                      speed:0.20,
                      points:4
                  }
                  }

            />
            <div className={styles.visualizer}/>
        </div>

    );
}

export default ConsumptionVisualizer;