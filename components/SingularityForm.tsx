'use client'
import { Card, Label, Spinner } from "flowbite-react";
import { useCallback, useState, type ReactNode } from "react";
import { useDropzone } from "react-dropzone";

export const SingularityForm = ({ handleUpload, className = '' }: UploadProps & BaseProps): ReactNode => {
    const [file, setFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
        handleUpload(acceptedFiles[0]);
    }, [handleUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className={`max-w-md mx-auto w-full p-4 ${className}`}>
            <Card>
                <h1 className="text-xl text-center font-bold text-gray-800 dark:text-gray-100 mb-2">File Metadata Extractor</h1>
                <p className="text-gray-800 dark:text-gray-300">
                    Upload documents, images, audio, or video files to instantly view detailed metadata information. We support most common file formats. Missing a format you need? Request additional file type support <a className="text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" href="#" aria-label="Request support for additional file types">here</a>.
                </p>
                <form>
                    <div className="mb-4">
                        <Label htmlFor="dropzone">Upload file</Label>
                        <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-lg p-4 cursor-pointer ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                                }`}
                        >
                            <input {...getInputProps()} id="dropzone" />
                            {
                                file == null ?
                                    <div className="flex flex-col items-center justify-center py-4">
                                        <svg className="mb-2 h-8 w-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
                                        </svg>
                                        <p className="text-sm text-gray-500 dark:text-gray-200">
                                            {isDragActive ? "Drop the file here" :
                                                <span><span className="font-semibold">Click to upload</span> or drag and drop</span>}
                                        </p>
                                    </div>
                                    :
                                    <div className="flex flex-col items-center justify-center py-4">
                                        <Spinner aria-label="Loading spinner" />
                                        <p className="text-sm text-gray-500 dark:text-gray-200">
                                            <span className="font-semibold">Analyzing File Metadata</span>
                                        </p>
                                    </div>

                            }
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};