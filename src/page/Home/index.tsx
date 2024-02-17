import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import BlogPosts from "./components/blog-posts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className=" hidden md:block">
          <AspectRatio ratio={16 / 7}>
            <div className=" px-[8rem] bottom-1/2 transform translate-y-1/2 absolute">
              <h2 className=" md:text-6xl lg:text-7xl leading-[5rem] font-bold">
                Elevate Life <br /> with Style.
              </h2>
              <p className=" text-zinc-600 track my-7 font-semibold w-[55%] ">
                Explore a curated blend of style and purpose at THE LIFESTYLED,
                where every post is a step towards a more inspired and elevated
                life.
              </p>
              <Link to={"/blog"}>
                <Button
                  className=" bg-yellow rounded-full px-5 transition-all duration-200 hover:bg-[#d2a404] active:scale-95"
                  size={"sm"}
                >
                  Read Blog
                </Button>
              </Link>
            </div>
            <img
              src="./Rectangle1.png"
              className=" w-full object-cover object-center h-full"
              alt="rectangle"
            />
          </AspectRatio>
        </div>
        {/* Responsive sm */}
        <div className=" px-[1.5rem] block md:hidden bottom-10  absolute">
          <h2 className=" text-5xl leading-[4rem] font-bold">
            Elevate Life <br /> with Style.
          </h2>
          <p className=" text-zinc-600 track my-3   w-[95%] ">
            Explore a curated blend of style and purpose at THE LIFESTYLED,
            where every post is a step towards a more inspired and elevated
            life.
          </p>
          <Link to={"/blog"}>
            <Button
              className=" bg-yellow rounded-full px-4 text-sm transition-all duration-200 hover:bg-[#d2a404] active:scale-95"
              size={"sm"}
            >
              Read Blog
            </Button>
          </Link>
        </div>
        <img
          src="./Rectangle1.png"
          className=" md:hidden block w-full object-cover h-[400px]"
          alt="rectangle"
        />
      </div>
      {/* blog posts */}
      <BlogPosts />
    </>
  );
};

export default Home;
