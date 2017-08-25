interface Array<T> {
    /**
     * 複製陣列
     */
    clone(): Array<T>;

    /**
     * 複製陣列並自陣列中提取指定數量的項目
     */
    take(count: number): Array<T>;

    /**
     * 複製陣列並自陣列中提取項目直到條件不符合
     */
    takeWhile(fun: (x: T) => boolean): Array<T>;

    /**
     *  複製陣列並自陣列中提取項目直到條件符合
     */
    takeUntil(fun: (x: T) => boolean): Array<T>;

    /**
     * 複製陣列並略過指定數量項目
     */
    skip(count: number): Array<T>;

    /**
     * 複製陣列並自陣列中略過直到不符合條件項目後提取剩餘項目
     */
    skipWhile(fun: (x: T) => boolean): Array<T>;

    /**
     * 複製陣列並自陣列中略過直到符合條件項目後提取剩餘項目
     */
    skipUntil(fun: (x: T) => boolean): Array<T>;

    /**
     * 取得第一個項目
     */
    first(): T;

    /**
     * 取得最後一個項目
     */
    last(): T;

    /**
     * 檢查陣列中是否存在指定項目
     */
    contains(x: T): boolean;

    /**
     * 提取不重複項目
     */
    distinct(): Array<T>;

    /**
     * 取得兩陣列的差集
     */
    except(ary: Array<T>): Array<T>;

    /**
     * 取得兩陣列的聯集
     */
    union(ary: Array<T>): Array<T>;

    /**
     * 取得兩陣列的交集
     */
    intersect(ary: Array<T>): Array<T>;

    /**
     * 陣列合計
     */
    sum(fun?: (x: T) => number): number;

    /**
     * 陣列平均
     */
    average(fun?: (x: T) => number): number;

    /**
     * 陣列最大值
     */
    max(fun?: (old: T, next: T) => boolean): T;

    /**
     * 陣列最小值
     */
    min(fun?: (old: T, next: T) => boolean): T;
}

/**
 * 複製陣列
 */
Array.prototype.clone = function () {
    return this.slice(0);
}

/**
 * 複製陣列並自陣列中提取指定數量的項目
 */
Array.prototype.take = function (count: number) {
    var result = new Array();
    for (var i = 0; i < count && i < this.length; i++)result.push(this[i]);
    return result;
}

/**
 * 複製陣列並自陣列中提取項目直到條件不符合
 */
Array.prototype.takeWhile = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (fun(this[index])) {
        result.push(this[index++]);
    }
    return result;
}

/**
 * 複製陣列並自陣列中提取項目直到條件符合
 */
Array.prototype.takeUntil = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (!fun(this[index])) {
        result.push(this[index++]);
    }
    return result;
}

/**
 * 複製陣列並略過指定數量項目
 */
Array.prototype.skip = function (count: number) {
    return this.slice(count);
}

/**
 * 複製陣列並自陣列中略過直到不符合條件項目後提取剩餘項目
 */
Array.prototype.skipWhile = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (fun(this[index])) { index++ }
    return this.skip(index);
}

/**
 * 複製陣列並自陣列中略過直到符合條件項目後提取剩餘項目
 */
Array.prototype.skipUntil = function (fun: (x) => boolean) {
    var result = new Array(), index = 0;
    while (!fun(this[index])) { index++ }
    return this.skip(index);
}

/**
 * 取得第一個項目
 */
Array.prototype.first = function () {
    return this[0];
}

/**
 * 取得最後一個項目
 */
Array.prototype.last = function () {
    return this[this.length - 1];
}

/**
 * 檢查陣列中是否存在指定項目
 */
Array.prototype.contains = function (x) {
    return this.indexOf(x) > -1;
}

/**
 * 提取不重複項目
 */
Array.prototype.distinct = function () {
    var result = new Array<any>();
    this.forEach(x => {
        if (!result.contains(x)) result.push(x);
    });
    return result;
}

/**
 * 取得兩陣列的差集
 */
Array.prototype.except = function (ary: Array<any>): Array<any> {
    var result = new Array<any>();
    this.forEach(x => {
        if (!ary.contains(x)) result.push(x);
    });
    return result;
}

/**
 * 取得兩陣列的聯集
 */
Array.prototype.union = function (ary: Array<any>): Array<any> {
    return this.concat(ary).distinct();
}

/**
 * 取得兩陣列的交集
 */
Array.prototype.intersect = function (ary: Array<any>): Array<any> {
    return this.union(ary).filter(x => this.contains(x) && ary.contains(x));
}

/**
 * 陣列合計
 */
Array.prototype.sum = function (fun?: (x) => number) {
    var result = 0;
    this.forEach(x => result += fun ? fun(x) : x);
    return result;
}

/**
 * 陣列平均
 */
Array.prototype.average = function (fun?: (x) => number) {
    return this.sum(fun) / this.length;
}

/**
 * 陣列最大值
 */
Array.prototype.max = function (fun?: (old, next) => boolean) {
    var max = this[0];
    this.forEach(x => {
        if (fun ? fun(max, x) : (max < x)) max = x;
    });
    return max;
}

/**
 * 陣列最小值
 */
Array.prototype.min = function (fun?: (old, next) => boolean) {
    var min = this[0];
    this.forEach(x => {
        if (fun ? fun(min, x) : (min < x)) min = x;
    });
    return min;
}