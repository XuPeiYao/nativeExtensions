module nativeExtensions.Browser{
    /**
     * 瀏覽器類型
     */
    export enum Browsers{
        /**
         * Microsoft Internet Explorer
         */
        MSIE,
        Opera,
        Firefox,
        Edge,
        Safari,
        Chrome,
        Blink,
        /**
         * 未知的瀏覽器
         */
        Unknow
    }

    export var BrowsersChecker : any = {
        [Browsers.Opera] : ()=>(!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
        [Browsers.Firefox] : ()=>typeof InstallTrigger !== 'undefined',
        [Browsers.Safari] :  ()=>/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
        [Browsers.MSIE] : () => /*@cc_on!@*/false || !!document.documentMode,
        [Browsers.Edge] : ()=>!BrowsersChecker[Browsers.MSIE]() && !!window.StyleMedia,
        [Browsers.Chrome] : ()=>!!window.chrome && !!window.chrome.webstore,
        [Browsers.Blink] : ()=>(BrowsersChecker[Browsers.Chrome]() || BrowsersChecker[Browsers.Opera]()) && !!window.CSS
    }
}