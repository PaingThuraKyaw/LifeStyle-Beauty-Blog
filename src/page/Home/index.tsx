import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import BlogPosts from "./components/blog-posts";

const Home = () => {
  return (
    <>
      <div className=" relative">
        <AspectRatio ratio={16 / 7}>
          <div className=" px-[8rem] bottom-1/2 transform translate-y-1/2 absolute">
            <h2 className=" text-7xl leading-[5rem] font-bold">
              Elevate Life <br /> with Style.
            </h2>
            <p className=" track my-7 font-semibold w-[55%] ">
              Explore a curated blend of style and purpose at THE LIFESTYLED,
              where every post is a step towards a more inspired and elevated
              life.
            </p>
            <Button
              className=" bg-yellow rounded-full px-5 transition-all duration-200 hover:bg-yellow active:scale-95"
              size={"sm"}
            >
              Read Blog
            </Button>
          </div>
          <img
            src="./Rectangle1.png"
            className=" w-full object-cover object-center h-full"
            alt="rectangle"
          />
        </AspectRatio>
      </div>
      {/* blog posts */}
      <BlogPosts />
    </>
  );
};

export default Home;
