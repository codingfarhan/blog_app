import React from "react";
import BlogsGrid from "../BlogsComponents/BlogsGrid";
import NavbarComponent from "../Common_Components/NavbarComp";
import SearchAndFilters from "./SearchAndFilters";

// exporting the main Explore page component:
export default function ExploreBlogsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
      <NavbarComponent extra_classes={"z-40"} />
      <div className="flex flex-col py-10 sm:mt-40 mt-20 min-h-screen w-screen">
        <SearchAndFilters />
        <BlogsGrid extra_classes={""} />
      </div>
    </div>
  );
}
