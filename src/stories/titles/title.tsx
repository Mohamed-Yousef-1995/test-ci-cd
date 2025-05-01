import React from "react";
import Buttons from "../buttons/Buttons";

interface PageTitleProps {
  title: string;
  initial?: boolean;
  button?: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  initial = false,
  button,
}) => (
  <div className="flex flex-row items-center justify-between p-2 sm:p-4 w-full">
    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-6 min-w-0">
      {initial && <Buttons label={title} type="initials" size="large" />}
      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-[#12121B] truncate">
        {title}
      </h1>
    </div>
    {button}
  </div>
);

export default PageTitle;
