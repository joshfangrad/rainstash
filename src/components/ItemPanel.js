import React from 'react';
import styles from './ItemPanel.module.css';
import Category from './Category';

import manifest from './../data/itemManifest.json';

function ItemPanel(props) {
    //prep an object of classnames for item sorting, where the key is the name, and value an empty array
    const itemSplit = Object.keys(manifest.classInfo).reduce((res, item) => {
        res[item] = [];
        return res;
    }, {})
    //load each category's array with the associated items
    for (const item of Object.values(manifest.items)) {
        itemSplit[item.itemClass].push(item);
    };
    
    //create categories
    const categories = Object.entries(manifest.classInfo).map(([name, category]) => {
        return (
            <Category 
                key={name}
                name={name}
                color={category.color}
                selected={props.selected}
                items={itemSplit[name]}
                handlers={props.handlers}
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