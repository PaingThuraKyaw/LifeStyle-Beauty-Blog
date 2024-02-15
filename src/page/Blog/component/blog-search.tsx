import { Badge } from "@/components/ui/badge";
import { useGetAllBlog } from "@/store/server/blog/queries";
import { useParams } from "react-router-dom";

const BlogSearch = () => {
  const { search } = useParams();

  const { data } = useGetAllBlog({
    page: "",
    categoryId: "",
    search,
  });

  return (
    <div className=" p-[1.5px] min-h-[90vh] bg-black/5 md:px-[5rem]">
      {data?.body.length === 0 ? (
        <div className=" flex items-center justify-center h-[90vh]">
          <p className=" font-bold text-xl">No search result</p>
        </div>
      ) : (
        <>
          {data?.body.map((blog) => (
            <div className="  bg-white py-4 px-3 my-4 items-center gap-5 grid grid-cols-12">
              <div className=" col-span-5">
                <img
                  src={blog.image}
                  className=" w-full h-[180px] object-cover object-top"
                  alt={blog.title}
                />
              </div>
              <div className=" px-5 col-span-7">
                <h3 className=" text-2xl">{blog.title}</h3>
                <div className=" mt-8 flex items-center justify-between">
                  <Badge>{blog.category}</Badge>
                  <p className=" text-sm ">{blog.created_blog}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BlogSearch;
