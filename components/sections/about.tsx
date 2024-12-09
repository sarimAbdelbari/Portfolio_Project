'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { SectionLayout } from '@/components/section-layout';
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Wrench,
} from 'lucide-react';

export function AboutSection() {
  return (
    <SectionLayout
      id="about"
      className="bg-secondary/20"
      title="About Me"
      description="I'm a Full Stack Developer with a Bachelor's Degree in Computer Science, passionate about creating impactful tech solutions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}

const skills = [
  {
    title: 'Frontend Development',
    description:
      'Expertise in React.js, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS and Material UI.',
    icon: Layout,
  },
  {
    title: 'Backend Development',
    description:
      'Strong foundation in Node.js, Express.js, and RESTful API design with experience in various databases.',
    icon: Server,
  },
  {
    title: 'Database Management',
    description:
      'Proficient in both SQL and NoSQL databases, including MongoDB, MySQL, and Firebase.',
    icon: Database,
  },
  {
    title: 'Clean Code & Best Practices',
    description:
      'Advocate for clean code, design patterns, and object-oriented programming principles.',
    icon: Code2,
  },
  {
    title: 'Development Tools',
    description:
      'Experienced with Git, npm, yarn, Webpack, and various development tools and workflows.',
    icon: Wrench,
  },
  {
    title: 'Responsive Design',
    description:
      'Creating mobile-first, responsive web applications that work seamlessly across all devices.',
    icon: Smartphone,
  },
];