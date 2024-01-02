interface RecursiveObject {
    [key: string]: RecursiveObject | null | undefined | string;
}

export function removeEmptyKeys<T>(obj: T): T {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && obj[key] !== undefined) {
            removeEmptyKeys(obj[key] as RecursiveObject);
            if (Object.keys(obj[key] as RecursiveObject).length === 0) {
                delete obj[key];
            }
        } else if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
            delete obj[key];
        }
    }
    return obj;
}

export default removeEmptyKeys;
