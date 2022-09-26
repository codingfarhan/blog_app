import react from "react";
import NavbarComponent from "../../Common_Components/NavbarComp";

// exporting the main Blog page component:
export default function BlogPage() {
  return (
    <div className="blog-page flex flex-col overflow-x-hidden bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
      <NavbarComponent />
    </div>
  );
}
