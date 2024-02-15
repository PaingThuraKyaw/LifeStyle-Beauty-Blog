import { Badge } from "@/components/ui/badge";
import { SelectedBlog } from "@/store/server/blog/type";

const BlogCard = ({ blog }: { blog: SelectedBlog }) => {
  console.log(blog);

  return (
    <div className=" p-4 bg-white">
      <img src={blog.image} className=" w-full h-full" alt={blog.title} />
      <div className=" mt-4">
        <div className=" flex justify-between items-center">
          <Badge className={colorfilter.get(blog.category)}>
            {blog.category}
          </Badge>
          <span className=" text-sm text-slate-700">{blog.created_blog}</span>
        </div>
        <div className=" h-[50px] ">
          <h2 className=" mt-2 text-base ">{blog.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

const colorfilter = new Map([
  ["Beauty", "bg-pink"],
  ["Lifestyle", "bg-blue"],
  ["Fashion", "bg-yellow"],
]);
