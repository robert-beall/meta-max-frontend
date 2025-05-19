interface BaseProps {
  className?: string;
}

interface UploadProps {
  handleUpload: (file?: globalThis.File) => void;
}

interface JsonProps {
  data: object;
}

interface DisplayProps {
  data?: MetaData;
}
