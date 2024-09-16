import { FaInstagram } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import logo from "../assets/Logo2.png";
const Navbar = () => {
  return (
    <nav className="mb-5 relative z-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-[10rem]" src={logo} alt="logo" />
          </div>
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
              <FaLinkedinIn />
              <FaGithub />
              <FaInstagram />
          </div>
    </nav>
  );
}

export default Navbar
