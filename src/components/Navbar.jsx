import { FaInstagram } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import logo from "../assets/Logo2.png";
const Navbar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between pt-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-[10rem]" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/diana-dubovyk-15994a183/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/DiDubovyk">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/di_vixen/profilecard/?igsh=eG1qbHR2dml6ZWMy">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar
