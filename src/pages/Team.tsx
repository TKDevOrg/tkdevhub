import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Eugene Vincent',
    role: 'Co-Founder & Software Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFgqsId7vSMdw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726194444166?e=2147483647&v=beta&t=wwfO5w9owFt-dayRGoHgT31kxWTrgjFBiLkhHyPi_IU',
    initials: 'EV',
    linkedin: 'https://www.linkedin.com/in/eugene-vincent-42472024b/', 
  },
  {
    name: 'Raja Balaji',
    role: 'Co-Founder & Software Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQES0vbWO9PTnw/profile-displayphoto-shrink_800_800/B56ZY3BNF5H0Ac-/0/1744679785154?e=1755129600&v=beta&t=HOuvptpa5e-Z2AU48hsj8-r6SbVm5idERl_QC4nKQxY',
    initials: 'RB',
    linkedin: 'https://www.linkedin.com/in/rajabalaji/', 
  },
  {
    name: 'Maksatjan Jorayev',
    role: 'Software Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQE46pHjyCpstQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730052479397?e=1749081600&v=beta&t=xXt_VYz3dVCo8JaHSlMuzfU-VYrv9nAufT-04xaqodw',
    initials: 'MJ',
    linkedin: 'https://www.linkedin.com/in/maksatjan-jorayev-6327b8261/', 
  }
]

const Team = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tkdev-800 mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know Our Collaborative Team of Developers, Designers, and Visionaries, All Working Together to Build Exceptional Software
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