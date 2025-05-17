export const extractBasicFileData = (f: globalThis.File): BasicData => {
    return {
        name: f.name,
        mimetype: f.type,
        size: f.size,
    }
};