import { getOrCreateEnabledItems } from './cookie';
import manifestsToLoad from './manifests';

//creates a combined list of items to be loaded
export async function loadManifests () {
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

    return combinedManifest;
}