'use client'
import { Button, Card, Label, Alert } from "flowbite-react";
import { useCallback, useState, type ReactNode } from "react";
import { useDropzone } from "react-dropzone";
import { FaInfoCircle } from "react-icons/fa";

export const SingularityForm = (): ReactNode => {
    const [fileName, setFileName] = useState<string>("");

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFileName(acceptedFiles[0].name);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="max-w-md mx-auto w-full p-4">
            <Card>
                <h1 className="text-xl font-bold text-gray-800 mb-2">File Metadata Extractor</h1>

                <form>
                    <div className="mb-4">
                        <Label htmlFor="dropzone">Upload file</Label>
                        <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-lg p-4 cursor-pointer ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                                }`}
                        >
                            <input {...getInputProps()} id="dropzone" />
                            <div className="flex flex-col items-center justify-center py-4">
                                <svg className="mb-2 h-8 w-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
                                </svg>
                                <p className="text-sm text-gray-500">
                                    {isDragActive ? "Drop the file here" :
                                        <span><span className="font-semibold">Click to upload</span> or drag and drop</span>}
                                </p>
                            </div>
                        </div>

                        {fileName && (
                            <Alert
                                color="info"
                                icon={FaInfoCircle}
                                className="mt-3"
                            >
                                File: {fileName}
                            </Alert>
                        )}
                    </div>

                    <div className="text-center">
                        <Button
                            type="submit"
                            color="blue"
                            disabled={!fileName}
                            className="w-full sm:w-auto"
                        >
                            Extract Metadata
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};