import React, { useEffect, useState } from 'react';
import styles from './ItemPanel.module.css';
import Category from './Category';

import manifestsToLoad from './../misc/manifests';

// import manifest from './../data/itemManifest.json';
// import { loadManifests } from './../misc/loadManifests';

function ItemPanel(props) {
    const [manifest, setManifest] = useState(null);

    useEffect(() => {
        async function loadManifests () {
            //let manifestsToLoad = getOrCreateEnabledItems();
        
            let combinedManifest = {'items': {}, 'classInfo': {} };
        
            for (const manifestName of manifestsToLoad) {
                // import manifest from `${process.env.PUBLIC_URL}items/${manifestName}/itemManifest.json`;
                // const manifest = await require(`${process.env.PUBLIC_URL}items/${manifestName}/itemManifest.json`).then(module => module.default);
                const result = await fetch(process.env.PUBLIC_URL + `items/${manifestName}/itemManifest.json`);
                const manifest = await result.json();
                //merge items and classes
                if (manifest.items) { Object.assign(combinedManifest.items, manifest.items) }
                if (manifest.classInfo) { Object.assign(combinedManifest.classInfo, manifest.classInfo) }
            }
            setManifest(combinedManifest);
        }
        loadManifests();
    }, []);

    if (manifest === null) return null;

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