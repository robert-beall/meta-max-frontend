'use client'
import { Display } from "@/components/Display";
import { SingularityForm } from "@/components/SingularityForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [file, setFile] = useState<globalThis.File | undefined>(undefined);
  const [viewToggle, setViewToggle] = useState(false);

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
    if (typeof file !== 'undefined') {

    }
  }, [file])

  return (
    <>
      {
        !viewToggle &&
        <SingularityForm handleUpload={handleUpload} />
      }
      <Display className={`transition-opacity duration-400 ease-in-out ${viewToggle ? 'opacity-100' : 'opacity-0'}`} />
    </>
  );
}
