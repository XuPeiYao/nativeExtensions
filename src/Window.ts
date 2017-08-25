import { Browsers } from "./Browsers";
import { BrowsersChecker } from "./Browsers";
import { WindowExtension } from "./Declaration";

(window as WindowExtension).isBrowser = function (browser: Browsers): boolean {
    return (window as WindowExtension).browsers.indexOf(browser) > -1;
};
(window as WindowExtension).browsers = (() => {
    //REF: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

    var result: Browsers[] = [];

    for (let browser in BrowsersChecker) {
        if (BrowsersChecker[browser]()) {
            result.push(browser as any as number);
        }
    }

    if (result.length == 0) {
        result.push(Browsers.Unknow);
    }
    return result;
})();
