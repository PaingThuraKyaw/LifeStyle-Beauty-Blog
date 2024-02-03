import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Mail, Search, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className=" relative">
      <div className=" py-4 shadow-lg px-[1.5rem] md:px-[5rem]">
        <div className=" flex items-center justify-between">
          <h3 className=" text-base space-x-2">
            <span className=" tracking-[0.2rem] ">THE</span>
            <span className=" tracking-[0.2rem] text-shadow font-bold ">
              STYLEDLIF
            </span>
          </h3>
          <div className=" hidden  md:flex items-center">
            <div className=" space-x-7">
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>

            <div className=" flex border-l-2 border-black/50 border-r-2 mx-7 px-7 items-center space-x-5">
              <FaFacebookF />
              <FaInstagram />
              <Mail size={18} />
            </div>
            <div>
              <Search
                onClick={() => setOpen(!open)}
                className=" cursor-pointer"
                size={16}
              />
            </div>
          </div>
        </div>
      </div>
      {/* search input */}
      {open && (
        <div className=" z-10 absolute -bottom-12 pb-2 pt-[11px] bg-white/80 w-full">
          <div className=" flex items-center space-x-8 px-[5rem]">
            <X
              className=" cursorsetOpen-pointer"
              onClick={() => false}
              size={20}
            />
            <input
              type="text"
              placeholder="type here..."
              className=" pb-1 focus:outline-none border-b-2 w-full bg-transparent border-black/30 "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
