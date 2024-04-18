import imgItc from "../assets/logo-itc.jpeg";
import imgTec from "../assets/logo-tecnm.jpeg";

import Icon from "./Icon";
const Header = () => {
  return (
    <nav className="h-14 bg-slate-100">
      <ul className="h-full flex justify-center items-center lg:justify-between lg:px-[20%]">
        <li>
          <img src={imgItc} alt="logo TECNM" className="w-[100px] h-[50px]" />
        </li>
        <li>
          <img src={imgTec} alt="logo TECNM" className="w-[150px] h-[50px]" />
        </li>
        <li className="hidden lg:block ">
          <a
            href="#qr"
            className="p-3 rounded-2xl bg-blue-500 text-cyan-50 font-bold flex"
          >
            <Icon />
            Inscribirte
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
