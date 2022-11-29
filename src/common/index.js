export function writeCookie(key, value, days, cookies, setter2) {

    const date = new Date();
    // get current date and time

    days = days || 365;

    const expires = date.setTime(+ date + (days * 86400000));
    // 86400000 = number of milliseconds in a day 24 * 60 * 60 * 1000
    // setTime takes current time and adds the number of days for cookie to exist
    
    setter2(key, value, {path: '/'}, expires)

    return cookies;
};

export function getCookie(cookies) {
    return cookies.cookies.jwt_token;
}

export function getCookie2(cookies) {
    return cookies.jwt_token;
}