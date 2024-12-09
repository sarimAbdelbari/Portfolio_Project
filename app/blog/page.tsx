'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-16"
        >
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring web development concepts, best practices, and modern technologies
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
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
          ))}
        </div>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    title: 'Understanding ORM vs ODM in Modern Web Development',
    slug: 'orm-vs-odm',
    excerpt: 'Explore the key differences between Object-Relational Mapping (ORM) and Object-Document Mapping (ODM), and when to use each in your projects.',
    date: '2024-03-15',
    readingTime: 8,
    tags: ['Database', 'Backend', 'Architecture'],
  },
  {
    title: 'IAM Permissions: A Comprehensive Guide',
    slug: 'iam-permissions-guide',
    excerpt: 'Deep dive into Identity and Access Management (IAM) permissions, best practices for security, and implementation strategies.',
    date: '2024-03-10',
    readingTime: 12,
    tags: ['Security', 'AWS', 'DevOps'],
  },
  {
    title: 'CMS vs DMS: Choosing the Right System',
    slug: 'cms-vs-dms',
    excerpt: 'Compare Content Management Systems (CMS) and Document Management Systems (DMS) to make informed decisions for your projects.',
    date: '2024-03-05',
    readingTime: 10,
    tags: ['CMS', 'DMS', 'Enterprise'],
  },
];