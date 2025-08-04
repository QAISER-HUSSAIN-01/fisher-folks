'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getPlaceholderImage } from '@/lib/utils/placeholders';
import Link from 'next/link';

export default function HomePage() {
  const currentProjects = [
    {
      title: 'Community Development Training',
      description: 'Providing capacity building and skill development programs for fisherfolk communities.',
      image: getPlaceholderImage('training'),
      category: 'Community Development',
    },
    {
      title: 'Climate Change Advocacy',
      description: 'Working towards environmental justice and coastal protection initiatives.',
      image: getPlaceholderImage('climate'),
      category: 'Environmental Justice',
    },
    {
      title: 'Legal Rights Support',
      description: 'Offering legal assistance and advocacy for fisherfolk rights and livelihoods.',
      image: getPlaceholderImage('advocacy'),
      category: 'Rights Advocacy',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Community Members' },
    { number: '50+', label: 'Villages Reached' },
    { number: '25+', label: 'Years of Service' },
    { number: '100+', label: 'Successful Campaigns' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering <span className="text-blue-300">Fisherfolk</span> Communities
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Advocating for <span className="text-cyan-300 font-semibold">social, economic, cultural, and political rights</span> of fisherfolk and peasants across Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Involved
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-20 left-10 hidden lg:block">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <Card className="p-8 hover shadow-lg">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At the Pakistan Fisherfolk Forum (PFF), our mission is to empower fisherfolk and peasants by advocating for their social, economic, cultural, and political rights. We strive to ensure that their voices are heard in policy-making processes and that they have access to opportunities that enable them to live with dignity and purpose.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 hover shadow-lg">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our vision is a future where every member of the fisherfolk and peasant communities can live with dignity and realize their full potential. We envision a society that is organized around principles of democracy, equity, social justice, and sustainable development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Making a difference in fisherfolk communities across Pakistan
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our ongoing initiatives that are making a real difference in fisherfolk communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover shadow-lg">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link href="/work">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/work">
              <Button size="lg" className="px-8">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your support helps us continue our work in advocating for fisherfolk rights and building stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?inquiry=donation">
              <Button size="lg" className="px-8 py-3">
                Donate Now
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="outline" size="lg" className="px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
                Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
