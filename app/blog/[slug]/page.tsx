'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            className="mb-8"
            asChild
          >
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {post.content}
          </div>
        </motion.div>
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
    content: (
      <>
        <p className="lead">
          When building modern web applications, choosing the right data mapping strategy is crucial for your application's performance and maintainability.
        </p>

        <h2>What is ORM?</h2>
        <p>
          Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. Instead of writing raw SQL queries, you work with objects that represent your data.
        </p>

        <h2>What is ODM?</h2>
        <p>
          Object-Document Mapping (ODM) is similar to ORM but is specifically designed for document databases like MongoDB. It provides a way to model your application data and define schemas for documents.
        </p>

        <h2>Key Differences</h2>
        <ul>
          <li>Data Structure: ORMs work with structured, relational data, while ODMs work with flexible, document-based data</li>
          <li>Schema: ORMs require strict schemas, ODMs offer more flexibility</li>
          <li>Relationships: ORMs handle relationships through foreign keys, ODMs through document embedding or references</li>
        </ul>
      </>
    ),
  },
  // Add other blog posts with their content...
];