import Loader from "@/components/Loader";
import { Badge } from "@/components/ui/badge";
import { useBlogById, useGetAllBlog } from "@/store/server/blog/queries";
import { Link, useParams } from "react-router-dom";
import { colorfilter } from "./blog-card";

const BlogDetail = () => {
  const { id } = useParams();

  const { data, isPending } = useBlogById(Number(id));

  const relatedBlog = useGetAllBlog({
    page: "",
    search: "",
    categoryId: data?.category_id.toString(),
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className=" bg-black/5 px-[1.5rem] md:px-[5rem] pt-16">
      <div className=" gap-7 grid grid-cols-12">
        <div className=" col-span-12 md:col-span-9">
          <h2 className=" text-2xl font-bold">{data?.title}</h2>
          <div className=" mt-4 mb-5 flex items-center justify-between">
            <Badge className={colorfilter.get(data?.category || "")}>
              {data?.category}
            </Badge>
            <p>{data?.created_blog}</p>
          </div>
          <div>
            <img
              src={data?.image}
              className=" w-full h-[400px] object-cover object-top"
              alt={data?.title}
            />
            <div>
              <p className=" text-zinc-700 text-justify mt-5 tracking-wide ">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:border-0 md:pb-0 border-b-2 border-black/30 pb-10 md:col-span-3">
          <h4 className=" font-bold text-base">Related Post</h4>
          {relatedBlog.data?.body.slice(0, 2).map((blog) => (
            <div className=" mt-4 p-4 bg-white">
              <Link to={`/blog/detail/${blog.id}`}>
                <img
                  src={blog.image}
                  className=" w-full h-[200px] object-cover"
                  alt={blog.title}
                />
              </Link>
              <div className=" mt-4">
                <div className=" flex justify-between items-center">
                  <Badge
                    className={`${colorfilter.get(
                      blog.category
                    )} hover:${colorfilter.get(blog.category)}`}
                  >
                    {blog.category}
                  </Badge>
                  <span className=" text-sm text-slate-700">
                    {blog.created_blog}
                  </span>
                </div>
                <div className=" ">
                  <h2 className=" mt-2 text-base ">
                    {blog.title.length < 60
                      ? blog.title.slice(0, 60)
                      : blog.title.slice(0, 60) + "..."}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" py-5"></div>
    </div>
  );
};

export default BlogDetail;
