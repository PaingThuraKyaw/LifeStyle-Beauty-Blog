import { Badge } from "@/components/ui/badge";
import { SelectedBlog } from "@/store/server/blog/type";
import { ArrowRightFromLine } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }: { blog: SelectedBlog }) => {
  console.log(blog);

  return (
    <div className=" p-4 bg-white">
      <Link to={`/blog/detail/${blog.id}`}>
        <img src={blog.image} className=" w-full h-full" alt={blog.title} />
      </Link>
      <div className=" mt-4">
        <div className=" flex justify-between items-center">
          <Badge className={colorfilter.get(blog.category)}>
            {blog.category}
          </Badge>
          <span className=" text-sm text-slate-700">{blog.created_blog}</span>
        </div>
        <div className="h-[60px] ">
          <h2 className=" mt-2 text-base ">
            {blog.title.length < 60
              ? blog.title.slice(0, 60)
              : blog.title.slice(0, 60) + "..."}
          </h2>
        </div>
        <Link to={`/blog/detail/${blog.id}`}>
          <p className=" italic justify-end flex items-center">
            Read <ArrowRightFromLine className=" ml-2" size={14} />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

// eslint-disable-next-line react-refresh/only-export-components
export const colorfilter = new Map([
  ["Beauty", "bg-pink"],
  ["Lifestyle", "bg-blue"],
  ["Fashion", "bg-yellow"],
]);
