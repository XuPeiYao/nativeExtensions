import { 
    WindowExtension, 
    DocumentExtension
} from "./Declaration";
import {
    Browsers
} from "./Browsers"

/**
 * 字串轉為HTML Document結構
 * @param htmlString HTML字串 
 */
export function parseHTML(htmlString: string): HTMLDocument {
    if ((window as WindowExtension).isBrowser(Browsers.MSIE)) {
        var result = {
            body: document.createElement("div")
        };
        result.body.innerHTML = htmlString;
        return <HTMLDocument>(<any>result);
    }
    return new DOMParser().parseFromString(htmlString, "text/html");
}

/**
 * 字串轉為XML結構
 * @param xmlString XML字串
 */
export function parseXML(xmlString: string): HTMLDocument {
    return new DOMParser().parseFromString(xmlString, "text/xml");
}

/**
 * 字串轉為Node結構
 * @param nodeString HTML單一節點字串
 */
export function parseNode(nodeString: string): Node {
    if ((window as WindowExtension).isBrowser(Browsers.MSIE)) {
        var element = document.createElement("div");
        element.innerHTML = nodeString;
        return <HTMLDocument>element.firstChild;
    }
    return new DOMParser().parseFromString(nodeString, "text/html").body.childNodes[0];
}