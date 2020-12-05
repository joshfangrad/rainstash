import React, { useEffect, useState } from 'react';
import Category from './Category';

import styles from './ItemPanel.module.css';

function ItemPanel(props) {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if (props.manifest === null) {
            setCategories(null);
        } else {
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
            setCategories(Object.entries(props.manifest.classInfo).map(([name, category]) => {
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
            }));
        }
    }, [props, setCategories]);

    return (
        <div className={styles.itemPanel}>
            {categories}
        </div>
    );
}

export default ItemPanel;