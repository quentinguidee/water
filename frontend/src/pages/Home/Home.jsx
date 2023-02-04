import * as React from 'react';

import styles from './Home.module.sass';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
        </div>
    );
}

export default Home;
