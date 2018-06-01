//adds or modifies a cookie.
let setCookie = (key, value, expireDays) => {
    expireDays = expireDays || 5;
    let date = new Date();
    date.setTime(+date + (expireDays * 86400000));
    let expires = `expires=${date.toGMTString()}`;
    document.cookie = `${key}=${value};${expires}`;
}

//looks for a specific key in the website's cookies. Usually not called externally.
let getCookie = (key) => {
    let dCookie = decodeURIComponent(document.cookie);
    //look for key=value in cookie
    let find = dCookie.match(new RegExp(`${key}=\\w+`));
    if (find) {
        //remove key from the match
        return find[0].replace(new RegExp(`\\w+=`), '');
    } else {
        return null;
    }
}

//returns the value of a cookie that has a boolean value. defaultState is used if the supplied cookie isn't already defined.
let checkBoolCookie = (key, defaultState) => {
    let cookie = getCookie(key);
    if (cookie) {
        return cookie == 'true' ? true : false;
    } else {
        //the cookie hasn't been made yet, let's do that now.
        setCookie(key, `${defaultState}`, 365);
        return defaultState;
    }
}