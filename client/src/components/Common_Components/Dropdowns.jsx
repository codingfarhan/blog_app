import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// Dropdown component (for Notifications and Profile dropdowns):

export function SimpleDropdown(props) {
  let itemsList = props.itemsList;
  let selectedOptions = props.selectedOptions;

  console.log(itemsList);
  console.log(selectedOptions);

  return (
    <div className="dropdown text-black h-auto min-w-24 p-5 bg-white font-bold text-sm mt-14 rounded z-50 absolute text-center font-mono">
      <ul>
        {selectedOptions.length === 0
          ? itemsList.map((item) => {
              return (
                <li
                  key={itemsList.indexOf(item)}
                  className="hover:bg-gray-100 hover:cursor-pointer"
                >
                  {item}
                </li>
              );
            })
          : itemsList.map((item) => {
              return (
                <li
                  key={itemsList.indexOf(item)}
                  className={
                    "hover:bg-gray-100 hover:cursor-pointer " +
                    (selectedOptions.includes(item) ? "bg-green-200" : "")
                  }
                >
                  {item}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

// Mobile Dropdown Component (On smaller screens only..):

export function HamburgerMobileNavDropdown(props) {
  const [MobileDropdownState, setMobileDropdownState] = useState(false);
  // console.log(props.MobileItemsList[0]);
  useEffect(() => {
    MobileDropdownState
      ? console.log("Mobile Dropdown opened!")
      : console.log("Mobile Dropdown Closed!");
  }, [MobileDropdownState]);
  return (
    <div className="flex flex-auto text-black mr-5 sm:mr-0 sm:flex-initial md:hidden home-dropdown justify-end w-3/5 text-7xl hover:cursor-pointer">
      <GiHamburgerMenu
        className="flex"
        style={{ color: "white" }}
        onClick={() => {
          setMobileDropdownState((currentValue) => !currentValue);
        }}
      />
      {MobileDropdownState && (
        <SimpleDropdown
          itemsList={props.MobileItemsList[0]}
          selectedOptions={[]}
        />
      )}
    </div>
  );
}

export function InputDropdown(props) {
  const [InputDropdownState, setInputDropdownState] = useState(false);
  const [InputValue, setInputValue] = useState("");

  const itemsList = props.itemsList;
  return (
    <div
      className={
        "dropdown text-black p-0.5 h-fit sm:min-w-24 w-auto font-bold bg-white text-sm rounded z-50 text-center font-mono " +
        (InputDropdownState ? "sm:absolute sm:mt-6" : "")
      }
    >
      <input
        type="text"
        id={props.inputId}
        className="hover:cursor-pointer border-none text-center"
        placeholder="Select an option"
        value={InputValue}
        onChange={(e) => {
          e.preventDefault();
          console.log("value of gender changed!");
        }}
        onClick={() => {
          setInputDropdownState((oldState) => !oldState);
        }}
      />
      <ul>
        {InputDropdownState &&
          itemsList.map((item) => {
            return (
              <li
                key={itemsList.indexOf(item)}
                className="hover:bg-gray-100 hover:cursor-pointer"
                onClick={() => {
                  setInputValue(item);
                  setInputDropdownState((oldState) => !oldState);
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
