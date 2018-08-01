//check if we're on mobile or not. Works in tandem with CSS media queries.
function onMobile() {
    if(typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1 || window.innerWidth <= 560) {
        return true;
    }
    return false;
}

//switches formatting between mobile and desktop. Primarily used when screens get rotated on tablets
function resizeCheck() {
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

//closes the info panel and fullscreens the items.
function closeInfo() {
    let items = document.getElementsByClassName('itemPanel')[0];
    items.classList.remove('hidden');
    items.classList.add('fullWidth');
    let info = document.getElementsByClassName('infoPanel')[0];
    info.classList.add('hidden');
    info.classList.remove('fullWidth');
}

//closes the items panel and fullscreens the item info.
function closeItems() {
    let items = document.getElementsByClassName('itemPanel')[0];
    items.classList.add('hidden');
    items.classList.remove('fullWidth');
    let info = document.getElementsByClassName('infoPanel')[0];
    info.classList.remove('hidden');
    info.classList.add('fullWidth');
}