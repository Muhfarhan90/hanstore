import cart from "../../public/cart.svg";
import favorite from "../../public/favorite.svg";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center pb-4 pt-8 px-[135px] border-2">
      <div>
        <a href="" className="text-3xl font-bold tracking-wider underline underline-offset-4">Hanstore</a>
      </div>
      <ul className="flex gap-6">
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
          <a href="">Home</a>
        </li>
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
          <a href="">Contact</a>
        </li>
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
          <a href="">About</a>
        </li>
        <li className="text-xl font-normal hover:underline hover:underline-offset-8 hover:font-bold">
          <a href="">Sign Up</a>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <SearchBar/>
        <img src={favorite} alt="" className="text-black" />
        <img src={cart} alt="" className="text-black"/>
      </div>
    </div>
  );
};

export default Navbar;
