function typeOf(obj: any) : string {
    if (!obj) return obj;
    return obj.constructor.name;
}