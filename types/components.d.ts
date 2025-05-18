interface BaseProps {
  className?: string;
}

interface UploadProps {
  handleUpload: (file?: globalThis.File) => void;
}
