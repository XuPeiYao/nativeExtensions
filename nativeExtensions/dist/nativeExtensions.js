var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    this.forEach(function (x) {
        if (!result.contains(x))
            result.push(x);
    });
    return result;
};
Array.prototype.except = function (ary) {
    var result = new Array();
    this.forEach(function (x) {
        if (!ary.contains(x))
            result.push(x);
    });
    return result;
};
Array.prototype.union = function (ary) {
    return this.concat(ary).distinct();
};
Array.prototype.intersect = function (ary) {
    var _this = this;
    return this.union(ary).filter(function (x) { return _this.contains(x) && ary.contains(x); });
};
Array.prototype.sum = function (fun) {
    var result = 0;
    this.forEach(function (x) { return result += fun ? fun(x) : x; });
    return result;
};
Array.prototype.average = function (fun) {
    return this.sum(fun) / this.length;
};
Array.prototype.max = function (fun) {
    var max = this[0];
    this.forEach(function (x) {
        if (fun ? fun(max, x) : (max < x))
            max = x;
    });
    return max;
};
Array.prototype.min = function (fun) {
    var min = this[0];
    this.forEach(function (x) {
        if (fun ? fun(min, x) : (min < x))
            min = x;
    });
    return min;
};
var nativeExtensions;
(function (nativeExtensions) {
    "use strict";
    var HttpClient = (function () {
        function HttpClient() {
            this.requestHeader = null;
            this.withCredentials = false;
        }
        HttpClient.prototype.openAndSend = function (method, url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var xhr = new XMLHttpRequest();
                            //#region 事件與屬性
                            xhr.withCredentials = _this.withCredentials;
                            xhr.onprogress = progressCallback || _this.progressCallback;
                            xhr.onreadystatechange = function (event) {
                                if (xhr.readyState !== 4)
                                    return;
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    var result = new HttpResponse();
                                    result.header = xhr.getAllResponseHeaders();
                                    result.statusCode = xhr.status;
                                    result.resultType = xhr.responseType;
                                    result.resultText = xhr.responseText;
                                    result.resultXML = xhr.responseXML;
                                    result.result = xhr.response;
                                    resolve(result);
                                }
                                else {
                                    reject(xhr.statusText);
                                }
                            };
                            //#endregion
                            xhr.open(method, url, true, user || _this.user, password || _this.password);
                            //#region 設定Header
                            if (_this.requestHeader)
                                for (var key in _this.requestHeader)
                                    xhr.setRequestHeader(key, _this.requestHeader[key]);
                            if (header)
                                for (var key in header)
                                    xhr.setRequestHeader(key, header[key]);
                            //#endregion
                            if (data) {
                                if (data instanceof FormData || typeOf(data) == 'String') {
                                    xhr.send(data);
                                }
                                else {
                                    if (method == "GET" || method == "DELETE") {
                                        var params = new Array();
                                        for (var key in data)
                                            params.push(key + "=" + encodeURIComponent(data[key]));
                                        xhr.send(params.join("&"));
                                    }
                                    else if (!(new FormData()['fake'])) {
                                        var formdata = new FormData();
                                        for (var key in data) {
                                            if (data[key] instanceof Function)
                                                continue;
                                            formdata.append(key, data[key]);
                                        }
                                        xhr.send(formdata);
                                    }
                                    else {
                                        var params = new Array();
                                        for (var key in data)
                                            params.push(key + "=" + encodeURIComponent(data[key]));
                                        xhr.send(params.join("&"));
                                    }
                                }
                            }
                            else {
                                xhr.send();
                            }
                        })];
                });
            });
        };
        HttpClient.prototype.getAsync = function (url, header, user, password, progressCallback) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.openAndSend('GET', url, header, null, user, password, progressCallback)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        HttpClient.prototype.postAsync = function (url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.openAndSend('POST', url, header, data, user, password, progressCallback)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        HttpClient.prototype.putAsync = function (url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.openAndSend('PUT', url, header, data, user, password, progressCallback)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        HttpClient.prototype.deleteAsync = function (url, header, data, user, password, progressCallback) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.openAndSend('DELETE', url, header, data, user, password, progressCallback)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return HttpClient;
    }());
    nativeExtensions.HttpClient = HttpClient;
    var HttpResponse = (function () {
        function HttpResponse() {
        }
        return HttpResponse;
    }());
    nativeExtensions.HttpResponse = HttpResponse;
})(nativeExtensions || (nativeExtensions = {}));
var HttpClient = nativeExtensions.HttpClient;
function includeAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var includeTags, temp, i, i, includeTag, fileSrc, client, response, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 6, , 7]);
                                includeTags = [];
                                temp = document.getElementsByTagName("include");
                                for (i = 0; i < temp.length; i++) {
                                    includeTags.push(temp[i]);
                                }
                                if (includeTags.length == 0) {
                                    resolve();
                                    return [2 /*return*/];
                                }
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < includeTags.length)) return [3 /*break*/, 4];
                                includeTag = includeTags[i];
                                includeTag.setAttribute("id", Math.uuid());
                                fileSrc = includeTag.getAttribute("src");
                                if (!fileSrc)
                                    return [3 /*break*/, 3];
                                client = new HttpClient();
                                return [4 /*yield*/, client.getAsync(fileSrc)];
                            case 2:
                                response = _a.sent();
                                parseHTML(response.result).body.childNodes.toArray().forEach(function (x) {
                                    includeTag.parentNode.insertBefore(x, includeTag);
                                });
                                console.info("include " + fileSrc);
                                includeTag.parentNode.removeChild(includeTag);
                                _a.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4: return [4 /*yield*/, include()];
                            case 5:
                                _a.sent(); //Deep
                                return [3 /*break*/, 7];
                            case 6:
                                e_1 = _a.sent();
                                reject(e_1);
                                return [3 /*break*/, 7];
                            case 7:
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function include() {
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
        includeTag.setAttribute("id", Math.uuid());
        var fileSrc = includeTag.getAttribute("src");
        if (!fileSrc)
            continue;
        var client = new XMLHttpRequest(); //請求用物件
        client.open('GET', fileSrc, false);
        client.send();
        parseHTML(client.response).body.childNodes.toArray().forEach(function (x) {
            includeTag.parentNode.insertBefore(x, includeTag);
        });
        console.info("include " + fileSrc);
        includeTag.parentNode.removeChild(includeTag);
    }
    include(); //Deep
}
Math.uuid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
NodeList.prototype.toArray = function () {
    var result = new Array();
    for (var i = 0; i < this.length; i++)
        result.push(this[i]);
    return result;
};
/*
interface Object {
    getKeys(): Array<any>;
    getValues(): Array<any>;
    containsKey(key: any): boolean;
    containsValue(value: any): boolean;
    toArray(): Array<any>;
}

Object.prototype.getKeys = function () {
    var result = new Array<any>();
    for (var key in this) result.push(key);
    return result;
}
Object.prototype.getValues = function () {
    var result = new Array<any>();
    for (var key in this) result.push(this[key]);
    return result;
}
Object.prototype.containsKey = function (key: any) {
    return this.getKeys().contains(key);
}
Object.prototype.containsValue = function (value: any) {
    return this.getValues().contains(value);
}
Object.prototype.toArray = function () {
    if (this.length > 0) {
        var result = new Array<any>();
        for (var i = 0; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    }
    return [];
}*/
var getKeys = function (obj) {
    var result = new Array();
    for (var key in obj)
        result.push(key);
    return result;
};
function parseHTML(htmlString) {
    return new DOMParser().parseFromString(htmlString, "text/html");
}
function parseXML(xmlString) {
    return new DOMParser().parseFromString(xmlString, "text/xml");
}
function parseNode(nodeString) {
    return new DOMParser().parseFromString(nodeString, "text/html").body.childNodes[0];
}
String.prototype.innerString = function (start, end) {
    var index = this.indexOf(start);
    if (index < 0)
        return null;
    var result = this.substring(index + start.length);
    index = result.indexOf(end);
    if (index < 0)
        return null;
    return result.substring(0, index);
};
function typeOf(obj) {
    if (!obj)
        return obj;
    return obj.constructor.name;
}
var Browser;
(function (Browser) {
    Browser[Browser["MSIE"] = 0] = "MSIE";
    Browser[Browser["Opera"] = 1] = "Opera";
    Browser[Browser["Firefox"] = 2] = "Firefox";
    Browser[Browser["Edge"] = 3] = "Edge";
    Browser[Browser["Safari"] = 4] = "Safari";
    Browser[Browser["Chrome"] = 5] = "Chrome";
    Browser[Browser["Blink"] = 6] = "Blink";
    Browser[Browser["Unknow"] = 7] = "Unknow";
})(Browser || (Browser = {}));
window.browser = (function () {
    //REF: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    var result = [];
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (isOpera)
        result.push(Browser.Opera);
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox)
        result.push(Browser.Firefox);
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    if (isSafari)
        result.push(Browser.Safari);
    // Internet Explorer 6-11
    var isIE = false || !!document.documentMode;
    if (isIE)
        result.push(Browser.MSIE);
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    if (isEdge)
        result.push(Browser.Edge);
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isChrome)
        result.push(Browser.Chrome);
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    if (isBlink)
        result.push(Browser.Blink);
    if (result.length == 0) {
        result.push(Browser.Unknow);
    }
    return result;
})();
//# sourceMappingURL=nativeExtensions.js.map