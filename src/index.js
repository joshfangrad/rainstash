let selectedItem;
let itemsCache = [];

window.onload = () => {
    document.getElementById('search').oninput = () => { searchFilter(); }
    document.getElementById('clear').onclick = () => { clearSearch(); }
    document.getElementById('gear').onclick = () => { openOptions(); }
    document.getElementById('closeOptions').onclick = () => { closeOptions(); }
    document.getElementById('closeInfo').onclick = () => { closeInfo(); removeSelection(); }
    document.getElementById('modWrap').onclick = () => { toggleModMenu(); }

    //change the formatting if we're on mobile
    if (onMobile()) {
        document.getElementById('closeInfo').classList.remove('hidden');
        closeInfo();
    }
    
    //reformat in case a device gets rotated, or window resized.
    window.onresize = () => { resizeCheck(); }
    window.onorientationchange = () => { resizeCheck(); }
    
    //set up toggleSort switch
    let toggleSort = document.getElementById('toggleSort');
    toggleSort.checked = checkBoolCookie('toggleSort', false);
    toggleSort.onchange = (e) => { 
        setCookie('toggleSort', e.target.checked, 365); 
        sortItems(e.target.checked);
    }

    //set up toggleVids switch
    let toggleVids = document.getElementById('loadVids');
    toggleVids.checked = checkBoolCookie('loadVids', true);
    toggleVids.onchange = (e) => { setCookie('loadVids', e.target.checked, 365); }
    
    //set up toggleMods switch
    let toggleMods = document.getElementById('toggleMods');
    toggleMods.checked = checkBoolCookie('toggleMods', false);
    toggleMods.onchange = (e) => { 
        setCookie('toggleMods', e.target.checked, 365);
        toggleModText(e.target.checked);
    }

    //set up togglePerformance switch
    let togglePerformance = document.getElementById('togglePerformance');
    togglePerformance.checked = checkBoolCookie('togglePerformance', false);
    togglePerformance.onchange = (e) => { 
        setCookie('togglePerformance', e.target.checked, 365);
        togglePerformanceMode(e.target.checked);
    }
    createModButtons();
    
    loadItems([
        'test',
        'vanilla'
    ]);
}

//function to reload item manifests and propagate the changes. called when the site starts / loaded mods are changed.
async function loadItems(targetManifests) {
    //make sure we don't load mods that are already loaded
    for (let setName in itemsCache) {
        let find = targetManifests.findIndex(element => element == setName);
        if (find !== -1) { 
            targetManifests.splice(find, 1); 
        } else {
            //if something currently loaded is missing from the manifest, unload the set
            for (let item in itemsCache[setName].items) {
                let img = document.getElementById(item);
                img.parentNode.removeChild(img);
            }
            //also delete any empty categories they used
            for (let category in itemsCache[setName].classInfo) {
                let catDiv = document.getElementById(category);
                if (catDiv.childElementCount == 0) { catDiv.parentNode.removeChild(catDiv); }
            }
            delete itemsCache[setName];
        }
    }
    if (targetManifests.length > 0) {
        loadManifests(targetManifests).then(res => {
            itemsCache = Object.assign({}, itemsCache, res);
            addTextFlair(itemsCache);
            createCategories(res);
            loadIcons(res);
            sortItems(document.getElementById('toggleSort').checked);
            togglePerformanceMode(document.getElementById('togglePerformance').checked);
            toggleModText(document.getElementById('toggleMods').checked);
        });
    }
}

//iterates through the itemManifest and loads item icons and details from it.
function loadIcons(items) {
    for (let setName in items) {
        let set = items[setName];
        for (let itemName in set.items) {
            let item = set.items[itemName];
            let itemClass = item.itemClass;
            let targetCategory = document.getElementById(itemClass);
            let itemImg = document.createElement('img');
            itemImg.classList.add('item');
            itemImg.src = `items/${setName}_items/itemIcons/item_${itemName}.png`;
            itemImg.id = itemName;
            targetCategory.appendChild(itemImg);
    
            itemImg.onmouseenter = () => {
                setInfo(itemName);
            }
    
            itemImg.onmouseleave = (e) => {
                hideInfo(e);
            }
            
            itemImg.ondragstart = (e) => {
                if (onMobile()) { 
                    setInfo(itemName);
                    closeItems(); 
                }
                changeSelected(e);
                //return false to prevent dragging 'ghost' effect
                return false;
            }
    
            itemImg.onclick = (e) => {
                if (onMobile()) { 
                    setInfo(itemName);
                    closeItems(); 
                }
                changeSelected(e);
            }
        }
    }
}

//called by click event, changes what the currently selected item is.
function changeSelected(e) {
    let itemName = e.target.id;
    //mobile compatibility in here later
    if (selectedItem != itemName) {
        let oldSelect = document.getElementById(selectedItem);
        if (oldSelect != null) { 
            oldSelect.classList.remove('select');
        }
        selectedItem = itemName;
        e.target.classList.add('select');
    } else {
        document.getElementById(selectedItem).classList.remove('select');
        selectedItem = null;
    }
    //re-run search filter to re-hide / unhide selected items
    searchFilter();
    //also close mod menu for convenience
    toggleModMenu(true);
}

//sets the details on the info panel to the supplied item's info.
function setInfo(itemName) {
    let panel = document.getElementsByClassName('infoPanel')[0];
    document.getElementsByClassName('infoImage')[0].innerHTML = '';
    panel.classList.remove('fadeOut');
    panel.classList.add('fadeIn');
    let result = getItem(itemName);
    let item = result['item'];
    let setName = result['setName'];
    
    for (prop in item) {
        //we can get rid of the hasVideo check later once we complete all the mp4s
        if (prop != 'hasVideo' && prop != 'itemClass') {
            let target = document.getElementsByClassName(`info${prop}`)[0];
            target.innerHTML = item[prop];
        }
    }

    let cooldown = document.getElementsByClassName('infocooldown')[0];
    let cooldownTitle = document.getElementById('cooldownTitle');

    if ('cooldown' in item) {
        cooldownTitle.classList.remove('hidden');
        cooldown.innerHTML = `${item.cooldown} seconds`;
    } else {
        cooldownTitle.classList.add('hidden');
        cooldown.innerHTML = '';
    }

    let unlock = document.getElementsByClassName('infounlock')[0];
    let unlockTitle = document.getElementById('unlockTitle');

    if ('unlock' in item || 'drop' in item) {
        unlockTitle.classList.remove('hidden');
    } else {
        unlockTitle.classList.add('hidden');
        unlock.innerHTML = '';
    }

    let stack = document.getElementsByClassName('infostack')[0];
    let stackTitle = document.getElementById('stackTitle');

    if ('stack' in item || 'embryo' in item) {
        stackTitle.classList.remove('hidden');
    } else {
        stackTitle.classList.add('hidden');
        stack.innerHTML = '';
    }
    
    let infoImage = document.getElementsByClassName('infoImage')[0];
    infoImage.src = `items/${setName}_items/itemIcons/item_${itemName}.png`;
    
    document.getElementById('stackTitle').innerHTML = 'stack' in item ? 'Stacking Effect:' : 'Beating Embryo effect:';
    document.getElementById('unlockTitle').innerHTML = 'unlock' in item ? 'Unlock:' : 'Dropped by:';

    //change the hasVideo video if the item has one, and the user has them turned on.
    let video = document.getElementById('video');
    let loadVids = document.getElementById('loadVids');
    video.innerHTML = '';
    if ('hasVideo' in item && item.hasVideo === true && loadVids.checked === true) {
        video.classList.remove('hidden');
        let source = document.createElement('source');
        source.setAttribute('src', `items/${setName}_items/usageMP4s/usage_${itemName}.mp4`);
        video.appendChild(source);
        video.load();
    } else {
        video.classList.add('hidden');
    }

}

//hides the info panel.
function hideInfo(e) {
    if (selectedItem == null) {
        let panel = document.getElementsByClassName('infoPanel')[0];
        panel.classList.remove('fadeIn');
        panel.classList.add('fadeOut');
    } else if (e.target.id != selectedItem) {
        setInfo(selectedItem);
    }
}

//dims items based on the current text in the search bar.
function searchFilter() {
    let text = document.getElementById('search').value;
    let filter = new RegExp(`${text}`, 'i');
    for (let setName in itemsCache) {
        let set = itemsCache[setName];
        for (let item in set.items) {
            let name = set.items[item].name;
            let desc = set.items[item].description;
            if (name.match(filter) !== null || desc.match(filter) !== null || item == selectedItem) {
                document.getElementById(item).classList.remove('faded');
            } else {
                document.getElementById(item).classList.add('faded');
            }
        }
    }

    //toggle the clear button based on whether there's text in the search bar or not
    let clear = document.getElementById('clear');
    text.length > 0 ? clear.classList.add('unhideClear') : clear.classList.remove('unhideClear');
}

//clears the searchbar.
function clearSearch() {
    document.getElementById('search').value = '';
    searchFilter();
}

//removes currently selected item.
function removeSelection() {
    if (selectedItem != null) {
        document.getElementById(selectedItem).classList.remove('select');
        selectedItem = null;
    }
}

//opens the options panel.
function openOptions() {
    document.getElementById('dim').classList.add('unhideDim');
}

//closes the options panel
function closeOptions() {
    document.getElementById('dim').classList.remove('unhideDim');
}

//toggles performance mode. Performance mode is just a css class that disables things like animations or shadows that we apply to body
function togglePerformanceMode(state) {
    if (state && state === true) {
        document.body.classList.add('noFlair');
    } else {
        document.body.classList.remove('noFlair');
    }
}

//function to toggle the mod menu on or off.
function toggleModText(state) {
    if (state && state === true) {
        document.getElementById('modWrap').classList.remove('hidden');
        reloadItems();
    } else {
        document.getElementById('modWrap').classList.add('hidden');
        //upon disabling mods, we also load just vanilla items
        loadItems(['vanilla']);
    }
}

//function to toggle the mod menu's visibility
function toggleModMenu(forceOff = false) {
    let menu = document.getElementById('modPanel');
    let modWrap = document.getElementById('modWrap');
    if (menu.classList.contains('hidden') && forceOff === false) {
        menu.classList.remove('hidden');
        modWrap.classList.add('whiteGlow');
    } else {
        menu.classList.add('hidden');
        modWrap.classList.remove('whiteGlow');
    }
}

//sorts based on toggleSort's status by using the order property. false is sort alphabetically, true is by the commandSort list.
function sortItems(toggleSort) {
    let commandSort = [];
    for (setName in itemsCache) {
        let set = itemsCache[setName];
        commandSort = commandSort.concat(set.commandSort);
    }
    for (i=0; i < commandSort.length; i++) {
        document.getElementById(commandSort[i]).style = toggleSort === true ? `order: ${i};` : '';
    }
}

//adds extra visual flair to item descriptions. We use this so we don't clog up our descriptions with HTML tags
function addTextFlair(items) {
    for (let setName in items) {
        let set = items[setName];
        for (let itemName in set.items) {
            if (set.items[itemName].name) {
                //add artifact label to artifacts
                if (set.items[itemName].itemClass == 'purple') {
                    items[setName].items[itemName].description = `<span class='purple'>ARTIFACT.</span><br><span class='gray'>This item must be toggled on the character select screen.</span><br><br>${items[setName].items[itemName].description}`;
                }
                //add color tags to keywords
                items[setName].items[itemName].description = items[setName].items[itemName].description.replace(/On hit:/i, '<span class=\'red\'>On hit:</span>');
                items[setName].items[itemName].description = items[setName].items[itemName].description.replace(/On kill:/i, '<span class=\'red\'>On kill:</span>');
                items[setName].items[itemName].description = items[setName].items[itemName].description.replace(/On crit:/i, '<span class=\'red\'>On crit:</span>');
            }
        }
    }
}

//function to generate categories based on what sets are being loaded.
function createCategories(items) {
    let categories = {};
    //make sure we don't have duplicate group names or colors
    let oldCategories =  [ ...document.getElementById('itemPanel').childNodes ];
    for (let setName in items) {
        let set = items[setName];
        for (let category in set.classInfo) {
            if (!alreadyExists(category, set.classInfo[category], categories)) {
                if (!alreadyCreated(category, oldCategories)) {
                    categories[category] = set.classInfo[category];
                }
            }
        }
    }
    //create the categories
    for (let catName in categories) {
        let itemPanel = document.getElementById('itemPanel');
        let catDiv = document.createElement('div');
        catDiv.id = catName;
        catDiv.classList.add('category');
        catDiv.style = `color:${categories[catName]};border-color:${categories[catName]};`
        itemPanel.appendChild(catDiv);
    }
}

//function to create mod menu toggle switches based on the item packs listed in manifests.js
function createModButtons() {
    let checkFlex = document.getElementById('checkFlex');
    let enabledItems = getOrCreateEnabledItems();
    for (let man in manifests) {
        let toggleLabel = document.createElement('label');
        let toggleInput = document.createElement('input');
        let toggleSpan = document.createElement('span');
        let text = document.createTextNode(manifests[man]);
        toggleLabel.classList.add('checkContainer');
        toggleLabel.setAttribute('id', manifests[man])
        toggleSpan.classList.add('modCheckmark');
        toggleInput.setAttribute('type', 'checkbox')
        toggleInput.setAttribute('id', 'check')
        toggleLabel.appendChild(text)
        toggleLabel.appendChild(toggleInput);
        toggleLabel.appendChild(toggleSpan);
        checkFlex.appendChild(toggleLabel);
        toggleLabel.onchange = () => { reloadItems(); }
        enabledItems.forEach((element) => {
            if (element == manifests[man]) { toggleInput.checked = 'checked' }
        });
    }
}

//reloads items based on currently selected mods checkboxes
function reloadItems() {
    let toBeLoaded = [];
    let checkFlex = document.getElementById('checkFlex');
    let children = [ ...checkFlex.childNodes ];
    for (let childName in children) {
        let child = children[childName];
        if (child.tagName == 'LABEL') {
            let buttonState = child.getElementsByTagName('input')[0].checked;
            if (buttonState) {
                toBeLoaded.push(child.id);
            }
        }
    }
    setCookie('enabledItems', JSON.stringify(toBeLoaded), 365);
    loadItems(toBeLoaded);
}

//retrieves an item object and set from the cache by name
function getItem(target) {
    for (let setName in itemsCache) {
        let set = itemsCache[setName];
        for (let itemName in set.items) {
            if (target == itemName) {
                return {"item": set.items[itemName], "setName": setName};
            }
        }
    }
    return null;
}

//function to check for a key/value match in an obj.
function alreadyExists(key, value, obj) {
    for (let objKey in obj) {
        if (objKey == key || obj[objKey] == value) {
            return true;
        }
    }
    return false;
}

//loops through a list of elements to see if the target category has already been created or not.
function alreadyCreated(target, list) {
    list.forEach(element => {
        if (element.id == target) { return true; }
    });
}

//opens supplied link in a new tab, instead of replacing the current window like an <a> tag does by default
function openInTab(href) {
    let newWindow = window.open(href, '_blank');
    newWindow.focus();
}