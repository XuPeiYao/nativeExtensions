function parseHTML(htmlString: string): HTMLDocument {
    if (window.browser.contains(Browser.MSIE)) {
        return <HTMLDocument>(<any>new DOMParser().parseFromString(htmlString, "text/xml").documentElement);
    }
    return new DOMParser().parseFromString(htmlString, "text/html");
}
function parseXML(xmlString: string): HTMLDocument {
    return new DOMParser().parseFromString(xmlString, "text/xml");
}
function parseNode(nodeString: string): Node {
    if (window.browser.contains(Browser.MSIE)) {
        return <HTMLDocument>(<any>new DOMParser().parseFromString(nodeString, "text/xml").documentElement);
    }
    return new DOMParser().parseFromString(nodeString, "text/html").body.childNodes[0];
}