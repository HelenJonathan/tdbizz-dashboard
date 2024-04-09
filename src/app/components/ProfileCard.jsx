"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Portal from "./Deleteuser";

const ProfileCard = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPortalOpen(true);
  };

  const handlePortalClose = () => {
    setIsPortalOpen(false);
  };

  return (
    <div className="bg-white p-2 shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-start items-start py-2">
        <Link href="/users">
          <Image
            className="mr-2"
            src="/arrow-left.jpg"
            width="25"
            height="25"
            alt="arrow"
          />
        </Link>
        <p>
          user / <span className="text-[#707083]">daniella</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="/profile-pic.jpg" // Replace with the URL of your image
          alt="Profile Picture"
          className="w-28 rounded-full h-28 object-cover"
        />
        <div className="p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2 text-[#707083]">
            Micah Jonnes
          </h2>
          <p className="text-blue-600 mb-2">dmrjje@mail.com</p>
          {/* <p className="text-gray-600 mb-4">Driver <span className="">.</span> <span>Active</span></p> */}
          <p className="text-gray-600 mb-4">
            Driver <span className="text-gray-500">.</span>{" "}
            <span className="text-[green]">Active</span>
          </p>
          <div className="flex justify-between">
            <button className="bg-white-500 text-black border-4 py-2 px-4 rounded-md mr-2 hover:bg-blue-600">
              Suspend Driver
            </button>
            <button
              onClick={handleButtonClick}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Delete Driver
            </button>

            {isPortalOpen && <Portal onClose={handlePortalClose} />}
          </div>
          <p className="text-[#707083]">*Perform action on driver</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
