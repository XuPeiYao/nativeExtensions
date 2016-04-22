﻿module nativeExtensions {
    "use strict";
    export class HttpClient {
        public requestHeader: any = null;
        public withCredentials: boolean = false;
        public progressCallback: (event: ProgressEvent) => any;

        public user: string;
        public password: string;

        private async openAndSend(method: string, url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse> {
            return new Promise<HttpResponse>((resolve, reject) => {
                var xhr = new XMLHttpRequest();
                //#region 事件與屬性
                xhr.withCredentials = this.withCredentials;
                xhr.onprogress = progressCallback || this.progressCallback;
                xhr.onreadystatechange = function (event) {
                    if (xhr.readyState !== 4) return;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var result = new HttpResponse();
                        result.header = xhr.getAllResponseHeaders();
                        result.statusCode = xhr.status;
                        result.resultType = xhr.responseType;
                        result.resultText = xhr.responseText;
                        result.resultXML = xhr.responseXML;
                        result.result = xhr.response;
                        resolve(result);
                    } else {
                        reject(xhr.statusText);
                    }
                };
                //#endregion

                xhr.open(method, url, true, user || this.user, password || this.password);

                //#region 設定Header
                if (this.requestHeader) for (var key in this.requestHeader) xhr.setRequestHeader(key, this.requestHeader[key]);
                if (header) for (var key in header) xhr.setRequestHeader(key, header[key]);
                //#endregion

                if (data) {
                    if (data instanceof FormData || typeOf(data) == 'String') {
                        xhr.send(data);
                    } else {
                        if (method == "GET" || method == "DELETE") {
                            var params = new Array<string>();
                            for (var key in data) params.push(`${key}=${encodeURIComponent(data[key])}`);
                            xhr.send(params.join("&"));
                        } else {
                            var formdata: FormData = new FormData();
                            for (var key in data) {
                                if (data[key] instanceof Function) continue;
                                formdata.append(key, data[key]);
                            }
                            xhr.send(formdata);
                        }
                    }
                } else {
                    xhr.send();
                }
            });
        }
        public async getAsync(url: string, header?: any, user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse> {
            return await this.openAndSend('GET', url, header, null, user, password, progressCallback);
        }
        public async postAsync(url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse> {
            return await this.openAndSend('POST', url, header, data, user, password, progressCallback);
        }
        public async putAsync(url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse> {
            return await this.openAndSend('PUT', url, header, data, user, password, progressCallback);
        }
        public async deleteAsync(url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse> {
            return await this.openAndSend('DELETE', url, header, data, user, password, progressCallback);
        }
    }
    export class HttpResponse {
        public statusCode: number;
        public header: any;
        public resultType: string;
        public resultText: string;
        public resultXML: Document;
        public result: any;
    }
}
var HttpClient = nativeExtensions.HttpClient;