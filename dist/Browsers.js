System.register(["./Declaration"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Declaration_1, Browsers, BrowsersChecker, _a;
    return {
        setters: [
            function (Declaration_1_1) {
                Declaration_1 = Declaration_1_1;
            }
        ],
        execute: function () {
            /**
             * 瀏覽器類型
             */
            (function (Browsers) {
                /**
                 * Microsoft Internet Explorer
                 */
                Browsers[Browsers["MSIE"] = 0] = "MSIE";
                /**
                 * Opera
                 */
                Browsers[Browsers["Opera"] = 1] = "Opera";
                /**
                 * Mozilla Firefox
                 */
                Browsers[Browsers["Firefox"] = 2] = "Firefox";
                /**
                 * Microsoft Edge
                 */
                Browsers[Browsers["Edge"] = 3] = "Edge";
                /**
                 * Safari
                 */
                Browsers[Browsers["Safari"] = 4] = "Safari";
                /**
                 * Google Chrome
                 */
                Browsers[Browsers["Chrome"] = 5] = "Chrome";
                /**
                 * Blink
                 */
                Browsers[Browsers["Blink"] = 6] = "Blink";
                /**
                 * 未知的瀏覽器
                 */
                Browsers[Browsers["Unknow"] = 7] = "Unknow";
            })(Browsers || (Browsers = {}));
            exports_1("Browsers", Browsers);
            /**
             * 瀏覽器檢查列表
             */
            exports_1("BrowsersChecker", BrowsersChecker = (_a = {},
                _a[Browsers.Opera] = function () { return (!!window.opr && !!Declaration_1.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; },
                _a[Browsers.Firefox] = function () { return typeof Declaration_1.InstallTrigger !== 'undefined'; },
                _a[Browsers.Safari] = function () { return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || Declaration_1.safari.pushNotification); },
                _a[Browsers.MSIE] = function () { /*@cc_on!@*/ return false || !!document.documentMode; },
                _a[Browsers.Edge] = function () { return !BrowsersChecker[Browsers.MSIE]() && !!window.StyleMedia; },
                _a[Browsers.Chrome] = function () { return !!window.chrome && !!window.chrome.webstore; },
                _a[Browsers.Blink] = function () { return (BrowsersChecker[Browsers.Chrome]() || BrowsersChecker[Browsers.Opera]()) && !!window.CSS; },
                _a));
        }
    };
});
//# sourceMappingURL=Browsers.js.map