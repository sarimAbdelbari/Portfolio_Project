import { blogPosts } from '@/lib/blog-data';
import { PostCard } from '@/components/blog/post-card';

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="space-y-4 text-center mb-16">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring web development concepts, best practices, and modern technologies
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}