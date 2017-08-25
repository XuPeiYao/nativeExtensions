System.register(["./Browsers"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Browsers_1, Browsers_2;
    return {
        setters: [
            function (Browsers_1_1) {
                Browsers_1 = Browsers_1_1;
                Browsers_2 = Browsers_1_1;
            }
        ],
        execute: function () {
            window.isBrowser = function (browser) {
                return window.browsers.indexOf(browser) > -1;
            };
            window.browsers = (function () {
                //REF: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
                var result = [];
                for (var browser in Browsers_2.BrowsersChecker) {
                    if (Browsers_2.BrowsersChecker[browser]()) {
                        result.push(browser);
                    }
                }
                if (result.length == 0) {
                    result.push(Browsers_1.Browsers.Unknow);
                }
                return result;
            })();
        }
    };
});
//# sourceMappingURL=Window.js.map