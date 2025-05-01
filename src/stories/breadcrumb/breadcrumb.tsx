import React from "react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-gray-500 text-sm">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-1">/</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-[#169F9F]">
                {item.label}
              </a>
            ) : (
              <span className="font-semibold text-black">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
