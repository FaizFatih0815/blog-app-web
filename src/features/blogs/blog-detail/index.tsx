"use client";

import Loading from "@/components/Loading";
import NoData from "@/components/NoData";
import useGetBlogBySlug from "./api/useGetBlogBySlug";
import BlogDetailBody from "./components/BlogDetailBody";
import BlogDetailHeader from "./components/BlogDetailHeader";

interface BlogDetailPageProps {
  slug: string;
}

const BlogDetailPage = ({ slug }: BlogDetailPageProps) => {
  const { data: blog, isPending } = useGetBlogBySlug(slug);

  if (isPending) {
    return <Loading />;
  }

  if (!blog) {
    return <NoData />;
  }

  return (
    <main className="container mx-auto mb-20 px-10">
      <BlogDetailHeader blog={blog} />
      <BlogDetailBody blog={blog} />
    </main>
  );
};

export default BlogDetailPage;
