let selectedItem;

window.onload = () => {
    loadIcons();
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
}

//iterates through the itemManifest and loads item icons and details from it.
let loadIcons = () => {
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
            changeSelected(e);
            if (onMobile()) { closeItems(); }
            //return false to prevent dragging 'ghost' effect
            return false;
        }

        itemImg.onclick = (e) => {
            changeSelected(e);
            if (onMobile()) { closeItems(); }
        }
    }
}

//called by click event, changes what the currently selected item is
let changeSelected = (e) => {
    let itemName = e.srcElement.id;
    let item = items[itemName];
    //mobile compatibility in here later
    if (selectedItem != itemName) {
        let oldSelect = document.getElementById(selectedItem);
        if (oldSelect != null) { 
            oldSelect.classList.remove('select');
        }
        selectedItem = itemName;
        e.srcElement.classList.add('select');
    } else {
        document.getElementById(selectedItem).classList.remove('select');
        selectedItem = null;
    }
    //re-run search filter to re-hide / unhide selected items
    searchFilter();
}

//sets the details on the info panel to the supplied item's info.
let setInfo = (itemName) => {
    let panel = document.getElementsByClassName('infoPanel')[0];
    panel.classList.remove('fadeOut');
    panel.classList.add('fadeIn');
    let item = items[itemName];
    
    for (prop in item) {
        //we can get rid of the usage check later once we complete all the mp4s
        if (prop != 'usage' && prop != 'itemClass') {
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

    if ('unlock' in item) {
        unlockTitle.classList.remove('hidden');
        unlock.innerHTML = item.unlock;
    } else {
        unlockTitle.classList.add('hidden');
        unlock.innerHTML = '';
    }
    
    let image = document.getElementsByClassName('infoImage')[0];
    image.src = `static/itemIcons/item_${itemName}.png`;
    
    document.getElementById('stackTitle').innerHTML = 'stack' in item ? 'Stacking Effect:' : 'Beating Embryo effect:';

    //change the usage video if the item has one
    let video = document.getElementById('video');
    video.innerHTML = '';
    if ('usage' in item && item.usage === true) {
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
let hideInfo = (e) => {
    if (selectedItem == null) {
        let panel = document.getElementsByClassName('infoPanel')[0];
        panel.classList.remove('fadeIn');
        panel.classList.add('fadeOut');
    } else if (e.fromElement.id != selectedItem) {
        setInfo(selectedItem);
    }
}

//dims items based on the current text in the search bar.
let searchFilter = () => {
    let text = document.getElementById('search').value;
    let itemList = document.getElementsByClassName('item');
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
let clearSearch = () => {
    document.getElementById('search').value = '';
    searchFilter();
}

//opens the options panel.
let openOptions = () => {
    document.getElementById('dim').classList.add('unhideDim');
}

//closes the options panel
let closeOptions = () => {
    document.getElementById('dim').classList.remove('unhideDim');
}

//opens supplied link in a new tab, instead of replacing the current window like an <a> tag does by default
let openInTab = (href) => {
    let newWindow = window.open(href, '_blank');
    newWindow.focus();
}

//MOBILE COMPATIBILITY THINGS

//check if we're on mobile or not. Works in tandem with CSS media queries.
let onMobile = () => {
    if(typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1) {
        //experimental width check as well, need to test this with more devices
        if (window.innerWidth <= 560) {
            return true;
        }
    }
    return false;
}

//switches formatting between mobile and desktop. Primarily used when screens get rotated on tablets
let resizeCheck = () => {
    if (onMobile()) {
        document.getElementById('closeInfo').classList.remove('hidden');
        closeInfo();
    } else {
        document.getElementById('closeInfo').classList.add('hidden');
        let items = document.getElementsByClassName('itemPanel')[0];
        items.classList.remove('hidden');
        items.classList.remove('fullWidth');
        let info = document.getElementsByClassName('infoPanel')[0];
        info.classList.remove('hidden');
        info.classList.remove('fullWidth');
    }
}

//removes currently selected item.
let removeSelection = () => {
    if (selectedItem != null) {
        document.getElementById(selectedItem).classList.remove('select');
        selectedItem = null;
    }
}

//closes the info panel and fullscreens the items.
let closeInfo = () => {
    let items = document.getElementsByClassName('itemPanel')[0];
    items.classList.remove('hidden');
    items.classList.add('fullWidth');
    let info = document.getElementsByClassName('infoPanel')[0];
    info.classList.add('hidden');
    info.classList.remove('fullWidth');
}

//closes the items panel and fullscreens the item info.
let closeItems = () => {
    let items = document.getElementsByClassName('itemPanel')[0];
    items.classList.add('hidden');
    items.classList.remove('fullWidth');
    let info = document.getElementsByClassName('infoPanel')[0];
    info.classList.remove('hidden');
    info.classList.add('fullWidth');
}