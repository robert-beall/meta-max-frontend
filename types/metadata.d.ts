interface MetaData {
  fileInformation: FileInformation;
}

interface FileInformation {
  name: string;
  mimetype: string;
  size: number;
  lastModified: number;
}
