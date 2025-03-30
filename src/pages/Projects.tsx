
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'CarPickerByDev',
    description: 'CarPicker Tool for Car Enthuasists and General Population',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
  }
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tkdev-800 mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of the impactful software applications we've built to address real-world challenges.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-tkdev-800">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-tkdev-50 text-tkdev-700 border-tkdev-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-tkdev-600 text-tkdev-600 hover:bg-tkdev-50">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button size="sm" className="bg-tkdev-600 hover:bg-tkdev-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
