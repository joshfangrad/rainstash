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

    //make sure the user has some item sets selected otherwise warn them
    if (categories !== null && Object.keys(categories).length === 0) {
        return (
            <div className={styles.itemPanel}>
                <div className={styles.verticalWrap}>
                    <div className={styles.grayText}>You don't have any item sets selected :(</div>
                    <div className={styles.grayText}>Go select some in settings {">"} mods!</div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.itemPanel}>
                {categories}
            </div>
        );
    }
}

export default ItemPanel;