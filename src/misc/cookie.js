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

//adds or modifies a cookie.
export function setCookie(key, value, expireDays = 365) {
    let date = new Date();
    date.setTime(+date + (expireDays * 86400000));
    let expires = `expires=${date.toGMTString()}`;
    document.cookie = `${key}=${value};${expires};SameSite=None;Secure=True`;
}

//returns the value of a cookie that has a boolean value. defaultValue is used if the supplied cookie isn't already defined.
export function getBoolCookie(key, defaultValue) {
    let cookie = getCookie(key);
    if (cookie) {
        return cookie === 'true' ? true : false;
    } else {
        //the cookie hasn't been made yet, let's do that now.
        setCookie(key, `${defaultValue}`, 365);
        return defaultValue;
    }
}

//gets the value of a cookie, or creates one from default value if it doesn't exist
export function getOrCreateCookie(key, defaultValue) {
    const cookie = getCookie(key);
    if (cookie) {
        return cookie;
    } else {
        setCookie(key, `${defaultValue}`, 365);
        return defaultValue;
    }
}

//retrieves last enabled items, or creates a default template if it's never been called
export function getOrCreateEnabledItems(folderName) {
    if (!folderName) return ["vanilla"];

    let cookie = getCookie(`${folderName}enabledItems`);
    if (cookie) {
        return JSON.parse(cookie);
    } else {
        setCookie(`${folderName}enabledItems`, '["vanilla"]', 365);
        return ["vanilla"];
    }
}