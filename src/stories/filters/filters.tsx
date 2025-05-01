import { useState } from "react";
import FilterIcon from "../../assets/svg/filterIcon";
import SearchIcon from "../../assets/svg/SearchIcon";
import DefaultIcon from "@/assets/svg/defaultIcon";

const FilterBar = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const [filterCheckedItems, setFilterCheckedItems] = useState({
    MyApplications: false,
    AllApplications: false,
    Actions: false,
    Complete: false,
    Critical: false,
    Saved: false,
  });

  const [searchText, setSearchText] = useState("");

  // Handle checkbox change
  const handleFilterCheckboxChange = (key: string) => {
    setFilterCheckedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const resetFilters = () => {
    setFilterCheckedItems({
      MyApplications: false,
      AllApplications: false,
      Actions: false,
      Complete: false,
      Critical: false,
      Saved: false,
    });
    setSearchText("");
    setIsSearchClicked(false);
    setFilterDropdownOpen(false);
  };

  const selectedCount =
    Object.values(filterCheckedItems).filter(Boolean).length;

  return (
    <div>
      <div className="flex items-center justify-between p-1 md:px-4">
        <div className="flex gap-3 items-center w-full">
          <div
            className={`hidden relative md:flex items-center text-black rounded-sm p-2 sm:px-4 sm:py-3 transition-all duration-300 ${
              isSearchClicked
                ? "bg-transparent border-2 border-[#169F9F] w-[360px]"
                : "bg-[#F0F3F5] w-[200px]"
            }`}
            onClick={() => setIsSearchClicked(true)}
          >
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchIcon />
          </div>

          <div className="md:hidden flex justify-center items-center border-[1.5px] border-[#F0F3F5] w-10 h-10 bg-[#F0F3F5] rounded-[3px]">
            <SearchIcon />
          </div>

          {/* Filters */}
          <div
            className={`relative flex items-center p-2 sm:px-4 sm:py-3 ${
              filterDropdownOpen ? "bg-[#E8F5F5] border border-[#A2D9D9]" : ""
            }`}
            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
          >
            <div className="flex items-center gap-1">
              <span className="text-base hidden md:block">All Filters</span>
              <div className="text-black rounded-md px-2 py-1">
                <FilterIcon />
              </div>
              <div className="flex justify-center items-center w-5 h-5 border-2 border-[#169F9F] text-[#169F9F]">
                {selectedCount}
              </div>
            </div>
            {/* Filter Dropdown */}
            {filterDropdownOpen && (
              <div
                className="absolute left-0 top-11 w-[180px] md:w-[392px] mt-6 bg-white shadow-lg rounded-md p-6 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-[20px] font-bold mb-6">Filter by</p>

                {/* Checkboxes */}
                {Object.keys(filterCheckedItems).map((key) => (
                  <div className="flex items-center space-x-2 mb-2" key={key}>
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-[#169F9F]"
                      checked={
                        filterCheckedItems[
                          key as keyof typeof filterCheckedItems
                        ]
                      }
                      onChange={() => handleFilterCheckboxChange(key)}
                    />
                    <label
                      className={`text-xs md:text-base cursor-pointer ${
                        filterCheckedItems[
                          key as keyof typeof filterCheckedItems
                        ]
                          ? "font-bold"
                          : "font-normal"
                      }`}
                    >
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="hidden md:flex relative items-center gap-2 p-2 sm:px-4 sm:py-3"
            onClick={resetFilters}
          >
            <div className="text-black rounded-md px-2 py-1">
              <DefaultIcon />
            </div>
            <span className="text-base hidden md:block">Default Filter</span>
          </div>
        </div>

        {/* Sort by (Mobile only) */}
        <div className="flex md:hidden">
          <select className="focus:outline-none bg-white text-[#282931] pr-2">
            <option className="bg-white text-black text-[10px] sm:text-base">
              Column 1 Name
            </option>
            <option className="bg-white text-black text-[10px] sm:text-base">
              Column 1 Name
            </option>
            <option className="bg-white text-black text-[10px] sm:text-base">
              Column 1 Name
            </option>
            <option className="bg-white text-black text-[10px] sm:text-base">
              Column 1 Name
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
