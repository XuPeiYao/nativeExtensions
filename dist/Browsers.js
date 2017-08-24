var nativeExtensions;
(function (nativeExtensions) {
    var Browser;
    (function (Browser) {
        /**
         * 瀏覽器類型
         */
        var Browsers;
        (function (Browsers) {
            /**
             * Microsoft Internet Explorer
             */
            Browsers[Browsers["MSIE"] = 0] = "MSIE";
            Browsers[Browsers["Opera"] = 1] = "Opera";
            Browsers[Browsers["Firefox"] = 2] = "Firefox";
            Browsers[Browsers["Edge"] = 3] = "Edge";
            Browsers[Browsers["Safari"] = 4] = "Safari";
            Browsers[Browsers["Chrome"] = 5] = "Chrome";
            Browsers[Browsers["Blink"] = 6] = "Blink";
            /**
             * 未知的瀏覽器
             */
            Browsers[Browsers["Unknow"] = 7] = "Unknow";
        })(Browsers = Browser.Browsers || (Browser.Browsers = {}));
        Browser.BrowsersChecker = (_a = {},
            _a[Browsers.Opera] = function () { return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; },
            _a[Browsers.Firefox] = function () { return typeof InstallTrigger !== 'undefined'; },
            _a[Browsers.Safari] = function () { return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification); },
            _a[Browsers.MSIE] = function () { /*@cc_on!@*/ return false || !!document.documentMode; },
            _a[Browsers.Edge] = function () { return !Browser.BrowsersChecker[Browsers.MSIE]() && !!window.StyleMedia; },
            _a[Browsers.Chrome] = function () { return !!window.chrome && !!window.chrome.webstore; },
            _a[Browsers.Blink] = function () { return (Browser.BrowsersChecker[Browsers.Chrome]() || Browser.BrowsersChecker[Browsers.Opera]()) && !!window.CSS; },
            _a);
        var _a;
    })(Browser = nativeExtensions.Browser || (nativeExtensions.Browser = {}));
})(nativeExtensions || (nativeExtensions = {}));
//# sourceMappingURL=Browsers.js.map