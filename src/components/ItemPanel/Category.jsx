import React from 'react';
import Item from './Item';
import { getBoolCookie } from '../../misc/cookie';

import styles from './Category.module.css';

function Category(props) {
    //go through the items and add them to the category
    const items = props.items.map((item) => {
        //determine if the item is selected or not
        const isSelected = props.selectedItem && props.selectedItem.name === item.name; 
        //see if we're displaying caps or not
        const displayCap = getBoolCookie('displayCap', 'true') || false;
        //determine if the item is being searched for or not
        let isHidden = false;
        if (props.searchString !== '' && !isSelected) {
            const regex = new RegExp(props.searchString, 'i')
            if (regex.test(item.name) || regex.test(item.description)) {
                isHidden = false;
            } else {
                isHidden = true;
            }
        }

        return (
            <Item 
                key={item.name}
                alt={item.name}
                item={item}
                isSelected={isSelected}
                isHidden={isHidden}
                displayCap={displayCap}
                src={process.env.PUBLIC_URL + `/items/${props.folderName}/${item.manifestName}/itemIcons/${item.imgName}`}
                onMouseOut={() => props.onMouseOut()}
                onMouseOver={() => props.onMouseOver(item)}
                onMouseClick={() => props.onMouseClick(item)}
            />
        );
    });

    return (
        <div className={styles.category} key={props.name} style={{borderColor: props.color}}>
            <div className={styles.categoryTitle} style={{color: props.color, borderColor: props.color}} key={`title_${props.name}`}>
                {props.name}
            </div>
            {items}
        </div>
    );
}

export default Category;