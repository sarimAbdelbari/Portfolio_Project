'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
import Image from 'next/image';
import { SectionLayout } from '@/components/section-layout';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export function ProjectsSection() {
  return (
    <SectionLayout
      id="projects"
      className="bg-secondary/20"
      title="Featured Projects"
      description="Here are some of the projects I've worked on that showcase my skills and experience"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Globe className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}

const projects: Project[] = [
  {
    title: 'Document Management System',
    description: 'A hierarchical CMS for managing company documents with advanced permission controls and user management.',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1600&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/SarimAbdelbari',
  },
  {
    title: 'Service Provider Platform',
    description: 'A dashboard connecting clients with skilled workers, featuring real-time updates and booking management.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/SarimAbdelbari',
  },
  {
    title: 'Social Network Platform',
    description: 'A LinkedIn-inspired platform for connecting business owners, agency owners, and freelancers with potential clients.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop',
    technologies: ['MERN Stack', 'Socket.io', 'Redux'],
    github: 'https://github.com/SarimAbdelbari',
  },
];