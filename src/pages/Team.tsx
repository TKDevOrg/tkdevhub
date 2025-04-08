import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Eugene Vincent',
    role: 'Co-Founder & Software Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFgqsId7vSMdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726194444193?e=1749081600&v=beta&t=yr_Xc8a3C-J2NQf3VfTsZ8XQs528uirFal1u2ki37r4',
    initials: 'EV',
    github: 'https://github.com/eugenevincent', 
    linkedin: 'https://www.linkedin.com/in/eugene-vincent-42472024b/', 
  },
  {
    name: 'Raja Balaji',
    role: 'Co-Founder & Software Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFjRg1v6RNkhg/profile-displayphoto-shrink_200_200/B56ZSNv6DCGoAc-/0/1737544934002?e=1749081600&v=beta&t=PZSwGF7i9QN5hKw1ujxvrsSZA60zkqp-8fP4e7NmjJE',
    initials: 'RB',
    github: 'https://github.com/rajabalaji', 
    linkedin: 'https://www.linkedin.com/in/rajabalaji/', 
  },
  {
    name: 'Maksatjan Jorayev',
    role: 'Software Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQE46pHjyCpstQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730052479397?e=1749081600&v=beta&t=xXt_VYz3dVCo8JaHSlMuzfU-VYrv9nAufT-04xaqodw',
    initials: 'MJ',
    github: 'https://github.com/maksatjanjorayev', 
    linkedin: 'https://www.linkedin.com/in/maksatjan-jorayev-6327b8261/', 
  },
<<<<<<< Updated upstream
  {
    name: 'Nesan Venkatesan',
    role: 'UX/UI Designer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFbcddUrvPqrw/profile-displayphoto-shrink_800_800/B56ZT_2peNGoAc-/0/1739459304053?e=1749081600&v=beta&t=jWs5K4VDcgy4kiUdyKxbJxQANJ4gRrIZHcrHws7qW4Q',
    initials: 'NV',
    github: 'https://github.com/nesanvenkatesan', 
    linkedin: 'https://www.linkedin.com/in/nesan-venkatesan/', 
  },
    {
    name: 'Sidhant Parashar',
    role: 'Product Manager',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEn7HL-sgUo_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714801230852?e=1749081600&v=beta&t=UaEpsv_75gI82C3uPUk_sxaVq2wXhnkr0dKqTWo8Y88',
    initials: 'SP',
    github: 'https://github.com/tushariyer', 
    linkedin: 'https://www.linkedin.com/in/sidhant-parashar-75321220b/', 
  },
=======
>>>>>>> Stashed changes
];

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