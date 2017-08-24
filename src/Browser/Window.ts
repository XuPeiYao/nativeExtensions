declare var opr, InstallTrigger, safari;
interface Window {
    browsers: nativeExtensions.Browser.Browsers[];
    opr; 
    opera;
    addons;
    HTMLElement;
    StyleMedia;
    chrome;
    CSS;
    isBrowser;
}
interface Document {
    documentMode;
}
module nativeExtensions.Browser{
    window.isBrowser = function(browser: Browsers): boolean{
        return window.browsers.indexOf(browser) > -1;
    }
    window.browsers = (() => {
        //REF: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
        
        var result : Browsers[] = [];

        for(let browser in BrowsersChecker){
            if(BrowsersChecker[browser]()){
                result.push(browser as any as number);
            }
        }

        if (result.length == 0) {
            result.push(Browsers.Unknow);
        }
        return result;
    })();
}