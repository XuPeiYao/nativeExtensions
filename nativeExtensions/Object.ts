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
}