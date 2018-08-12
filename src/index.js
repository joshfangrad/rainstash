let selectedItem;

window.onload = () => {
    document.getElementById('search').oninput = () => { searchFilter(); }
    document.getElementById('clear').onclick = () => { clearSearch(); }
    document.getElementById('gear').onclick = () => { openOptions(); }
    document.getElementById('closeOptions').onclick = () => { closeOptions(); }
    document.getElementById('closeInfo').onclick = () => { closeInfo(); removeSelection(); }
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
    
    //set up togglePerformance switch
    let togglePerformance = document.getElementById('togglePerformance');
    togglePerformance.checked = checkBoolCookie('togglePerformance', false);
    togglePerformance.onchange = (e) => { 
        setCookie('togglePerformance', e.target.checked, 365);
        togglePerformanceMode(e.target.checked);
    }
    
    loadItems(['vanilla'], () => {
        addTextFlair();
        loadIcons();
        sortItems(toggleSort.checked);
        togglePerformanceMode(togglePerformance.checked);
    });
}

//function to load item manifests.
function loadItems(manifests, callback) {
    if (manifests.length > 0) {
        let scriptCount = manifests.length;
        for (let manifest of manifests) {
            let script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', `items/${manifest}_items/itemManifest.js`);
            script.onload = script.onreadystatechange = () => {
                script.onload = script.onreadystatechange = null;
                scriptCount--;
                if (scriptCount < 1) { callback(script); } 
            }
            document.head.appendChild(script);
        }
    }
}

//iterates through the itemManifest and loads item icons and details from it.
function loadIcons() {
    for (let item in items) {
        let itemClass = items[item].itemClass;
        let targetCategory = document.getElementsByClassName(itemClass)[0];
        let itemImg = document.createElement('img');
        itemImg.classList.add('item');
        itemImg.src = `static/itemIcons/item_${item}.png`;
        itemImg.id = item;
        targetCategory.appendChild(itemImg);

        itemImg.onmouseenter = () => {
            setInfo(item);
        }

        itemImg.onmouseleave = (e) => {
            hideInfo(e);
        }
        
        itemImg.ondragstart = (e) => {
            if (onMobile()) { 
                setInfo(item);
                closeItems(); 
            }
            changeSelected(e);
            //return false to prevent dragging 'ghost' effect
            return false;
        }

        itemImg.onclick = (e) => {
            if (onMobile()) { 
                setInfo(item);
                closeItems(); 
            }
            changeSelected(e);
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
}

//sets the details on the info panel to the supplied item's info.
function setInfo(itemName) {
    let panel = document.getElementsByClassName('infoPanel')[0];
    document.getElementsByClassName('infoImage')[0].innerHTML = '';
    panel.classList.remove('fadeOut');
    panel.classList.add('fadeIn');
    let item = items[itemName];
    
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
    infoImage.src = `static/itemIcons/item_${itemName}.png`;
    
    document.getElementById('stackTitle').innerHTML = 'stack' in item ? 'Stacking Effect:' : 'Beating Embryo effect:';
    document.getElementById('unlockTitle').innerHTML = 'unlock' in item ? 'Unlock:' : 'Dropped by:';

    //change the hasVideo video if the item has one, and the user has them turned on.
    let video = document.getElementById('video');
    let loadVids = document.getElementById('loadVids');
    video.innerHTML = '';
    if ('hasVideo' in item && item.hasVideo === true && loadVids.checked === true) {
        video.classList.remove('hidden');
        let source = document.createElement('source');
        source.setAttribute('src', `static/usageMP4s/usage_${itemName}.mp4`);
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
    for (let item in items) {
        let name = items[item].name;
        let desc = items[item].description;
        if (name.match(filter) !== null || desc.match(filter) !== null || item == selectedItem) {
            document.getElementById(item).classList.remove('faded');
        } else {
            document.getElementById(item).classList.add('faded');
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

//opens supplied link in a new tab, instead of replacing the current window like an <a> tag does by default
function openInTab(href) {
    let newWindow = window.open(href, '_blank');
    newWindow.focus();
}

//sorts based on toggleSort's status by using the order property. false is sort alphabetically, true is by the commandSort list.
function sortItems(toggleSort) {
    for (i=0; i < commandSort.length; i++) {
        document.getElementById(commandSort[i]).style = toggleSort === true ? `order: ${i};` : '';
    }
}

//adds extra visual flair to item descriptions. We use this so we don't clog up our descriptions with HTML tags
function addTextFlair() {
    for (let i in items) {
        if (items[i].name) {
            //add artifact label to artifacts
            if (items[i].itemClass == 'purple') {
                items[i].description = `<span class='purple'>ARTIFACT.</span><br><span class='gray'>This item must be toggled on the character select screen.</span><br><br>${items[i].description}`;
            }
            //add color tags to keywords
            items[i].description = items[i].description.replace(/On hit:/i, '<span class=\'red\'>On hit:</span>');
            items[i].description = items[i].description.replace(/On kill:/i, '<span class=\'red\'>On kill:</span>');
            items[i].description = items[i].description.replace(/On crit:/i, '<span class=\'red\'>On crit:</span>');
        }
    }
}