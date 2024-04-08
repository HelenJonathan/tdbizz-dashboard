import Image from "next/image";

const Smallbox2 = ({ title, value, imageUrl }) => {
  return (
    <div
      className={`bg-white w-41 shadow-md rounded-lg p-3 flex flex-col items-left`}
    >
      <div className="flex">
        <h3 className="text-[#4C5483]-200 text-sm font-small lg:flex-grow">{title}</h3>
        {imageUrl && (
          <div className="w-8 h-8 mb-2">
            <Image src={imageUrl} alt={title} width="32" height="32" />
           
          </div>
        )}
      </div>

      <p className="text-[#4C5483]-700 text-l mt-2 font-bold">{value}</p>
    </div>
  );
};

export default Smallbox2;
