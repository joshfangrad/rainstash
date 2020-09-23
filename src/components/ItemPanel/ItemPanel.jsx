import React from 'react';
import Category from './Category';

import styles from './ItemPanel.module.css';

function ItemPanel(props) {
    //render loading text until we're done loading the manifest(s)
    if (props.manifest === null) return (
        <div className={styles.loadWrap}>
            <div className={styles.loadText}>LOADING</div>
        </div>
    );

    //prep an object of classnames for item sorting, where the key is the name, and value an empty array
    const itemSplit = Object.keys(props.manifest.classInfo).reduce((res, item) => {
        res[item] = [];
        return res;
    }, {});
    
    //load each category's array with the associated items
    for (const item of Object.values(props.manifest.items)) {
        itemSplit[item.itemClass].push(item);
    };

    //create categories
    const categories = Object.entries(props.manifest.classInfo).map(([name, category]) => {
        return (
            <Category 
                key={name}
                name={name}
                color={category.color}
                selectedItem={props.selectedItem}
                searchString={props.searchString}
                items={itemSplit[name]}
                folderName={props.folderName}
                onMouseOut={props.onMouseOut}
                onMouseOver={props.onMouseOver}
                onMouseClick={props.onMouseClick}
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