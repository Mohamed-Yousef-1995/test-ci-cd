const Chartbox = () => {
  return (
    <>
      <div className="bg-white  max-w-[318px]">
        <div className="grid p-5 grid-cols-3 items-end gap-6">
          <div className="flex flex-col items-center gap-3 group">
            <div className="hidden   sm:hidden sm:group-hover:hidden group-hover:block">
              <p className="text-xs">Critical</p>
            </div>

            <div className="bg-gradient-to-b from-[#F69EA1] to-[#EE3E43] h-[27px] w-full rounded-lg"></div>

            <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center w-full">
              <span className="hidden sm:block">Critical</span>

              <span className="text-[#EE3E43] font-bold text-[10px] sm:text-[32px]">
                1
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 group ">
          <div className="hidden   sm:hidden sm:group-hover:hidden group-hover:block">
              <p className="text-xs">Actions</p>
            </div>
            <div className="bg-gradient-to-b from-[#4DABF7] to-[#1864AB]  h-[63px] w-[100%] rounded-lg"></div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center w-full">
              <span className="hidden text-lg sm:block">Actions</span>
              <span className="text-[#1864AB] font-bold text-[10px] sm:text-[32px]">
                5
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 group">
          <div className="hidden   sm:hidden sm:group-hover:hidden group-hover:block">
              <p className="text-xs">Active</p>
            </div>
            <div className="bg-gradient-to-b from-[#8ACFCF] to-[#169F9F]  h-[146px] w-[100%] rounded-lg"></div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center w-full">
              <span className="hidden text-lg sm:block">Active</span>
              <span className="text-[#169F9F] font-bold text-[10px] sm:text-[32px]">
                11
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chartbox;
