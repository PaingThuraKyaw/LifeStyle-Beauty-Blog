import Loader from "@/components/Loader";
import { Badge } from "@/components/ui/badge";
import { useBlogById } from "@/store/server/blog/queries";
import { useParams } from "react-router-dom";
import { colorfilter } from "./blog-card";

const BlogDetail = () => {
  const { id } = useParams();

  const { data, isPending } = useBlogById(Number(id));

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className=" px-[1.5rem] md:px-[5rem] mt-5">
      <div className=" grid grid-cols-12">
        <div className=" col-span-8">
          <h2 className=" text-2xl font-bold">{data?.title}</h2>
          <div className=" mt-4 mb-3 flex items-center justify-between">
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
              <p className=" text-justify mt-5 tracking-wide ">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
