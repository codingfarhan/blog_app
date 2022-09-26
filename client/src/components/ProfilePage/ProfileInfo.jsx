import react from "react";
import { GoLocation } from "react-icons/go";

// exporting main component:
export default function ProfileInfo() {
  return (
    <div className="profile-info flex flex-col w-screen h-16 text-white mt-56  place-content-center">
      <p className="text-center font-mono text-2xl">Syed Farhan Ahmad</p>
      <p className="text-center font-mono text-md text-red-100">
        Professional Developer
      </p>
      <div className="flex flex-row justify-center mt-4 gap-2 text-red-100">
        <GoLocation />
        <p className="text-center font-mono text-sm">Noida, India</p>
      </div>
      <p className="text-center font-mono text-sm px-8 sm:px-28 pt-6 text-red-100">
        A character can be any letter, number, punctuation, special character,
        or space. Each of these characters takes up one byte of space in a
        computer oke
      </p>
    </div>
  );
}
