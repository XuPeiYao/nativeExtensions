enum Browser {
    MSIE,
    Opera,
    Firefox,
    Edge,
    Safari,
    Chrome,
    Blink,
    Unknow
}
interface Window {
    browser: Browser[];
    opr; opera; addons;
    HTMLElement;
    StyleMedia;
    chrome;
    CSS;
}

interface Document {
    documentMode;
}

declare var opr, InstallTrigger, safari;

window.browser = (() => {
    //REF: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

    var result = [];

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (isOpera) result.push(Browser.Opera);

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) result.push(Browser.Firefox);

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    if (isSafari) result.push(Browser.Safari);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE) result.push(Browser.MSIE);

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    if (isEdge) result.push(Browser.Edge);

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isChrome) result.push(Browser.Chrome);

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    if (isBlink) result.push(Browser.Blink);

    if (result.length == 0) {
        result.push(Browser.Unknow);
    }
    return result;
})();