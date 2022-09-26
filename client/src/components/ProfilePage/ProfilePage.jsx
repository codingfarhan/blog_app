import react from "react";
import NavbarComponent from "../Common_Components/NavbarComp";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import BlogsGrid from "../BlogsComponents/BlogsGrid";

// export the main component:
export default function ProfilePage() {
  return (
    <div className="profile-page flex flex-col overflow-x-hidden bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
      <NavbarComponent extra_classes={"z-10"} />
      <div className="flex flex-col min-h-screen w-screen z-0">
        {/* profile page data  */}
        <ProfileHeader />
        <ProfileInfo />
        <BlogsGrid extra_classes={"mt-28 mb-10"} />
      </div>
    </div>
  );
}
