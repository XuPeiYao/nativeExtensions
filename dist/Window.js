var nativeExtensions;
(function (nativeExtensions) {
    var Browser;
    (function (Browser) {
        window.browsers = (function () {
            //REF: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
            var result = [];
            for (var browser in Browser.BrowsersChecker) {
                if (Browser.BrowsersChecker[browser]()) {
                    result.push(browser);
                }
            }
            if (result.length == 0) {
                result.push(Browser.Browsers.Unknow);
            }
            return result;
        })();
    })(Browser = nativeExtensions.Browser || (nativeExtensions.Browser = {}));
})(nativeExtensions || (nativeExtensions = {}));
//# sourceMappingURL=Window.js.map