/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash, User, X } from "lucide-react";

export default function OwnerDetails() {
    const [files, setFiles] = useState<(File | { name: any; size: string; type: any })[]>([]);



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const uploadedFiles = Array.from(e.target.files);
    const updatedFiles = uploadedFiles.map((file: any) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
    }));
    setFiles([...files, ...updatedFiles]);
  };

  const removeFile = (index: any) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <Card className="p-4 space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-x-2 flex flex-wrap items-center">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              Mr. Mohammed Alsahalwi
            </h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/2560px-Flag_of_the_United_Arab_Emirates.svg.png"
              alt="UAE Flag"
              className="w-5 h-3 sm:w-6 sm:h-4"
            />
          </div>
          <div className="text-xs border-2 border-gray-300 bg-white rounded-full px-2 py-1 inline-block">
            OWNER 1 OUT OF 2
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <User size={16} />
          </Button>
          <Button variant="outline" size="icon">
            <Pencil size={16} />
          </Button>
          <Button variant="outline" size="icon">
            <Trash size={16} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-200 h-24 rounded flex items-center justify-center">
          Image Placeholder
        </div>
        <div className="sm:col-span-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-2 border rounded">
            UAE National ID No
            <br />
            <strong>784111107277811</strong>
          </div>
          <div className="p-2 border rounded">
            Family No / City
            <br />
            <strong>1001/101</strong>
          </div>
          <div className="p-2 border rounded">
            Already Allotted
            <br />
            <strong>N/A</strong>
          </div>
          <div className="p-2 border rounded flex justify-between items-center">
            <div>
              Share
              <br />
              <strong>50%</strong>
            </div>
            <Button variant="link">Edit</Button>
          </div>
          <div className="p-2 border rounded">
            Right Hold Type
            <br />
            <strong>USUFRUCT</strong>
          </div>
          <div className="p-2 border rounded flex justify-between items-center">
            <div>
              Priority
              <br />
              <strong>1</strong>
            </div>
            <Button variant="link">Edit</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Upload Documents</h3>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:items-start sm:gap-4">
          <div className="flex-1 min-w-[200px]">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Document type to upload" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="visa">Visa</SelectItem>
                <SelectItem value="id">ID Card</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 min-w-[200px] border-dashed border-2 rounded p-6 text-center bg-gray-50">
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <p className="text-sm">
                Drag and drop your files, or <span className="text-blue-500">browse</span>
              </p>
              <p className="text-xs text-gray-500">Supported format: PDF, DOC</p>
            </label>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="p-2 border rounded flex justify-between items-center bg-gray-50">
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">{file.size}</p>
              </div>
              <button onClick={() => removeFile(index)} className="text-red-500">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
