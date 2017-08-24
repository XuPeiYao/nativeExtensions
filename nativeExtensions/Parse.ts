function parseHTML(htmlString: string): HTMLDocument {
    if (window.browser.contains(Browser.MSIE)) {
        var result = {
            body: document.createElement("div")
        };
        result.body.innerHTML = htmlString;
        return <HTMLDocument>(<any>result);
    }
    return new DOMParser().parseFromString(htmlString, "text/html");
}
function parseXML(xmlString: string): HTMLDocument {
    return new DOMParser().parseFromString(xmlString, "text/xml");
}
function parseNode(nodeString: string): Node {
    if (window.browser.contains(Browser.MSIE)) {
        var element = document.createElement("div");
        element.innerHTML = nodeString;
        return <HTMLDocument>element.firstChild;
    }
    return new DOMParser().parseFromString(nodeString, "text/html").body.childNodes[0];
}