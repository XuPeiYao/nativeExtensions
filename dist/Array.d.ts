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
