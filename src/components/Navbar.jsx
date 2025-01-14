import { Link } from "react-router-dom";
import cart from "../../public/cart.svg";
import favorite from "../../public/favorite.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pb-4 pt-8 px-[135px] border-2">
      <div>
        <a
          href=""
          className="text-3xl font-bold tracking-wider underline underline-offset-4"
        >
          Hanstore
        </a>
      </div>
      <ul className="flex gap-12">
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
        <Link to="/contact">Contact</Link>
        </li>
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
        <Link to="/about">About</Link>
        </li>
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
        <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <SearchBar />
        <img src={favorite} alt="" className="text-black w-[28px]" />
        <img src={cart} alt="" className="text-black w-[28px]" />
      </div>
    </div>
  );
};

export default Navbar;
