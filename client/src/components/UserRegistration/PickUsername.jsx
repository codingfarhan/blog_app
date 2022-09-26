import React, { useState, useEffect } from "react";
import NavbarComponent from "../Common_Components/NavbarComp";

// the main component for picking username page:
export function PickUsername() {
  const [usernameState, setUsernameState] = useState("");
  const [usernameErrorState, setUsernameErrorState] = useState(false);

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
  }, [usernameState]);
  return (
    <div className="parent flex flex-col">
      <NavbarComponent />
      <div className="flex flex-col sm:overflow-y-hidden overflow-x-hidden h-screen w-screen bg-gradient-to-r from-gray-800 via-red-100000 to-gray-900">
        <div className="flex flex-col mt-20 h-screen justify-center items-center font-mono text-white">
          <form
            // method="POST"
            className="flex flex-col gap-10 p-28 bg-white text-black rounded-md w-2/3 min-h-2/3"
          >
            <label
              htmlFor="username"
              className="font-bold text-center text-2xl"
            >
              You're almost finished! Pick a username.
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              className={
                "text-center p-1 text-lg w-1/2 self-center text-white rounded bg-black " +
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
                Username should not be longer than 12 characters and should only
                contain underscore and alphanumeric characters.
              </small>
            )}

            <button
              type="submit"
              className="button rounded bg-red-600 w-1/6 h-10 self-center cursor-pointer hover:bg-red-500 text-white"
              onClick={() => {
                window.location.pathname = "/blogs";
              }}
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
