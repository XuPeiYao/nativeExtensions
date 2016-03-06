Array.prototype.clone = function () {
    return this.slice(0);
};
Array.prototype.take = function (count) {
    var result = new Array();
    for (var i = 0; i < count && i < this.length; i++)
        result.push(this[i]);
    return result;
};
Array.prototype.takeWhile = function (fun) {
    var result = new Array(), index = 0;
    while (fun(this[index])) {
        result.push(this[index++]);
    }
    return result;
};
Array.prototype.takeUntil = function (fun) {
    var result = new Array(), index = 0;
    while (!fun(this[index])) {
        result.push(this[index++]);
    }
    return result;
};
Array.prototype.skip = function (count) {
    return this.slice(count);
};
Array.prototype.skipWhile = function (fun) {
    var result = new Array(), index = 0;
    while (fun(this[index])) {
        index++;
    }
    return this.skip(index);
};
Array.prototype.skipUntil = function (fun) {
    var result = new Array(), index = 0;
    while (!fun(this[index])) {
        index++;
    }
    return this.skip(index);
};
Array.prototype.first = function () {
    return this[0];
};
Array.prototype.last = function () {
    return this[this.length - 1];
};
Array.prototype.contains = function (x) {
    return this.indexOf(x) > -1;
};
Array.prototype.distinct = function () {
    var result = new Array();
    this.forEach(x => {
        if (!result.contains(x))
            result.push(x);
    });
    return result;
};
Array.prototype.except = function (ary) {
    var result = new Array();
    this.forEach(x => {
        if (!ary.contains(x))
            result.push(x);
    });
    return result;
};
Array.prototype.union = function (ary) {
    return this.concat(ary).distinct();
};
Array.prototype.intersect = function (ary) {
    return this.union(ary).filter(x => this.contains(x) && ary.contains(x));
};
Array.prototype.sum = function (fun) {
    var result = 0;
    this.forEach(x => result += fun ? fun(x) : x);
    return result;
};
Array.prototype.average = function (fun) {
    return this.sum(fun) / this.length;
};
Array.prototype.max = function (fun) {
    var max = this[0];
    this.forEach(x => {
        if (fun ? fun(max, x) : (max < x))
            max = x;
    });
    return max;
};
Array.prototype.min = function (fun) {
    var min = this[0];
    this.forEach(x => {
        if (fun ? fun(min, x) : (min < x))
            min = x;
    });
    return min;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var nativeExtensions;
(function (nativeExtensions) {
    "use strict";
    class HttpClient {
        constructor() {
            this.requestHeader = {};
            this.withCredentials = false;
        }
        openAndSend(method, url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, Promise, function* () {
                return new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();
                    //#region 事件與屬性
                    xhr.withCredentials = this.withCredentials;
                    xhr.onprogress = progressCallback || this.progressCallback;
                    xhr.onreadystatechange = function (event) {
                        if (xhr.readyState !== 4)
                            return;
                        if (xhr.status >= 200 && xhr.status < 300) {
                            var result = new HttpResponse();
                            result.header = xhr.getAllResponseHeaders();
                            result.statusCode = xhr.status;
                            result.resultType = xhr.responseType;
                            result.resultText = xhr.responseText;
                            result.result = xhr.response;
                            resolve(result);
                        }
                        else {
                            reject(xhr.statusText);
                        }
                    };
                    //#endregion
                    //#region 設定Header
                    if (this.requestHeader)
                        for (var key in this.requestHeader)
                            xhr.setRequestHeader(key, this.requestHeader[key]);
                    if (header)
                        for (var key in header)
                            xhr.setRequestHeader(key, header[key]);
                    //#endregion
                    xhr.open(method, url, true, user || this.user, password || this.password);
                    if (data) {
                        if (data instanceof FormData || typeOf(data) == 'String') {
                            xhr.send(data);
                        }
                        else {
                            var params = new Array();
                            for (var key in data)
                                params.push(`${key}=${encodeURIComponent(data[key])}`);
                            xhr.send(params.join("&"));
                        }
                    }
                    else {
                        xhr.send();
                    }
                });
            });
        }
        getAsync(url, header, user, password, progressCallback) {
            return __awaiter(this, void 0, Promise, function* () {
                return yield this.openAndSend('GET', url, header, null, user, password, progressCallback);
            });
        }
        postAsync(url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, Promise, function* () {
                return yield this.openAndSend('POST', url, header, data, user, password, progressCallback);
            });
        }
        putAsync(url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, Promise, function* () {
                return yield this.openAndSend('PUT', url, header, data, user, password, progressCallback);
            });
        }
        deleteAsync(url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, Promise, function* () {
                return yield this.openAndSend('DELETE', url, header, data, user, password, progressCallback);
            });
        }
    }
    nativeExtensions.HttpClient = HttpClient;
    class HttpResponse {
    }
    nativeExtensions.HttpResponse = HttpResponse;
})(nativeExtensions || (nativeExtensions = {}));
NodeList.prototype.toArray = function () {
    var result = new Array();
    for (var i = 0; i < this.length; i++)
        result.push(this[i]);
    return result;
};
Object.prototype.getKeys = function () {
    var result = new Array();
    for (var key in this)
        result.push(key);
    return result;
};
Object.prototype.getValues = function () {
    var result = new Array();
    for (var key in this)
        result.push(this[key]);
    return result;
};
Object.prototype.containsKey = function (key) {
    return this.getKeys().contains(key);
};
Object.prototype.containsValue = function (value) {
    return this.getValues().contains(value);
};
function parseHTML(htmlString) {
    return new DOMParser().parseFromString(htmlString, "text/html");
}
function parseXML(xmlString) {
    return new DOMParser().parseFromString(xmlString, "text/xml");
}
function parseNode(nodeString) {
    return new DOMParser().parseFromString(nodeString, "text/html").childNodes[0];
}
function typeOf(obj) {
    if (!obj)
        return obj;
    return obj.constructor.name;
}
//# sourceMappingURL=nativeExtensions.js.map