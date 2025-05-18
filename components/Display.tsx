import { type ReactNode } from "react";

export const Display = ({ className = '' }: BaseProps): ReactNode => {
    return (// You can easily customize the header content:
        <div className={`bg-white dark:bg-gray-800 border border-gray-200 rounded-lg shadow ${className}`}>
            <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-500 rounded-t-lg border-b-gray-200">
                {/* Header content */}
                <h1 className="text-xl text-center font-bold text-gray-800 dark:text-gray-100 mb-2">File Metadata</h1>
            </div>
            <div className="p-4">
                {/* Card content */}
            </div>
        </div >);
};