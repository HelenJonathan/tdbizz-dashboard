import Image from "next/image";

const SmallBox = ({ title, value, imageUrl }) => {
  return (
    <div
      className={`bg-white shadow-md w-41 rounded-lg p-4 flex flex-col items-left`}
    >
      <div className="flex">
        {imageUrl && (
          <div className="w-8 h-8 mb-2 mr-3">
            <Image src={imageUrl} alt={title} width="30" height="30" />
            {/* Adjust width and height as needed */}
          </div>
        )}
        <h3 className="text-[#4C5483]-200 text-sm font-small">{title}</h3>
      </div>

      <p className="text-[#4C5483]-700 text-l mt-2 font-bold">{value}</p>
    </div>
  );
};

export default SmallBox;
