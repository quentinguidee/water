import * as React from 'react';

import ConsumptionVisualizer from '../../components/ConsumptionVisualizer/ConsumptionVisualizer';
import styles from './Home.module.sass';
import InputWater from "../../components/InputWater/InputWater";
import {getDocs, query, addDoc, where, collection} from "firebase/firestore"
import {db} from "../../firebase";
import {useEffect, useState} from "react";
import {auth} from "../../firebase"
import {useNavigate} from "react-router";

function Home() {

    const navigate = useNavigate()
    const[waterLevel,setWaterLevel] = useState(0)

    useEffect(() => {
        const getResults = async () => {
            if(auth.currentUser){
                const currentDate = new Date();
                const currentDayOfMonth = currentDate.getDate();
                const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
                const currentYear = currentDate.getFullYear();
                const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
                const q = query(collection(db,"waterIntake"), where("date", "==", dateString), where("id","==",auth.currentUser.uid));
                const results = await getDocs(q);
                let sum = 0;
                results.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    sum += doc.data().amount
                });
                setWaterLevel(sum);
            }
        }
        getResults()

    }, [auth])

    const onAdd = async (value) => {
        setWaterLevel(previous => previous + Number.parseInt(value));

        try {
            const currentDate = new Date();
            const currentDayOfMonth = currentDate.getDate();
            const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
            const currentYear = currentDate.getFullYear();
            const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
            console.log(auth.currentUser)
            const docRef = await addDoc(collection(db, "waterIntake"), {
                id: auth.currentUser.uid,
                date: dateString,
                amount: value
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const logout = () => {
        auth.signOut().then(() =>{
            navigate("/")
        })
    }

    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <ConsumptionVisualizer waterLevel={waterLevel}/>
            </div>
            <div className={styles.right}>
                <InputWater onAdd={onAdd}/>
                <div className={styles.user}>
                    {auth.currentUser && <img height={48} className={styles.userImage} src={auth.currentUser.photoURL}/>}
                    <button className={styles.button} onClick={logout}>
                        <span className={"material-symbols-rounded"}>
                            logout
                        </span>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
