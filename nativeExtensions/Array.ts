interface Array<T> {
    clone(): Array<T>;
    take(count: number): Array<T>;
    takeWhile(fun: (x: T) => boolean): Array<T>;
    takeUntil(fun: (x: T) => boolean): Array<T>;
    skip(count: number): Array<T>;
    skipWhile(fun: (x: T) => boolean): Array<T>;
    skipUntil(fun: (x: T) => boolean): Array<T>;
    first(): T;
    last(): T;
    contains(x: T): boolean;
    distinct(): Array<T>;
    except(ary : Array<T>): Array<T>;
    union(ary: Array<T>): Array<T>;
    intersect(ary: Array<T>): Array<T>;
    sum(fun?: (x: T) => number): number;
    average(fun?: (x: T) => number): number;
    max(fun?: (old: T, next: T) => boolean): T;
    min(fun?: (old: T, next: T) => boolean): T;
}

Array.prototype.clone = function () {
    return this.slice(0);
}
Array.prototype.take = function (count: number) {
    var result = new Array();
    for (var i = 0; i < count && i < this.length; i++)result.push(this[i]);
    return result;
}
Array.prototype.takeWhile = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (fun(this[index])) {
        result.push(this[index++]);
    }
    return result;
}
Array.prototype.takeUntil = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (!fun(this[index])) {
        result.push(this[index++]);
    }
    return result;
}
Array.prototype.skip = function (count: number) {
    return this.slice(count);
}
Array.prototype.skipWhile = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (fun(this[index])) { index++ }
    return this.skip(index);
}
Array.prototype.skipUntil = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (!fun(this[index])) { index++ }
    return this.skip(index);
}
Array.prototype.first = function () {
    return this[0];
}
Array.prototype.last = function () {
    return this[this.length - 1];
}
Array.prototype.contains = function (x) {
    return this.indexOf(x) > -1;
}
Array.prototype.distinct = function () {
    var result = new Array<any>();
    this.forEach(x => {
        if (!result.contains(x)) result.push(x);
    });
    return result;
}
Array.prototype.except = function (ary: Array<any>) : Array<any> {
    var result = new Array<any>();
    this.forEach(x => {
        if (!ary.contains(x)) result.push(x);
    });
    return result;
}
Array.prototype.union = function (ary: Array<any>): Array<any> {
    return this.concat(ary).distinct();
}
Array.prototype.intersect = function (ary: Array<any>): Array<any> {
    return this.union(ary).filter(x => this.contains(x) && ary.contains(x));
}
Array.prototype.sum = function (fun?: (x) => number) {
    var result = 0;
    this.forEach(x => result += fun ? fun(x) : x );
    return result;
}
Array.prototype.average = function (fun?: (x) => number) {
    return this.sum(fun) / this.length;
}
Array.prototype.max = function (fun?: (old, next) => boolean) {
    var max = this[0];
    this.forEach(x => {
        if (fun ? fun(max, x) : (max < x)) max = x;
    });
    return max;
}
Array.prototype.min = function (fun?: (old, next) => boolean) {
    var min = this[0];
    this.forEach(x => {
        if (fun ? fun(min, x) : (min < x)) min = x;
    });
    return min;
}