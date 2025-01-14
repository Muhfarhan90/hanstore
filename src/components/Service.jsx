import delivery from "../../public/icon-delivery.svg";
import cs from "../../public/icon-Customer Service.svg";
import secure from "../../public/icon-secure.svg";
// import delivery from "../../public/icon-delivery.svg"
const Service = () => {
  return (
    <div>
      <div className="flex gap-24 items-center justify-center">
        {/* Card 1 */}
        <div className="flex flex-col gap-10 items-center">
          <div className="p-4 bg-gray-300 rounded-full">
            <div className="p-4 bg-black rounded-full">
              <img src={delivery} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[20px] font-semibold">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-base font-normal">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col gap-10 items-center">
          <div className="p-4 bg-gray-300 rounded-full">
            <div className="p-4 bg-black rounded-full">
              <img src={cs} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</h1>
            <p className="text-base font-normal">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col gap-10 items-center">
          <div className="p-4 bg-gray-300 rounded-full">
            <div className="p-4 bg-black rounded-full">
              <img src={secure} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[20px] font-semibold">MONEY BACK GUARANTEE </h1>
            <p className="text-base font-normal">
              We reurn money within 30 days
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Service;
