/* eslint-disable react/prop-types */
import twitter from "../../public/icon-Twitter.svg";
import linkedin from "../../public/icon-Linkedin.svg";
import instagram from "../../public/icon-instagram.svg";
const Member = ({ profile, name, position }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex-shrink-0">
        <img src={profile} alt="" className="w-[370px] h-[430px]"/>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-medium">{name}</h1>
          <p className="text-base font-normal">{position}</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <a href="">
              <img src={twitter} alt="" className="w-[24px]"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagram} alt="" className="w-[24px]"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src={linkedin} alt="" className="w-[24px]"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Member;
