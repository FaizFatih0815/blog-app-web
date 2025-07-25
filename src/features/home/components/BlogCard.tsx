import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <Card>
        <CardHeader>
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-sm bg-green-100 font-bold text-green-600 capitalize"
            >
              {blog.category}
            </Badge>
            <p className="text-sm font-light capitalize">{blog.user?.name}</p>
          </div>
          <p className="text-lg font-semibold">{blog.title}</p>
          <p className="line-clamp-4">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
