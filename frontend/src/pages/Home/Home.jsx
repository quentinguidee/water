import * as React from 'react';

import ConsumptionVisualizer from '../../components/ConsumptionVisualizer/ConsumptionVisualizer';
import styles from './Home.module.sass';
import InputWater from "../../components/InputWater/InputWater";
import {addDoc, collection} from "firebase/firestore"
import {db} from "../../firebase";
import {useState} from "react";


function Home() {
    const[waterLevel,setWaterLevel] = useState(0)

    const onAdd = async (value) => {
        setWaterLevel(previous => previous + Number.parseInt(value));

        try {
            const docRef = await addDoc(collection(db, "waterIntake"), {
                date: Date.now(),
                amount: value
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
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
