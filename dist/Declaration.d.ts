import { Browsers } from "./Browsers";
export interface WindowExtension extends Window {
    browsers: Browsers[];
    opr: any;
    opera: any;
    addons: any;
    HTMLElement: any;
    StyleMedia: any;
    chrome: any;
    CSS: any;
    isBrowser: any;
}
export interface DocumentExtension extends Document {
    documentMode: any;
}
export interface MathExtension extends Math {
    uuid(): string;
}
export interface NodeListExtension extends NodeList {
    toArray<T>(): Array<T>;
}
export declare var opr: any, InstallTrigger: any, safari: any;
