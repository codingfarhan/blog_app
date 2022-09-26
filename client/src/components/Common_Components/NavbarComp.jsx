import React, { useEffect, useState } from "react";
import { SimpleDropdown, HamburgerMobileNavDropdown } from "./Dropdowns";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { TbHeartHandshake } from "react-icons/tb";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

// exporting the final navbar component:
export default function NavbarComponent() {
  const [ProfileDropdownState, setDropdownState] = useState(false);
  const [NotificationDropdownState, setNotificationDropdownState] =
    useState(false);

  useEffect(() => {
    ProfileDropdownState
      ? console.log("Profile Dropdown opened!")
      : console.log("Profile Drop down is closed.");
  }, [ProfileDropdownState]);

  useEffect(() => {
    NotificationDropdownState
      ? console.log("Notification Dropdown opened!")
      : console.log("Notifications dropdown is closed.");
  }, [NotificationDropdownState]);

  function OpenProfileDropdown() {
    CloseNotificationDropdown();
    setDropdownState(true);
  }

  function CloseProfileDropdown() {
    setDropdownState(false);
  }

  function OpenNotificationDropdown() {
    CloseProfileDropdown();
    setNotificationDropdownState(true);
  }
  function CloseNotificationDropdown() {
    setNotificationDropdownState(false);
  }
  return (
    <div className="flex flex-row w-screen h-20 bg-red-900 items-center fixed">
      <div
        className="icon flex ml-5 flex-initial w-1/5 text-7xl sm:ml-20 hover:cursor-pointer"
        onClick={() => {
          window.location.pathname = "/";
        }}
      >
        <IconContext.Provider value={{ color: "white" }}>
          <TbHeartHandshake />
        </IconContext.Provider>
      </div>
      <div className="hidden md:menus md:flex md:flex-initial md:w-3/5 md:gap-8 sm:gap-10 md:text-2xl md:text-white md:ml-10 md:font-mono">
        <NavLink to={{ pathname: "/" }} className="hover:text-gray-200">
          Home
        </NavLink>
        <NavLink to={{ pathname: "/about" }} className="hover:text-gray-200">
          About
        </NavLink>
        <NavLink to={{ pathname: "/blogs" }} className="hover:text-gray-200">
          Blogs
        </NavLink>
      </div>
      <div className="hidden notification-and-profile md:flex md:flex-initial md:w-2/5 md:text-5xl md:justify-end sm:gap-10 sm:mr-20">
        <AiOutlineBell
          style={{ color: "white" }}
          className="flex hover:cursor-pointer "
          onClick={() => {
            console.log("clicked notifications button!");
            NotificationDropdownState
              ? CloseNotificationDropdown()
              : OpenNotificationDropdown();
          }}
        />
        {NotificationDropdownState && (
          <SimpleDropdown
            itemsList={[
              "Someone just followed you!",
              "Someone just commented on your Blog!",
              "Someone just Liked your Blog!",
            ]}
          />
        )}
        <CgProfile
          style={{ color: "white" }}
          className="flex hover:cursor-pointer"
          onClick={() => {
            ProfileDropdownState
              ? CloseProfileDropdown()
              : OpenProfileDropdown();
          }}
        />

        {ProfileDropdownState && (
          <SimpleDropdown itemsList={["My Profile", "My Blogs", "Settings"]} />
        )}
      </div>
      <HamburgerMobileNavDropdown
        MobileItemsList={[
          ["Home", "About", "Blogs", "My Profile", "My Blogs", "Settings"],
        ]}
      />
    </div>
  );
}
