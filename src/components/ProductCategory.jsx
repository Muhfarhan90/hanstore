import { GiSmartphone } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { FiTv } from "react-icons/fi";

const ProductCategory = () => {
  return (
    <div className="flex gap-8 items-center justify-center">
      <NavLink
        to={"/products/category?type=tv"}
        className="flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
      >
        <FiTv size={"56px"} />
        TV
      </NavLink>
      <NavLink
        to={"/products/category?type=audio"}
        className="flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
      >
        <CiHeadphones size={"56px"} />
        Audio
      </NavLink>
      <NavLink
        to={"/products/category?type=laptop"}
        className="flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
      >
        <MdComputer size={"56px"} />
        Laptop
      </NavLink>
      <NavLink
        to={"/products/category?type=mobile"}
        className="flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
      >
        <GiSmartphone size={"56px"} />
        Mobile
      </NavLink>
      <NavLink
        to={"/products/category?type=gaming"}
        className="flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
      >
        <IoGameControllerOutline size={"56px"} />
        Gaming
      </NavLink>
      <NavLink
        to={"/products/category?type=appliances"}
        className="flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
      >
        <CiCamera size={"56px"} />
        Appliances
      </NavLink>
    </div>
  );
};

export default ProductCategory;
