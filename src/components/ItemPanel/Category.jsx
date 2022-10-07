import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getBoolCookie } from '../../misc/cookie';

import styles from './Category.module.css';

function Category(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        //go through the items and add them to the category
        setItems(props.items.map((item) => {
            //determine if the item is selected or not
            const isSelected = props.selectedItem && props.selectedItem.name === item.name; 
            //see if we're displaying caps or not
            const displayCap = getBoolCookie('displayCap', 'true') || false;
            //determine if the item is being searched for or not
            let isHidden = false;
            if (props.searchString !== '' && !isSelected) {
                const sanitizedInput = props.searchString.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')
                const regex = new RegExp(sanitizedInput, 'i')
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
                    folderName={props.folderName}
                    src={process.env.PUBLIC_URL + `/items/${props.folderName}/${item.manifestName}/itemIcons/${item.imgName}`}
                    onMouseOut={() => props.onMouseOut()}
                    onMouseOver={() => props.onMouseOver(item)}
                    onMouseClick={() => props.onMouseClick(item)}
                />
            );
        }));
    }, [props, setItems])

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