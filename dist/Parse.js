System.register(["./Browsers"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * 字串轉為HTML Document結構
     * @param htmlString HTML字串
     */
    function parseHTML(htmlString) {
        if (window.isBrowser(Browsers_1.Browsers.MSIE)) {
            var result = {
                body: document.createElement("div")
            };
            result.body.innerHTML = htmlString;
            return result;
        }
        return new DOMParser().parseFromString(htmlString, "text/html");
    }
    exports_1("parseHTML", parseHTML);
    /**
     * 字串轉為XML結構
     * @param xmlString XML字串
     */
    function parseXML(xmlString) {
        return new DOMParser().parseFromString(xmlString, "text/xml");
    }
    exports_1("parseXML", parseXML);
    /**
     * 字串轉為Node結構
     * @param nodeString HTML單一節點字串
     */
    function parseNode(nodeString) {
        if (window.isBrowser(Browsers_1.Browsers.MSIE)) {
            var element = document.createElement("div");
            element.innerHTML = nodeString;
            return element.firstChild;
        }
        return new DOMParser().parseFromString(nodeString, "text/html").body.childNodes[0];
    }
    exports_1("parseNode", parseNode);
    var Browsers_1;
    return {
        setters: [
            function (Browsers_1_1) {
                Browsers_1 = Browsers_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=Parse.js.map