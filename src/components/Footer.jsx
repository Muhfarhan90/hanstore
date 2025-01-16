import send from "../../public/icon-send.svg";
import twitter from "../../public/Icon-Twitter.svg";
import linkedin from "../../public/Icon-Linkedin.svg";
import instagram from "../../public/Icon-instagram.svg";
import facebook from "../../public/Icon-Facebook.svg";
import qrcode from "../../public/qrcode.png";
import google from "../../public/google.png";
import appstore from "../../public/appstore.png";
const Footer = () => {
  return (
    <div className="flex bg-black text-white gap-20 justify-center py-20">
      {/* section 1 */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-[24px] font-bold tracking-wider">Hanstore</h1>
            <h2 className="text-[20px] font-medium">Subscribe</h2>
          </div>
          <p className="text-base font-normal">Get 10% off your first order</p>
        </div>
        <div className="flex items-center gap-2 py-3 px-4 border-2 border-white rounded-md">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-black"
          />
          <button>
            <img src={send} alt="" />
          </button>
        </div>
      </div>
      {/* section 1 */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[20px] font-medium">Support</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-base font-normal">exclusive@gmail.com </p>
            <p className="text-base font-normal">+88015-88888-9999 </p>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[20px] font-medium">Account</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal">My Account </p>
            <p className="text-base font-normal">Login / Register</p>
            <p className="text-base font-normal">Cart</p>
            <p className="text-base font-normal">Wishlist</p>
            <p className="text-base font-normal">Shop</p>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[20px] font-medium">Quick Link</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal">Privacy Policy</p>
            <p className="text-base font-normal">Terms Of Use</p>
            <p className="text-base font-normal">FAQ</p>
            <p className="text-base font-normal">Contact</p>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[20px] font-medium">Download App</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[12px] text-black/70">Save $3 with App New User Only</p>
            <div className="flex gap-2">
              <div>
                <img src={qrcode} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <img src={google} alt="" />
                <img src={appstore} alt="" />
              </div>
            </div>
          </div>
          <ul className="flex gap-4">
            <li>
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="" className="">
                <img src={twitter} alt="" className="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
