'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/lib/blog-data';

interface PostCardProps {
  post: BlogPost;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Read more
            <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}