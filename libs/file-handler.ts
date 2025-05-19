import extractBasicFileData from "./basic-extractor";

const parseData = (file: globalThis.File): MetaData => {
  return {
    fileInformation: extractBasicFileData(file),
  };
};

export default parseData;
