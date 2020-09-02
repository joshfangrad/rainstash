import React from 'react';
import styles from './ItemPanel.module.css';
import Category from './Category';

import manifest from './../data/itemManifest.json';

function ItemPanel() {
    const categories = Object.entries(manifest.classInfo).map((category) => {
        console.log(category)
        return (
            <Category 
                key={category[0]}
                name={category[0]}
                color={category[1].color}
            />
        );
    });

    return (
        <div className={styles.itemPanel}>
            {categories}
        </div>
    );
}

export default ItemPanel;