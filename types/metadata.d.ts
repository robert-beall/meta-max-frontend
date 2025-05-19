interface MetaData {
  fileInformation: FileInformation;
  exif?: ExifReader.Tags;
}

interface FileInformation {
  name: string;
  mimetype: string;
  size: number;
  lastModified: number;
}
