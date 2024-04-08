import Image from "next/image";

const Smallbox3 = ({ title, valuep, value, imageUrl }) => {
  return (
    <div
      className={`bg-white w-64 shadow-md rounded-lg px-4 py-8 flex flex-col items-center justify-center`}
    >
      <div className="items-center">
        {imageUrl && (
          <div>
            <Image src={imageUrl} alt={title} width="62" height="40" />
          </div>
        )}
        <p className="text-[#4C5483] text-xs text-center font-small">
          {valuep}
        </p>
        <p className="text-[#4C5483] text-l font-bold">{title}</p>
      </div>

      <p className="text-[#4C5483] text-xs font-small">{value}</p>
    </div>
  );
};

export default Smallbox3;
