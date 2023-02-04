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
            <Wave
                style={{bottom: `calc(${props.waterLevel / 1000 * 100}% + 6px)`}}
                className={styles.wave}
                fill='#106fa4'
                paused={false}
                options={{
                    height: 60,
                    amplitude: 20,
                    speed:0.25,
                    points:3
                }
                }

            />
            <Wave
                style={{bottom: `calc(${props.waterLevel / 1000 * 100}% - 3px)`}}
                className={styles.wave}
                  fill='#1277b0'
                  paused={false}
                  options={{
                      height: 60,
                      amplitude: 25,
                      speed:0.30,
                      points:3
                  }
                  }

            />
            <div style={{height: `${props.waterLevel / 1000 * 100}%`}} className={styles.visualizer}/>
        </div>

    );
}

export default ConsumptionVisualizer;