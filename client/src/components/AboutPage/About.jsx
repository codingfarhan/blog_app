import React from "react";
import Content from "./Content";
import NavbarComponent from "../Common_Components/NavbarComp";

// exporting our 'About' page's main component here..
export default function About() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
      <NavbarComponent extra_classes={"z-0"} />
      <Content />
    </div>
  );
}
