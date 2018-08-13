//function to load item manifests.
async function loadManifests(manifests) {
    let items = {};
    for (let manifest of manifests) {
        let res = await getJSON(`items/${manifest}_items/itemManifest.json`);
        let json = JSON.parse(res);
        items[manifest] = {};
        if (json.items) {
            items[manifest].items = json.items;
        }
        if (json.classInfo) {
            items[manifest].classInfo = json.classInfo;
        }
        if (json.commandSort) {
            items[manifest].commandSort = json.commandSort;
        }
    }
    return items;
}

//function to retrieve a json from the server
function getJSON(target) {
    return new Promise(resolve => {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', target, true);
        xobj.onreadystatechange = () => {
            if (xobj.readyState == 4 && xobj.status == '200') {
                resolve(xobj.responseText);
            }
        }
        xobj.send(null);
    });
}