interface NodeList {
    toArray<T>(): Array<T>;
}

NodeList.prototype.toArray = function<T>(): Array<T> {
    var result = new Array<T>();
    for (var i = 0; i < this.length; i++)result.push(this[i]);
    return result;
}