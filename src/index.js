window.onload = () => {
    loadIcons();
    document.getElementsByClassName('search')[0].oninput = (e) => { searchFilter(e) }
}

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
            setInfo(items[item], item);
        }

        itemImg.onmouseleave = () => {
            wipeInfo();
        }
    }
}

let setInfo = (item, itemName) => {
    let panel = document.getElementsByClassName('infoPanel')[0];
    panel.classList.remove('fadeOut');
    panel.classList.add('fadeIn');

    let title = document.getElementsByClassName('infoTitle')[0];
    let image = document.getElementsByClassName('infoImage')[0];
    let desc = document.getElementsByClassName('infoDesc')[0];

    let cooldown = document.getElementsByClassName('infoCooldown')[0];
    let cooldownTitle = document.getElementById('infoCooldownTitle');
    
    let stack = document.getElementsByClassName('infoStack')[0];
    let stackTitle = document.getElementById('infoStackTitle');
    
    let unlock = document.getElementsByClassName('infoUnlock')[0];
    let unlockTitle = document.getElementById('infoUnlockTitle');

    title.innerHTML = item.name;
    image.src = `static/itemIcons/item_${itemName}.png`;
    desc.innerHTML = item.description;
    
    if ("cooldown" in item) {
        cooldownTitle.classList.remove('hidden');
        cooldown.innerHTML = `${item.cooldown} seconds`;
    } else {
        cooldownTitle.classList.add('hidden');
        cooldown.innerHTML = '';
    }

    if ("stack" in item) {
        stackTitle.innerHTML = 'Stacking Effect:';
        stack.innerHTML = item.stack;
    } else {
        stackTitle.innerHTML = 'Beating Embryo effect:';
        stack.innerHTML = item.embryo;
    }

    if ("unlock" in item) {
        unlockTitle.classList.remove('hidden');
        unlock.innerHTML = item.unlock;
    } else {
        unlockTitle.classList.add('hidden');
        unlock.innerHTML = '';
    }
}

let wipeInfo = () => {
    let panel = document.getElementsByClassName('infoPanel')[0];
    panel.classList.remove('fadeIn');
    panel.classList.add('fadeOut');
}

let searchFilter = (e) => {
    let text = e.srcElement.value;
    let itemList = document.getElementsByClassName('item');
    let filter = new RegExp(`(${text})`);
    for (let item in items) {
        let name = items[item].name.toLowerCase();
        let desc = items[item].description.toLowerCase();
        if (name.match(filter) !== null || desc.match(filter) !== null) {
            document.getElementById(item).classList.remove('faded');
        } else {
            document.getElementById(item).classList.add('faded');
        }
    }
}