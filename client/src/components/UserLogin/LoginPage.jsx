import React, { useState, useEffect } from "react";
import NavbarComponent from "../Common_Components/NavbarComp";

// main login page component:
export default function LoginPage() {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const [usernameErrorState, setUsernameErrorState] = useState(false);
  const [passwordErrorState, setPasswordErrorState] = useState(false);

  let passwordIsValid = (password) => {
    if (
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const usernameIsValid = (username) => {
    if (/^[a-zA-Z0-9_]+$/.test(username) && username.length <= 12) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    usernameState !== "" && usernameIsValid(usernameState)
      ? setUsernameErrorState(false)
      : setUsernameErrorState(true);

    passwordState !== "" && passwordIsValid(passwordState)
      ? setPasswordErrorState(false)
      : setPasswordErrorState(true);
  }, [usernameState, passwordState]);

  return (
    <div className="parent flex flex-col">
      <NavbarComponent />
      <div className="flex flex-col sm:overflow-y-hidden overflow-x-hidden h-screen w-screen bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
        <div className="flex flex-col mt-20 h-screen justify-center items-center font-mono text-white">
          <form className="flex flex-col mb-16 gap-28 px-28 bg-white text-black rounded-md lg:w-2/3 md:w-4/5 md:max-h-2/3 min-h-screen w-screen place-content-center">
            <h1 className="flex flex-row font-bold text-center text-8xl justify-center">
              Login
            </h1>
            <div className="flex flex-col justify-self-end gap-6">
              <input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                className={
                  "text-center p-1 text-lg sm:w-3/4 self-center text-white rounded bg-black " +
                  (usernameErrorState && usernameState !== ""
                    ? "border-4 border-red-600"
                    : "")
                }
                value={usernameState}
                onChange={(e) => {
                  setUsernameState(e.target.value);
                }}
              />
              {usernameErrorState && usernameState !== "" && (
                <small className="text-red-500">
                  Username should not be longer than 12 characters and should
                  only contain underscore and alphanumeric characters.
                </small>
              )}
              <input
                id="password"
                type="password"
                placeholder="********"
                className={
                  "text-center p-1 text-lg sm:w-3/4 self-center text-white rounded bg-black " +
                  (passwordErrorState && passwordState !== ""
                    ? "border-4 border-red-600"
                    : "")
                }
                value={passwordState}
                onChange={(e) => {
                  setPasswordState(e.target.value);
                }}
              />
              {passwordErrorState && passwordState !== "" && (
                <small className="text-red-500">
                  Password should be between 6-16 characters long, should
                  contain atleast one number and one special character.
                </small>
              )}
              <button
                type="submit"
                className="button rounded bg-red-600 sm:w-1/6 min-w-2/3 p-2 h-10 self-center cursor-pointer hover:bg-red-500 text-white"
                onClick={() => {
                  window.location.pathname = "/blogs";
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
