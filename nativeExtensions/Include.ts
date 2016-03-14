async function include(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            var includeTags = document.getElementsByTagName("include")
                .toArray<Element>()
                .filter(x => x.getAttribute("isComplete") != null);
            if (includeTags.length == 0) {
                resolve();
                return;
            }
            includeTags.forEach(async (includeTag) => {//BFS
                includeTag.setAttribute("id", Math.uuid());
                var fileSrc = includeTag.getAttribute("src");
                if (!fileSrc)return;
                var client = new HttpClient();
                var response = await client.getAsync(fileSrc);
                parseHTML((<string>response.result)).body.childNodes.toArray().forEach((x: Node) => {
                    includeTag.parentNode.insertBefore(x, includeTag);
                });
                includeTag.parentNode.removeChild(includeTag);
            });
            await include();//Deep
        } catch (e) {
            reject(e);
        }
        resolve();
    });
}