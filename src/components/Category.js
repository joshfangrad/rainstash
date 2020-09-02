import React from 'react';
import styles from './Category.module.css';
import Item from './Item';

import manifest from './../data/itemManifest.json';

function Category(props) {
    //go through the items in the manifest and add them to this category if they're apart of it
    const items = Object.values(manifest.items).map((item, index) => {
        if (item.itemClass === props.name) {
            return (
                <Item 
                    key={index}
                    keyId={index}
                    src={process.env.PUBLIC_URL + `/items/vanilla_items/itemIcons/${item.imgName}`}
                    alt={item.name}
                />
            );
        } else { return (<></>);}
    });

    return (
        <div className={styles.category} key={props.name} style={{borderColor: props.color}}>
            <div className={styles.categoryTitle} style={{color: props.color, borderColor: props.color}}>
                {props.name}
            </div>
            {items}
        </div>
    );
}

export default Category;