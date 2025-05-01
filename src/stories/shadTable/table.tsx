/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import SearchIconSvg from "@/assets/icons/SearchIconSvg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Input from "../input/Input";
import Pagination from "../pagination/pagination";
import CustomSelect from "../select/select";
import { ChevronDown, ChevronUp } from "lucide-react";

// Define types
export interface TableColumn {
  key: string;
  header: string;
  sortable?: boolean;
  searchable?: boolean;
}

export interface TablePopupProps {
  title: string;
  columns: TableColumn[];
  data: Record<string, any>[];
  buttonText?: string;
  pageSize?: number;
}

export const TablePopup: React.FC<TablePopupProps> = ({
  title,
  columns,
  data,
  buttonText = "Open Table",
  pageSize = 5,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({ key: "", direction: null });

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" | null = "asc";
    if (sortConfig.key === key) {
      direction = sortConfig.direction === "asc" ? "desc" : null;
    }
    setSortConfig({ key, direction });
  };

  const toggleRowSelection = (rowIndex: number) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex],
    }));
  };

  const processedData = useMemo(() => {
    let filteredData = [...data];

    if (searchTerm) {
      const searchableColumns = columns
        .filter((col) => col.searchable !== false)
        .map((col) => col.key);

      filteredData = filteredData.filter((row) =>
        searchableColumns.some((colKey) =>
          String(row[colKey] || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }

    if (sortConfig.key && sortConfig.direction) {
      filteredData.sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        if (valueA === valueB) return 0;

        if (sortConfig.direction === "asc") {
          return valueA < valueB ? -1 : 1;
        } else {
          return valueA > valueB ? -1 : 1;
        }
      });
    }

    return filteredData;
  }, [data, searchTerm, sortConfig, columns]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return processedData.slice(startIndex, startIndex + pageSize);
  }, [processedData, currentPage, pageSize]);

  const totalPages = Math.ceil(processedData.length / pageSize);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-5xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="relative mb-4 flex gap-4">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<SearchIconSvg className="w-5 h-5" />}
            className="rounded-full !w-72" hasSuccess={false} successMessage={""}          />
          <CustomSelect
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
            className="rounded-full !w-40"
          />
          <CustomSelect
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
            className="rounded-full !w-40"
          />
          <CustomSelect
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
            className="rounded-full !w-40"
          />
        </div>

        <div className="max-h-[50vh] overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <input type="checkbox" disabled />
                </TableHead>
                {columns.map((column) => (
                  <TableHead key={column.key}>
                    <button
                      type="button"
                      onClick={() => handleSort(column.key)}
                      className="flex items-center gap-1"
                    >
                      {column.header}
                      {sortConfig.key === column.key && (
                        <>
                          {sortConfig.direction === "asc" && (
                            <ChevronUp className="w-4 h-4" />
                          )}
                          {sortConfig.direction === "desc" && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </>
                      )}
                    </button>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => {
                  const rowId = row.id;
                  return (
                    <TableRow key={rowId}>
                      <TableCell>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={!!selectedRows[rowId]}
                            onChange={() => toggleRowSelection(rowId)}
                            className="hidden"
                          />
                          <div
                            className={`w-5 h-5 border border-gray-300 rounded flex items-center justify-center ${
                              selectedRows[rowId]
                                ? "bg-teal-500"
                                : "bg-transparent"
                            }`}
                          >
                            {selectedRows[rowId] && (
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </label>
                      </TableCell>

                      {columns.map((column) => (
                        <TableCell key={column.key}>
                          {row[column.key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + 1}
                    className="text-center"
                  >
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showPageNumbers={true}
              maxVisiblePages={5}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
