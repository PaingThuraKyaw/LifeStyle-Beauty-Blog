import Loader from "@/components/Loader";
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
// import BlogCard from "./component/blog-card";
import useFilter from "@/hook/use-filter";

const Blog = () => {
  const category = useCategories();
  const [filter, setFilter] = useFilter("");

  const { data, isPending } = useGetAllBlog({
    page: "1",
    categoryId: filter.toString(),
    search: "",
  });

  if (category.isPending && isPending) {
    return <Loader />;
  }

  return (
    <div className=" px-[1.5rem] mt-10  md:px-[5rem]">
      <div className=" flex items-center justify-between">
        <h2 className=" text-2xl font-bold">Blog Post</h2>
        <div className=" w-[200px]">
          <Select
            onValueChange={(value) => setFilter(value)}
            defaultValue={"0"}
          >
            <SelectTrigger className=" text-center bg-black/5">
              <SelectValue placeholder="Select your category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {category.data?.map((cat) => (
                  <SelectItem
                    key={cat.id}
                    className=" font-bold"
                    value={cat.id.toString()}
                  >
                    {cat.title}
                  </SelectItem>
                ))}
                <SelectItem className=" font-bold" value="0">
                  ALL
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Blog */}
      {/* {
        data.map(blog => <BlogCard blog={blog} />)
      } */}
    </div>
  );
};

export default Blog;
