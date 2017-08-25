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
//# sourceMappingURL=String.js.map