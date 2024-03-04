import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useGetAllBlog } from "@/store/server/blog/queries";
import { useCategories } from "@/store/server/category/queries";
import { SelectValue } from "@radix-ui/react-select";
import BlogCard from "./component/blog-card";
import useFilter from "@/hook/use-filter";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const category = useCategories();
  const [filter, setFilter] = useFilter("");

  const { data, isPending, isLoading } = useGetAllBlog({
    page: "1",
    categoryId: filter.toString(),
    search: "",
  });

  if ((isPending && isLoading) || data === undefined) {
    return (
      <div className=" px-[1.5rem] pt-10 gap-5 mb-16 md:px-[5rem] grid grid-cols-12">
        {[1, 2, 3, 4, 5].map((id) => (
          <Skeleton
            key={id}
            className=" col-span-12 md:col-span-3 h-[300px] p-5 w-full bg-black/10  "
          >
            <Skeleton className=" h-[200px] w-full bg-zinc-400"></Skeleton>
            <div className=" flex items-center justify-between mt-5">
              <Skeleton className=" h-[20px] bg-zinc-400 w-[50px] rounded-full "></Skeleton>
              <Skeleton className=" h-[20px] bg-zinc-400 w-[50px] rounded-full "></Skeleton>
            </div>
          </Skeleton>
        ))}
      </div>
    );
  }

  return (
    <div className=" bg-black/5 px-[1.5rem] pt-10  md:px-[5rem]">
      <div className=" flex items-center justify-between">
        <h2 className=" text-2xl font-bold">Blog Post</h2>
        <div className=" w-[200px]">
          <Select
            onValueChange={(value) => setFilter(value)}
            defaultValue={filter || "all"}
          >
            <SelectTrigger className=" z-50 text-center bg-black/5">
              <SelectValue placeholder="Select your category" />
            </SelectTrigger>
            <SelectContent className=" z-50">
              <SelectGroup>
                <SelectItem
                  aria-label={"AlL"}
                  className=" font-bold"
                  value="all"
                  id="all"
                >
                  ALL
                </SelectItem>
                {category.data?.map((cat) => (
                  <SelectItem
                    id={filter}
                    key={cat.id}
                    className=" font-bold"
                    value={cat.id.toString()}
                  >
                    {cat.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Blog */}
      <div className="min-h-[80vh]">
        <div className=" mt-4 grid gap-4 grid-cols-12">
          {data?.body.map((blog) => (
            <div key={blog.id} className=" col-span-12 md:col-span-3">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
