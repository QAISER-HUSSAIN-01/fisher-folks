'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function WorkPage() {
  const workAreas = [
    {
      title: 'Community Development',
      subtitle: 'Training & Capacity Building',
      description: 'We provide comprehensive training and capacity building programs to empower fisherfolk communities with the skills and knowledge they need to improve their livelihoods and advocate for their rights.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      projects: [
        'Skills Development Workshops',
        'Leadership Training Programs',
        'Women Empowerment Initiatives',
        'Youth Engagement Activities',
      ],
      color: 'blue',
    },
    {
      title: 'Livelihood & Rights Advocacy',
      subtitle: 'Legal Support & Economic Empowerment',
      description: 'We advocate for the economic rights of fisherfolk and provide legal support to ensure fair access to fishing grounds, fair pricing, and protection from exploitation.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      projects: [
        'Legal Rights Awareness',
        'Fishing Rights Advocacy',
        'Market Access Support',
        'Financial Literacy Programs',
      ],
      color: 'green',
    },
    {
      title: 'Climate Change & Environmental Justice',
      subtitle: 'Coastal Protection & Awareness',
      description: 'We work to protect coastal ecosystems and raise awareness about climate change impacts on fisherfolk communities, advocating for sustainable fishing practices.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
        </svg>
      ),
      projects: [
        'Coastal Ecosystem Protection',
        'Climate Change Adaptation',
        'Sustainable Fishing Practices',
        'Environmental Education',
      ],
      color: 'cyan',
    },
    {
      title: 'Disaster Response & Relief Efforts',
      subtitle: 'Emergency Support & Recovery',
      description: 'We provide immediate relief and long-term recovery support to fisherfolk communities affected by natural disasters, climate events, and other emergencies.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      projects: [
        'Emergency Relief Distribution',
        'Disaster Preparedness Training',
        'Community Recovery Support',
        'Infrastructure Rehabilitation',
      ],
      color: 'red',
    },
  ];

  const impactStats = [
    { number: '50+', label: 'Villages Reached' },
    { number: '5000+', label: 'Community Members' },
    { number: '100+', label: 'Training Programs' },
    { number: '25+', label: 'Years of Service' },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'cyan':
        return 'bg-cyan-100 text-cyan-600';
      case 'red':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Dedicated to empowering fisherfolk communities through comprehensive development programs and advocacy
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Areas of Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on four key areas to create lasting positive change in fisherfolk communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <Card key={index} className="p-8 hover shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClasses(area.color)}`}>
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      {area.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {area.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Projects:</h4>
                  <ul className="space-y-2">
                    {area.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-3 ${getColorClasses(area.color).replace('100', '400').replace('600', '400')}`}></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact from our work in fisherfolk communities across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover shadow-lg">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Women's Empowerment in Karachi
              </h3>
              <p className="text-gray-600 mb-4">
                Successfully trained 200 women in fish processing and marketing, increasing their household income by 40%.
              </p>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </Card>

            <Card className="p-6 hover shadow-lg">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Legal Rights Victory
              </h3>
              <p className="text-gray-600 mb-4">
                Secured fishing rights for 15 coastal communities, protecting their traditional livelihoods from corporate encroachment.
              </p>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </Card>

            <Card className="p-6 hover shadow-lg">
              <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Climate Adaptation Program
              </h3>
              <p className="text-gray-600 mb-4">
                Implemented sustainable fishing practices in 30 villages, reducing environmental impact while maintaining productivity.
              </p>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Support Our Work
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Your support helps us continue our vital work in empowering fisherfolk communities across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              Volunteer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 