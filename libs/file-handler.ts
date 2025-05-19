import extractBasicFileData from "./basic-extractor";
import ExifReader from "exifreader";

const parseData = async (file: globalThis.File): Promise<MetaData> => {
  const fileInformation = extractBasicFileData(file);
  const res: MetaData = { fileInformation };

  switch (file.type) {
    case "image/avif":
    case "image/png":
    case "image/heic":
    case "image/tiff":
    case "image/jpeg": {
      res["exif"] = await ExifReader.load(file);
    }
  }

  return res;
};

export default parseData;
