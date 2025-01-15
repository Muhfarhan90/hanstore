/* eslint-disable react/prop-types */

// import delivery from "../../public/icon-delivery.svg"
const Service = ({ icon, title, desc }) => {
  return (
    <div>
        {/* Card 1 */}
        <div className="flex flex-col gap-6 items-center">
          <div className="p-4 bg-gray-300 rounded-full">
            <div className="p-4 bg-black rounded-full">
              <img src={icon} alt="icon" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[20px] font-semibold">{title}</h1>
            <p className="text-base font-normal">{desc}</p>
          </div>
        </div>
      </div>
  );
};

export default Service;
