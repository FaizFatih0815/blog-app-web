import Markdown from "@/components/Markdown";
import { Blog } from "@/types/blog";

interface BlogDetailBodyProps {
  blog: Blog;
}

const BlogDetailBody = ({ blog }: BlogDetailBodyProps) => {
  return (
    <section className="mt-4 space-y-2">
      <Markdown content={blog.content} />
    </section>
  );
};

export default BlogDetailBody;
