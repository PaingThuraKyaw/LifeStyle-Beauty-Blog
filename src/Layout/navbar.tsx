import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { AlignJustify, Mail, Search, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [model, setModel] = useState(false);

  const navigate = useNavigate();

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/blog/${search}`);
    setSearch("");
    setOpen(false);
    setModel(false);
  };

  return (
    <div className=" relative">
      <div className=" py-4 shadow-lg px-[1.5rem] md:px-[5rem]">
        <div className=" flex items-center justify-between">
          <h3 className=" text-base space-x-2">
            <span className=" md:tracking-[0.2rem] ">THE</span>
            <span className=" md:tracking-[0.2rem] text-shadow font-bold ">
              STYLEDLIF
            </span>
          </h3>
          <div className=" hidden  md:flex items-center">
            <div className=" space-x-7">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/blog"}>Blog</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
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

          {/* mobile view  */}
          <div className=" md:hidden block ">
            <Sheet open={model} onOpenChange={() => setModel(!model)}>
              <SheetTrigger asChild>
                <Button size={"sm"} variant={"ghost"}>
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent className="" side={"top"}>
                <form onSubmit={onSearch} className=" mt-4">
                  <input
                    name="blog"
                    type="text"
                    placeholder="type here..."
                    className=" pb-1 focus:outline-none border-b-2 w-full bg-transparent border-black/30 "
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
                <div className=" mt-5 flex flex-col space-y-3">
                  <NavLink onClick={() => setModel(false)} to={"/"}>
                    Home
                  </NavLink>
                  <NavLink onClick={() => setModel(false)} to={"/about"}>
                    About
                  </NavLink>
                  <NavLink onClick={() => setModel(false)} to={"/blog"}>
                    Blog
                  </NavLink>
                  <NavLink onClick={() => setModel(false)} to={"/contact"}>
                    Contact
                  </NavLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {open && (
        <div className=" hidden md:block z-10 absolute -bottom-18 pb-2 pt-[11px] shadow-md bg-white w-full">
          {/* search input */}
          <form
            onSubmit={onSearch}
            className=" flex items-center space-x-8 px-[5rem]"
          >
            <Button
              size={"sm"}
              variant={"ghost"}
              type="button"
              onClick={() => setOpen(false)}
            >
              <X
                className=" cursor-pointer"
                onClick={() => setOpen(false)}
                size={20}
              />
            </Button>
            <input
              name="blog"
              type="text"
              placeholder="type here..."
              className=" pb-1 focus:outline-none border-b-2 w-full bg-transparent border-black/30 "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
