import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const BlogPosts = () => {
  return (
    <div className=" py-5 bg-black/5  px-[8rem] ">
      <div className="pt-7 flex items-center  justify-between">
        <h4 className=" font-bold text-2xl">Blog Posts</h4>
        <div className=" cursor-pointer flex items-center space-x-1">
          <span>View all posts</span>
          <MoveRight />
        </div>
      </div>
      {/* posts */}
      <div className="mt-4 grid grid-cols-12 justify-center gap-10">
        <div className="col-span-6">
          <div className="grid grid-rows-2">
            <div className="row-span-1"></div>
            <div className="row-span-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              nisi saepe quod illo eum veniam, provident amet debitis dolor
              numquam recusandae. Voluptate accusamus ea temporibus nemo numquam
              laboriosam nisi.
            </div>
          </div>
        </div>
        <div className=" w-full  col-span-6 p-6 bg-white">
          <img
            src="Rectangle6.png"
            className="object-cover w-full h-[600px]"
            alt="rectangle"
          />
          <div>
            <Badge className="bg-pink mt-3">Beauty</Badge>
            <p className="text-lg font-semibold pt-2">
              Unveiling Beauty Secrets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
