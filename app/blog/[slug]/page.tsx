import { PostHeader } from '@/components/blog/post-header';
import { PostContent } from '@/components/blog/post-content';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 max-w-4xl">
        <PostHeader
          title={post.title}
          date={post.date}
          readingTime={post.readingTime}
          tags={post.tags}
        />
        <PostContent content={post.content} />
      </div>
    </div>
  );
}