
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-tkdev-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-tkdev-800 mb-6">
            Building Software That <span className="text-tkdev-600">Matters</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            TKDevOrg is a Software Organization to Creating Impactful Applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-tkdev-600 hover:bg-tkdev-700">
              <Link to="/projects">
                Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-tkdev-600 text-tkdev-600 hover:bg-tkdev-50">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-tkdev-800 mb-12">
            We Can Build Any Application
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-tkdev-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="text-tkdev-600" />
              </div>
              <h3 className="text-xl font-semibold text-tkdev-800 mb-2">
                Custom Software Development
              </h3>
              <p className="text-gray-600">
              Custom Solutions Designed Precisely for your Unique Needs and Goals
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-tkdev-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-tkdev-600" />
              </div>
              <h3 className="text-xl font-semibold text-tkdev-800 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Our diverse team brings together expertise across various domains to deliver exceptional results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-tkdev-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="text-tkdev-600" />
              </div>
              <h3 className="text-xl font-semibold text-tkdev-800 mb-2">
                Support & Consultation
              </h3>
              <p className="text-gray-600">
                We provide ongoing support and expert guidance to ensure the success of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tkdev-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to turn your vision into reality. Our team is ready to help.
          </p>
          <Button asChild size="lg" className="bg-white text-tkdev-800 hover:bg-gray-100">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
