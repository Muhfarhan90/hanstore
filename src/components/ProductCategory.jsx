import { GiSmartphone } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
// import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { FiTv } from "react-icons/fi";
import { BsSmartwatch } from "react-icons/bs";
const ProductCategory = () => {
  const location = useLocation();
  return (
    <div className="flex gap-8 items-center justify-center">
      <NavLink
        to={"/products/category?type=tv"}
        className={
          location.search === "?type=tv"
            ? "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] bg-red-500 text-white"
            : "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
        }
      >
        <FiTv size={"56px"} />
        TV
      </NavLink>
      <NavLink
        to={"/products/category?type=audio"}
        className={
          location.search === "?type=audio"
            ? "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] bg-red-500 text-white"
            : "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
        }
      >
        <CiHeadphones size={"56px"} />
        Audio
      </NavLink>
      <NavLink
        to={"/products/category?type=laptop"}
        className={
          location.search === "?type=laptop"
            ? "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] bg-red-500 text-white"
            : "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
        }
      >
        <MdComputer size={"56px"} />
        Laptop
      </NavLink>
      <NavLink
        to={"/products/category?type=mobile"}
        className={
          location.search === "?type=mobile"
            ? "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] bg-red-500 text-white"
            : "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
        }
      >
        <GiSmartphone size={"56px"} />
        Mobile
      </NavLink>
      <NavLink
        to={"/products/category?type=gaming"}
        className={
          location.search === "?type=gaming"
            ? "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] bg-red-500 text-white"
            : "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
        }
      >
        <IoGameControllerOutline size={"56px"} />
        Gaming
      </NavLink>
      <NavLink
        to={"/products/category?type=appliances"}
        className={
          location.search === "?type=appliances"
            ? "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] bg-red-500 text-white"
            : "flex flex-col items-center gap-4 text-xl p-8 border rounded-lg w-[170px] hover:bg-red-200"
        }
      >
        <BsSmartwatch size={"56px"} />
        Appliances
      </NavLink>
    </div>
  );
};

export default ProductCategory;
