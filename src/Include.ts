import { HttpClient } from "./HttpClient";
import { parseHTML } from "./Parse";
import { MathExtension } from "./Declaration";
import "./Math";
import "./NodeList";

/**
 * 非同步載入樣板
 */
export async function includeAsync(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            var includeTags = [];
            var temp = document.getElementsByTagName("include");
            for (var i = 0; i < temp.length; i++) {
                includeTags.push(temp[i]);
            }

            if (includeTags.length == 0) {
                resolve();
                return;
            }

            for (var i = 0; i < includeTags.length; i++) {
                var includeTag = includeTags[i];
                includeTag.setAttribute("id", (Math as MathExtension).uuid());
                var fileSrc = includeTag.getAttribute("src");
                if (!fileSrc) continue;
                var client = new HttpClient();
                var response = await client.getAsync(fileSrc);
                parseHTML((<string>response.result)).body.childNodes.toArray().forEach((x: Node) => {
                    includeTag.parentNode.insertBefore(x, includeTag);
                });
                console.info("include " + fileSrc);
                includeTag.parentNode.removeChild(includeTag);
            }
            await include();//Deep
        } catch (e) {
            reject(e);
        }
        resolve();
    });
}

/**
 * 載入樣板
 */
export function include(): void {
    var includeTags = [];
    var temp = document.getElementsByTagName("include");
    for (var i = 0; i < temp.length; i++) {
        includeTags.push(temp[i]);
    }

    if (includeTags.length == 0) {
        return;
    }

    for (var i = 0; i < includeTags.length; i++) {
        var includeTag = includeTags[i];
        includeTag.setAttribute("id", (Math as MathExtension).uuid());
        var fileSrc = includeTag.getAttribute("src");
        if (!fileSrc) continue;
        var client = new XMLHttpRequest(); //請求用物件
        client.open('GET', fileSrc, false);
        client.send();
        parseHTML((<string>client.response || client.responseText)).body.childNodes.toArray().forEach((x: Node) => {
            includeTag.parentNode.insertBefore(x, includeTag);
        });
        console.info("include " + fileSrc);
        includeTag.parentNode.removeChild(includeTag);
    }
    include();//Deep
}