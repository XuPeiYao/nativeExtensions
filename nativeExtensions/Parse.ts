function parseHTML(htmlString:string) :HTMLDocument {
    return new DOMParser().parseFromString(htmlString, "text/html");
}
function parseXML(xmlString: string): HTMLDocument {
    return new DOMParser().parseFromString(xmlString, "text/xml");
}
function parseNode(nodeString: string): Node {
    return new DOMParser().parseFromString(nodeString, "text/html").body.childNodes[0];
}