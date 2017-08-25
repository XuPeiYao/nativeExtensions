import { 
    WindowExtension, 
    DocumentExtension,
    opr,safari,InstallTrigger
} from "./Declaration";

/**
 * 瀏覽器類型
 */
export enum Browsers {
    /**
     * Microsoft Internet Explorer
     */
    MSIE,
    /**
     * Opera
     */
    Opera,
    /**
     * Mozilla Firefox
     */
    Firefox,
    /**
     * Microsoft Edge
     */
    Edge,
    /**
     * Safari
     */
    Safari,
    /**
     * Google Chrome
     */
    Chrome,
    /**
     * Blink
     */
    Blink,
    /**
     * 未知的瀏覽器
     */
    Unknow
}

/**
 * 瀏覽器檢查列表
 */
export var BrowsersChecker: any = {
    [Browsers.Opera]: () => (!!(window as WindowExtension).opr && !!opr.addons) || !!(window as WindowExtension).opera || navigator.userAgent.indexOf(' OPR/') >= 0,
    [Browsers.Firefox]: () => typeof InstallTrigger !== 'undefined',
    [Browsers.Safari]: () => /constructor/i.test((window as WindowExtension).HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
    [Browsers.MSIE]: () => /*@cc_on!@*/false || !!(document as DocumentExtension).documentMode,
    [Browsers.Edge]: () => !BrowsersChecker[Browsers.MSIE]() && !!(window as WindowExtension).StyleMedia,
    [Browsers.Chrome]: () => !!(window as WindowExtension).chrome && !!(window as WindowExtension).chrome.webstore,
    [Browsers.Blink]: () => (BrowsersChecker[Browsers.Chrome]() || BrowsersChecker[Browsers.Opera]()) && !!(window as WindowExtension).CSS
}