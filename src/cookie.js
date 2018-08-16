//adds or modifies a cookie.
function setCookie(key, value, expireDays) {
    expireDays = expireDays || 5;
    let date = new Date();
    date.setTime(+date + (expireDays * 86400000));
    let expires = `expires=${date.toGMTString()}`;
    document.cookie = `${key}=${value};${expires}`;
}

//looks for a specific key in the website's cookies. Usually not called externally.
function getCookie(key) {
    let dCookie = decodeURIComponent(document.cookie);
    //look for key=value in cookie
    let find = dCookie.match(new RegExp(`${key}=[^;]+`));
    if (find) {
        //remove key from the match
        return find[0].replace(new RegExp(`\\w+=`), '');
    } else {
        return null;
    }
}

//returns the value of a cookie that has a boolean value. defaultState is used if the supplied cookie isn't already defined.
function checkBoolCookie(key, defaultState) {
    let cookie = getCookie(key);
    if (cookie) {
        return cookie == 'true' ? true : false;
    } else {
        //the cookie hasn't been made yet, let's do that now.
        setCookie(key, `${defaultState}`, 365);
        return defaultState;
    }
}

//retrieves last enabled items, or creates a default template if it's never been called
function getOrCreateEnabledItems() {
    let cookie = getCookie('enabledItems');
    if (cookie) {
        return JSON.parse(cookie);
    } else {
        setCookie('enabledItems', '[\"vanilla\"]', 365);
    }
    return null;
}