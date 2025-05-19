const extractBasicFileData = (f: globalThis.File): FileInformation => {
  return {
    name: f.name,
    mimetype: f.type,
    size: f.size,
    lastModified: f.lastModified,
  };
};

export default extractBasicFileData;
