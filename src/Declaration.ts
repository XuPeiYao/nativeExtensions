import { Browsers } from "./Browsers";

export interface WindowExtension extends Window {
    browsers: Browsers[];
    opr;
    opera;
    addons;
    HTMLElement;
    StyleMedia;
    chrome;
    CSS;
    isBrowser;
}
export interface DocumentExtension extends Document {
    documentMode;
}
export interface MathExtension extends Math {
    uuid(): string;
}
export interface NodeListExtension extends NodeList {
    toArray<T>(): Array<T>;
}
export declare var opr, InstallTrigger, safari;