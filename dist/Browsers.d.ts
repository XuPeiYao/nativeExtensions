declare module nativeExtensions.Browser {
    /**
     * 瀏覽器類型
     */
    enum Browsers {
        /**
         * Microsoft Internet Explorer
         */
        MSIE = 0,
        Opera = 1,
        Firefox = 2,
        Edge = 3,
        Safari = 4,
        Chrome = 5,
        Blink = 6,
        /**
         * 未知的瀏覽器
         */
        Unknow = 7,
    }
    var BrowsersChecker: any;
}
