import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllBlog } from "@/store/server/blog/queries";
import { ArrowRightFromLine } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogSearch = () => {
  const { search } = useParams();

  const { data, isPending } = useGetAllBlog({
    page: "",
    categoryId: "",
    search,
  });

  if (isPending) {
    return (
      <>
        {[1, 2, 3].map((cane) => (
          <div key={cane} className=" px-[1.5rem] md:px-[5rem] mt-5">
            <Skeleton className=" items-center grid grid-cols-12 bg-black/5 py-4 px-3">
              <div className=" md:col-span-5 col-span-12">
                <Skeleton className=" w-full h-[180px] bg-black/20" />
              </div>
              <div className=" px-9 md:col-span-7 col-span-12 mt-4 md:mt-0">
                <Skeleton className="  bg-zinc-300 w-full h-4" />
                <Skeleton className=" mt-4  bg-zinc-300 w-full h-4" />
                <div className=" flex items-center justify-between mt-5">
                  <div className=" flex items-center space-x-1">
                    <Skeleton className=" w-[15px] bg-zinc-300 rounded-l-full h-4 " />
                    <Skeleton className=" w-[15px] bg-zinc-300 rounded-r-full h-4 " />
                  </div>
                  <div className=" flex items-center space-x-1">
                    <Skeleton className=" w-[15px] bg-zinc-300 rounded-l-full h-4 " />
                    <Skeleton className=" w-[15px] bg-zinc-300 rounded-r-full h-4 " />
                  </div>
                </div>
              </div>
            </Skeleton>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className=" p-[1.5px] min-h-[92vh] bg-black/5 md:px-[5rem]">
      {data?.body.length === 0 ? (
        <div className=" flex items-center justify-center h-[90vh]">
          <div>
            <p className=" font-bold text-xl">No search result</p>
            <div className=" mt-4 text-center">
              <Link to={"/blog"}>
                <Button size={"sm"}>Go To Blog</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {data?.body.map((blog) => (
            <div className=" mx-2 md:mx-0 bg-white py-4 px-3 my-4 items-center gap-5 grid grid-cols-12">
              <div className=" col-span-12 md:col-span-5">
                <Link to={`/blog/detail/${blog.id}`}>
                  <img
                    src={blog.image}
                    className=" w-full h-[180px] object-cover object-top"
                    alt={blog.title}
                  />
                </Link>
              </div>
              <div className=" px-5 col-span-12 md:col-span-7">
                <h3 className=" text-2xl">{blog.title}</h3>
                <div className=" mt-8 flex items-center justify-between">
                  <Badge className={colorfilter.get(blog.category)}>
                    {blog.category}
                  </Badge>
                  <p className=" text-sm ">{blog.created_blog}</p>
                </div>
                <Link to={`/blog/detail/${blog.id}`}>
                  <p className=" italic  mt-5 text-black/50 flex items-center">
                    Read <ArrowRightFromLine className=" ml-2" size={14} />
                  </p>
                </Link>
              </div>
            </div>
          ))}

          <div className=" text-center">
            <Link to={"/blog"}>
              <Button>Go To Blog</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogSearch;

const colorfilter = new Map([
  ["Beauty", "bg-pink"],
  ["Lifestyle", "bg-blue"],
  ["Fashion", "bg-yellow"],
]);
