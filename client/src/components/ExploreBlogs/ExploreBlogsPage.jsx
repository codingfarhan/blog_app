import React from "react";
import BlogsGrid from "../BlogsComponents/BlogsGrid";
import NavbarComponent from "../Common_Components/NavbarComp";

// exporting the main Explore page component:
export default function ExploreBlogsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
      <NavbarComponent />
      <div className="flex flex-col px-20 py-10 mt-40 min-h-screen w-screen">
        <BlogsGrid />
      </div>
    </div>
  );
}
