import React, { useState, useEffect } from "react";
import NavbarComponent from "../Common_Components/NavbarComp";
import { InputDropdown } from "../Common_Components/Dropdowns";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// exporting the main registration form component:
export default function RegistrationForm() {
  const [StartDate, setStartDate] = useState(new Date());

  // various input field states...
  const [EmailState, setEmailState] = useState("");
  const [EmailError, setEmailError] = useState(null);
  const [PasswordState, setPasswordState] = useState("");
  const [PasswordError, setPasswordError] = useState(null);
  const [FirstNameState, setFirstNameState] = useState("");
  const [FirstNameError, setFirstNameError] = useState(null);
  const [LastNameState, setLastNameState] = useState("");
  const [LastNameError, setLastNameError] = useState(null);

  // State that stores the overall validity of the form...
  const [FormValid, setFormValid] = useState(true);

  // functions to validate various form fields...

  let validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  let validatePassword = (password) => {
    if (
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  let validateNameFields = (name) => {
    if (name.length > 16 || !/^[a-z ,.'-]+$/i.test(name)) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    console.log("Date changed to..", StartDate);
  }, [StartDate]);

  useEffect(() => {
    EmailState !== "" && validateEmail(EmailState);
    PasswordState !== "" && validatePassword(PasswordState);
  }, [EmailState, PasswordState]);

  useEffect(() => {
    FirstNameState !== "" && validateNameFields(FirstNameState)
      ? setFirstNameError(false)
      : setFirstNameError(true);
    LastNameState !== "" && validateNameFields(LastNameState)
      ? setLastNameError(false)
      : setLastNameError(true);
  }, [FirstNameState, LastNameState]);

  useEffect(() => {
    setFormValid(
      !(
        EmailError ||
        PasswordError ||
        FirstNameError ||
        LastNameError ||
        EmailState === "" ||
        PasswordState === "" ||
        FirstNameState === "" ||
        LastNameState === ""
      )
    );
  }, [EmailError, PasswordError, FirstNameError, LastNameError]);

  const CalendarContainerComp = ({ className, children }) => {
    return (
      <div className="z-50">
        <CalendarContainer className={className}>
          <div className="">{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:overflow-y-hidden overflow-x-hidden h-screen w-screen bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
      <NavbarComponent />
      <div className="flex mt-20 h-screen justify-center items-center font-mono text-white">
        <form
          className={
            "card pt- grid grid-col rounded w-screen md:w-2/3 md:h-auto sm:mt-0 px-20 pb-48 pt-20" +
            (PasswordError || EmailError || FirstNameError || LastNameError
              ? " mt-48"
              : " mt-20")
          }
          method="POST"
        >
          <h1 className="grid text-center text-6xl sm:text-7xl md:text-8xl underline underline-offset-8 decoration-1 decoration-red-600 pb-12">
            Register
          </h1>
          <div className="namesSection grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="grid grid-cols-1">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                value={FirstNameState}
                onChange={(e) => {
                  e.preventDefault();
                  setFirstNameState(e.target.value);
                }}
                type="text"
                placeholder="John"
                className={
                  "font-lg rounded text-black px-1" +
                  (FirstNameError && FirstNameState !== ""
                    ? " border-2 border-red-400"
                    : "") +
                  (FirstNameState === null ? "" : "") +
                  (!FirstNameError && FirstNameState !== ""
                    ? " border-2 border-green-400"
                    : "")
                }
              />
              {FirstNameError && FirstNameState !== "" && (
                <small
                  id="firstNameError"
                  className="text-red-500 text-sm text-center"
                >
                  Please enter a valid first name and make sure that it is not
                  more than 16 characters long.
                </small>
              )}
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                value={LastNameState}
                onChange={(e) => {
                  e.preventDefault();
                  setLastNameState(e.target.value);
                }}
                type="text"
                placeholder="Doe"
                className={
                  "font-lg rounded text-black px-1" +
                  (LastNameError && LastNameState !== ""
                    ? " border-2 border-red-400"
                    : "") +
                  (LastNameState === null ? "" : "") +
                  (!LastNameError && LastNameState !== ""
                    ? " border-2 border-green-400"
                    : "")
                }
              />
              {LastNameError && LastNameState !== "" && (
                <small
                  id="firstNameError"
                  className="text-red-500 text-sm text-center"
                >
                  Please enter a valid last name and make sure that it is not
                  more than 16 characters long.
                </small>
              )}
            </div>
          </div>
          <div className="PersonalInfoSection grid sm:grid-cols-2 grid-cols-1 mt-4 gap-4 font-mono">
            <div className="grid grid-cols-1">
              <label htmlFor="genderInput">Gender</label>
              <InputDropdown
                id={"genderInput"}
                itemsList={["Male", "Female", "Other"]}
                dropdownId={"genderDropdown"}
                inputId={"GenderInput"}
                className="input font-sans w-auto"
              />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="Birthday">Birthday</label>
              <DatePicker
                selected={StartDate}
                id="Birthday"
                className="text-black rounded text-center"
                onChange={(date) => setStartDate(date)}
                calendarContainer={CalendarContainerComp}
                calendarClassName={"relative z-50"}
              />
            </div>
          </div>
          <div className="email-and-username grid grid-cols-1 mt-10 sm:grid-cols-2 gap-4">
            <div className="email grid grid-cols-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={EmailState}
                onChange={(e) => {
                  e.preventDefault();
                  setEmailState(e.target.value);
                }}
                placeholder="example@something.com"
                className={
                  "rounded text-black font-lg px-1" +
                  (EmailError && EmailState !== ""
                    ? " border-2 border-red-600"
                    : "") +
                  (EmailState === null ? "" : "") +
                  (!EmailError && EmailState !== ""
                    ? " border-2 border-green-400"
                    : "")
                }
              />
              {EmailError && (
                <small
                  id="emailError"
                  className="text-red-500 text-sm text-center"
                >
                  Invalid Email! Please check again.
                </small>
              )}
            </div>

            <div className="password grid grid-cols-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={PasswordState}
                onChange={(e) => {
                  e.preventDefault();
                  setPasswordState(e.target.value);
                }}
                placeholder="********"
                className={
                  "font-lg rounded text-black px-1" +
                  (PasswordError && PasswordState !== ""
                    ? " border-2 border-red-400"
                    : "") +
                  (PasswordState === null ? "" : "") +
                  (!PasswordError && PasswordState !== ""
                    ? " border-2 border-green-400"
                    : "")
                }
              />
              {PasswordError && (
                <small
                  id="passwordError"
                  className="text-red-500 text-sm text-center"
                >
                  Password should be between 6-16 characters long and should
                  contain atleast one number and one special character.
                </small>
              )}
            </div>
          </div>
          <div className="submit-btn grid grid-rows-1">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                FormValid
                  ? (window.location.pathname = "signup/pickUsername")
                  : alert("Please fill the form completely.");
              }}
              className="grid justify-self-center md:w-1/3 md:mt-10 center bg-red-600 text-white rounded px-5 py-2 mt-10 hover:bg-red-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
