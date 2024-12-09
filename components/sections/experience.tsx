'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';
import { SectionLayout } from '@/components/section-layout';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  type: string;
  description: string;
  technologies: string[];
}

export function ExperienceSection() {
  return (
    <SectionLayout
      id="experience"
      title="Professional Experience"
      description="My journey in web development, from freelancing to full-time roles"
    >
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{experience.position}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                    <span>•</span>
                    <span>{experience.type}</span>
                  </div>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}

const experiences: Experience[] = [
  {
    company: 'Groupe Chiali',
    position: 'Full Stack Web Developer',
    period: '06/2024 – Present',
    location: 'Algeria',
    type: 'Full-time',
    description: 'Developing a Content Management System (CMS) called the "Pyramid of Documents," designed as a document library with structured and hierarchical access. Implementing group permissions to control access and editing rights across different document levels.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript'],
  },
  {
    company: 'ProductionSphere',
    position: 'Web Developer',
    period: '01/2024 – 03/2024',
    location: 'Lithuania',
    type: 'Remote',
    description: 'Worked on various projects including lead magnets, portfolio pages, and landing pages. Managed multiple projects simultaneously while ensuring timely delivery and client satisfaction.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'WordPress'],
  },
  {
    company: 'Jar Bricola',
    position: 'Freelance Web Developer',
    period: '07/2023 – 09/2023',
    location: 'Algeria',
    type: 'Remote',
    description: 'Developed a dashboard for a startup connecting clients with skilled workers. Collaborated with a mobile developer to ensure seamless integration between web dashboard and mobile app.',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Recharts'],
  },
];