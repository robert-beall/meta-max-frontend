'use client'
import { Display } from "@/components/Display";
import { SingularityForm } from "@/components/SingularityForm";
import parseData from "@/libs/file-handler";
import { useEffect, useState } from "react";

export default function Home() {
  const [file, setFile] = useState<globalThis.File | undefined>(undefined);
  const [viewToggle, setViewToggle] = useState(false);
  const [metadata, setMetadata] = useState<MetaData>();

  const handleUpload = (file?: globalThis.File) => {
    setTimeout(() => {
      if (typeof file !== 'undefined') {
        setFile(file);
        setViewToggle(true);
      } else {
        setViewToggle(false);
      }
    }, 1000);
  };

  useEffect(() => {
    const update = async (file: globalThis.File) => {
      setMetadata(await parseData(file));
    };

    if (typeof file !== 'undefined') {
      void update(file);
    }
  }, [file])

  return (
    <>
      {
        !viewToggle &&
        <SingularityForm handleUpload={handleUpload} />
      }
      <Display data={metadata} className={`transition-opacity duration-400 ease-in-out ${viewToggle ? 'opacity-100' : 'opacity-0'}`} />
    </>
  );
}
