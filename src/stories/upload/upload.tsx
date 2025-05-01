import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";
import { JSX, useState } from "react";

interface FileUploadProps {
  label: string;
  className?: string;
  uploadIcon?: JSX.Element;
  plusIcon?: JSX.Element;
  size?: "sm" | "md" | "lg";
}

export default function FileUpload({
  label,
  className = "",
  uploadIcon = <Upload size={18} />,
  plusIcon = <Plus size={18}/>,
  size = "md",
}: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFileName(event.target.files[0].name);
    }
  };

  const openFilePicker = () => {
    document.getElementById("fileInput")?.click();
  };

  const sizeClasses = {
    sm: "p-1 text-sm w-1/3",
    md: "p-2 w-2/3",
    lg: "p-3 text-lg w-full",
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className={`flex items-center justify-between border rounded-lg bg-gray-800 text-white ${sizeClasses[size]}`}>
        <div className="flex-grow text-center">{fileName || label}</div>
        <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
        {!fileName && (
          <Button variant="ghost" size="icon" onClick={openFilePicker}>
            {uploadIcon}
          </Button>
        )}
      </div>
      <Button size="icon" onClick={openFilePicker} className="border hover:border-[#169F9F] hover:bg-[#169F9F] cursor-pointer hover:text-white">
        {plusIcon}
      </Button>
    </div>
  );
}
