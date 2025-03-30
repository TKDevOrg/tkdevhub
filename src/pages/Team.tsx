import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Eugene Vincent',
    role: 'Co-Founder & Software Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    initials: 'EV',
    github: 'https://github.com/eugenevincent', // Add actual GitHub link
    linkedin: 'https://www.linkedin.com/in/eugenevincent/', // Add actual LinkedIn link
  },
  {
    name: 'Raja Balaji',
    role: 'Co-Founder & Software Engineer',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    initials: 'RB',
    github: 'https://github.com/rajabalaji', // Add actual GitHub link
    linkedin: 'https://www.linkedin.com/in/rajabalaji/', // Add actual LinkedIn link
  },
  {
    name: 'Maksatjan Jorayev',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    initials: 'MJ',
    github: 'https://github.com/maksatjanjorayev', // Add actual GitHub link
    linkedin: 'https://www.linkedin.com/in/maksatjanjorayev/', // Add actual LinkedIn link
  },
  {
    name: 'Nesan Venkatesan',
    role: 'UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    initials: 'NV',
    github: 'https://github.com/nesanvenkatesan', // Add actual GitHub link
    linkedin: 'https://www.linkedin.com/in/nesanvenkatesan/', // Add actual LinkedIn link
  },
    {
    name: 'Tushar Iyer',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    initials: 'TI',
    github: 'https://github.com/tushariyer', // Add actual GitHub link
    linkedin: 'https://www.linkedin.com/in/tushariyer/', // Add actual LinkedIn link
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tkdev-800 mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our talented team of developers, designers, and visionaries dedicated to building exceptional software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-tkdev-50 p-6 flex justify-center">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-tkdev-600 text-white text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-tkdev-800">{member.name}</h3>
                    <p className="text-tkdev-600 mb-4">{member.role}</p>

                    <div className="flex justify-center space-x-4">
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tkdev-600 transition-colors" aria-label={`GitHub profile of ${member.name}`}>
                          <Github size={20} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tkdev-600 transition-colors" aria-label={`LinkedIn profile of ${member.name}`}>
                          <Linkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;