// components/Navbar.js
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 min-h-60px">
      <div className="container mx-auto flex justify-end items-end">
        <div className="flex ">
        <Image
            className="mr-6"
            src="/Group99.jpg"
            width="35"
            height="30"
            alt="download"
          />
          <Image
            className="mr-6"
            src="/Group100.jpg"
            width="35"
            height="30"
            alt="Bell"
          />
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
