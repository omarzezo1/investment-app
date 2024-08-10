import { Link } from "react-router-dom";
import { Clock, User } from "../../images/svg";

const BlogCard = ({ blog }) => {
  return (
    <div className="pt-[230px] pb-5 px-5 rounded-xl relative">
      <img
        src={blog.blogImg}
        alt="blog-1"
        className="size-full rounded-xl absolute top-0 left-0 object-cover"
      />
      <div className="py-6 px-5 relative rounded-xl">
        <img
          src={blog.detailsCover}
          alt="blog-1"
          className="size-full rounded-lg absolute top-0 left-0"
        />
        <div className="relative flex flex-col gap-5">
          <div className="flex gap-2">
            {blog.tags?.map((tag, index) => (
              <p key={index}>
                <Link
                  className="text-base text-white hover:text-slate-yellow duration-300"
                  to={tag.link}
                >
                  {tag.tagName}
                </Link>
              </p>
            ))}
          </div>
          <h3>
            <Link
              className="text-2xl text-medium text-white hover:text-slate-yellow duration-300 font-syne"
              to={blog.path}
            >
              {blog.title}
            </Link>
          </h3>
          <ul className="flex gap-5 items-center">
            <li className="flex items-center gap-1">
              <img width={25} src={User} alt="user" />
              <h5 className="text-base font-medium text-white">{blog.author}</h5>
            </li>
            <li className="flex items-center gap-1">
              <img width={25} src={Clock} alt="user" />
              <h5 className="text-base font-medium text-white">{blog.date}</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
