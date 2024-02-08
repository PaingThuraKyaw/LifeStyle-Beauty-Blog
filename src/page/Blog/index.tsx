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

const Blog = () => {
  const category = useCategories();
  const { data } = useGetAllBlog(2);

  if (category.isPending) {
    return <Loader />;
  }

  console.log(data);

  return (
    <div className=" px-[1.5rem] mt-5  md:px-[5rem]">
      <div className=" flex items-center justify-between">
        <h2 className=" text-2xl font-bold">Blog Post</h2>
        <div className=" w-[200px]">
          <Select defaultValue="0">
            <SelectTrigger className=" text-center bg-black/5">
              <SelectValue
                defaultValue={"ALL"}
                placeholder="Select your category"
              />
            </SelectTrigger>
            <SelectContent defaultValue={"ALL"}>
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
    </div>
  );
};

export default Blog;
