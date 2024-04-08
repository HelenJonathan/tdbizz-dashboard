import Link from "next/link";
import Image from "next/image";

const Biodata = () => {
  return (
    <div className="bg-white p-2 shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-start items-start py-2">
        <p className="text-[#707083]">Bio-data</p>
      </div>
      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Username:</p>
        <p>
          @<span className="text-[blue]">dmrjje</span>
        </p>
      </div>
      <div className="py-2 flex justify-between">
        <p className="text-[#4C5483]">D.O.B:</p>
        <p>07/02/2003</p>
      </div>
      <div className="py-2 flex justify-between">
        <p className="text-[#4C5483]">Address:</p>
        <p className="justify-end items-end">
          22 Viracrage road, <br />
          Albert Road, Birmingham, <br />
          United Kingdom
        </p>

      </div>
      <div className="py-2 flex justify-between">
        <p className="text-[#4C5483]">Registered:</p>
        <p>07/02/2024</p>
      </div>
      <div className="py-2 flex justify-between">
        <p className="text-[#4C5483]">Gender:</p>
        <p>Female</p>
      </div>
    </div>
  );
};

export default Biodata;
