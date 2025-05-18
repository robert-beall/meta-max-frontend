'use client'
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
    }, 3000);
  };

  useEffect(() => {
    if (typeof file !== 'undefined') {

    }
  }, [file])

  return (
    <SingularityForm handleUpload={handleUpload} className={`transition-opacity duration-300 ease-in-out ${!viewToggle ? 'opacity-100' : 'opacity-0'}`} />
  );
}
