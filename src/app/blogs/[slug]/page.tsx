import BlogDetailPage from "@/features/blogs/blog-detail";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  return <BlogDetailPage slug={slug} />;
};

export default BlogDetail;
