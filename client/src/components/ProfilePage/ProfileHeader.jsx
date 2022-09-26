import react from "react";

// exporting main profile header component:
export default function ProfileHeader() {
  return (
    <div className="profile-header flex flex-col w-screen h-80 bg-green-500 place-content-center bg-gradient-to-r from-red-400 to-gray-500">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbcdxwIp2sRcP5fNLZhLwUgkXfU6VLo-EiQ&usqp=CAU"
        alt="profile image"
        className="image flex md:w-1/4 h-auto self-center absolute mt-40 rounded-full hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      />
    </div>
  );
}
