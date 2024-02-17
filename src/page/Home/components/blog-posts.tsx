import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  return (
    <>
      <div className="  h-[1360px]  md:h-auto  py-5 bg-black/5  px-[1.5rem]  md:px-[5rem] ">
        <div className="pt-7 flex items-center  justify-between">
          <h2 className=" font-bold text-lg md:text-2xl">Blog Posts</h2>
          <Link to={'/blog'} className=" cursor-pointer flex items-center space-x-1">
            <span>View all posts</span>
            <MoveRight />
          </Link>
        </div>
        {/* posts */}
        <div className="my-4 mb-10 grid grid-cols-12 lg:h-[700px] items-start justify-center gap-8">
          <div className="md:col-span-6 col-span-12 ">
            <div className=" gap-6 flex flex-col">
              <div className=" p-5 bg-white  lg:h-[345px]">
                <img
                  src="Rectangle7.jpg"
                  className=" w-full object-cover h-[240px]"
                  alt="rectangle"
                />
                <div>
                  <div className="  py-3 flex items-center justify-between">
                    <Badge className=" hover:bg-yellow bg-yellow">
                      fashion
                    </Badge>
                    <p className=" font-thin text-sm">6 Dec 2023</p>
                  </div>
                  <p className=" text-lg font-semibold">
                    12 Style essentials that make it easy to get dressed
                  </p>
                </div>
              </div>
              <div className=" md:hidden lg:grid grid grid-cols-12 gap-5 bg-black/5  h-[340px] ">
                <div className=" col-span-12 md:col-span-6 bg-white p-5 ">
                  <img
                    src="Rectangle2.jpg"
                    className=" w-full object-cover"
                    alt="rectangle"
                  />
                  <div>
                    <div className="  py-2 flex items-center justify-between">
                      <Badge className=" hover:bg-yellow bg-yellow">
                        fashion
                      </Badge>
                      <p className=" font-thin text-sm">6 Dec 2023</p>
                    </div>
                    <p className=" text-lg font-semibold">
                      The Key Spring/Summer 2024 Trends To Know Now
                    </p>
                  </div>
                </div>
                <div className=" col-span-12 md:col-span-6 bg-white p-5 ">
                  <img
                    src="Rectangle3.png"
                    className=" w-full object-cover"
                    alt="rectangle"
                  />
                  <div>
                    <div className="  py-3 flex items-center justify-between">
                      <Badge className=" hover:bg-blue bg-blue">
                        Life style
                      </Badge>
                      <p className=" font-thin text-sm">6 Dec 2023</p>
                    </div>
                    <p className=" text-lg font-semibold">
                      A Woman's lifestyle journal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full col-span-12 hidden md:h-[380px] lg:h-auto  md:block md:col-span-6 p-6 bg-white">
            <img
              src="Rectangle6.png"
              className="object-cover w-full h-[240px] lg:h-[600px]"
              alt="rectangle"
            />
            <div>
              <Badge className="bg-pink hover:bg-pink mt-3">Beauty</Badge>
              <p className="text-lg font-semibold pt-2">
                Unveiling Beauty Secrets
              </p>
            </div>
          </div>
        </div>

        {/* my */}
      </div>
      <div className=" mt-10 px-[1.5rem]  md:px-[5rem] md:mt-32 lg:mt-52 mb-24 md:mb-40 grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-6 ">
          <h2 className=" text-2xl font-bold md:text-4xl">
            Welcome, I’m Caroline
          </h2>
          <p className="  mt-5 pt-5 text-lg text-black/80">
            My name is Carolina, and I'm delighted to invite you into the
            captivating chapters of my lifestyle journey. Here, within the pages
            of my blog, you'll discover a harmonious blend of beauty, fashion,
            wellness, and the art of mindful living. Join me as we navigate the
            vibrant realms of curated fashion, where personal style meets
            expression.
          </p>
          <p className="  mt-5 text-lg text-black/80">
            Unveil the secrets of my wellness rituals, each designed to embrace
            a holistic approach to beauty from the inside out. Together, let's
            explore the soulful art of mindful living, where every moment
            becomes an opportunity to dance with style, embrace grace, and
            uncover the enchantment in the ordinary.
          </p>
          <p className="  mt-5 text-lg text-black/80">
            These pages are not just a blog but a sanctuary for those seeking
            inspiration for a life well-lived, adorned with beauty, curated
            fashion, and the essence of mindful elegance. I'm thrilled to share
            this journey with you
          </p>
        </div>
        <div className="  md:hidden hidden lg:block relative  md:h-auto col-span-12 md:col-span-6 ">
          <img
            src="pf1.png"
            className=" absolute -bottom-10  h-[140px] w-[140px] left-10 md:w-[240px] md:h-[240px] md:left-32 z-50"
            alt="rectangle"
          />
          <img
            src="Rectangle5.png"
            className=" absolute h-[180px] md:h-auto top-28 left-6  md:left-24 md:top-5 z-10"
            alt="rectangle"
          />
          <img
            src="Rectangle4.png"
            className=" absolute h-[260px] md:h-auto right-12 bottom-14 md:right-8 md:-bottom-10 z-30"
            alt="rectangle"
          />
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
