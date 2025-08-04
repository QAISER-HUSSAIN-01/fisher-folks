'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { placeholderImages } from '@/lib/utils/placeholders';

export default function AboutPage() {
  const values = [
    {
      title: 'Social Justice',
      description: 'We believe in creating a society where every individual has equal rights and opportunities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Community Empowerment',
      description: 'We empower communities to take control of their own development and future.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Environmental Sustainability',
      description: 'We advocate for sustainable practices that protect our natural resources and coastal ecosystems.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Transparency & Accountability',
      description: 'We maintain the highest standards of transparency and accountability in all our operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const leadership = [
    {
      name: 'Muhammad Ali Shah',
      position: 'Chairperson',
      description: 'Leading PFF with over 20 years of experience in fisherfolk rights advocacy.',
      image: placeholderImages.profile1,
    },
    {
      name: 'Fatima Hassan',
      position: 'Executive Director',
      description: 'Overseeing day-to-day operations and strategic planning for community development.',
      image: placeholderImages.profile2,
    },
    {
      name: 'Ahmed Khan',
      position: 'Program Manager',
      description: 'Managing field operations and coordinating with fisherfolk communities across Pakistan.',
      image: placeholderImages.profile3,
    },
  ];

  const partners = [
    {
      name: 'World Wildlife Fund (WWF)',
      description: 'Collaborating on marine conservation and sustainable fishing practices.',
      logo: placeholderImages.small,
    },
    {
      name: 'Oxfam Pakistan',
      description: 'Working together on poverty alleviation and community development programs.',
      logo: placeholderImages.small,
    },
    {
      name: 'Pakistan Fisherfolk Coalition',
      description: 'National network of fisherfolk organizations advocating for collective rights.',
      logo: placeholderImages.small,
    },
    {
      name: 'International Union for Conservation of Nature (IUCN)',
      description: 'Partnering on environmental protection and climate change adaptation.',
      logo: placeholderImages.small,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Pakistan Fisherfolk Forum
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Empowering fisherfolk communities through advocacy, education, and sustainable development for over 25 years
          </p>
        </div>
      </section>

      {/* History & Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our History & Background
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998, the Pakistan Fisherfolk Forum (PFF) emerged from the grassroots movement of fisherfolk communities who were facing increasing challenges to their livelihoods and traditional way of life.
                </p>
                <p>
                  What started as a small group of concerned fishermen has grown into one of Pakistan's most influential organizations advocating for the rights of fisherfolk and coastal communities.
                </p>
                <p>
                  Over the past 25+ years, PFF has expanded its reach to over 50 villages across Pakistan's coastal regions, working tirelessly to ensure that the voices of fisherfolk are heard in policy-making processes.
                </p>
                <p>
                  Our organization has been at the forefront of numerous successful campaigns, from securing fishing rights to advocating for environmental protection and climate change adaptation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg shadow-xl"></div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vision, Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <Card className="p-8 hover shadow-lg">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At the Pakistan Fisherfolk Forum (PFF), our mission is to empower fisherfolk and peasants by advocating for their social, economic, cultural, and political rights. We strive to ensure that their voices are heard in policy-making processes and that they have access to opportunities that enable them to live with dignity and purpose. Through relentless advocacy, strategic engagement, and community empowerment, we work towards creating a society that is inclusive, equitable, and just for all.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our vision is a future where every member of the fisherfolk and peasant communities can live with dignity and realize their full potential. We envision a society that is organized around principles of democracy, equity, social justice, and sustainable development. In this future, the rights of fisherfolk and peasants are respected, their contributions are valued, and they have access to opportunities that enable them to thrive.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership & Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who lead our organization and drive positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="text-center p-6 hover shadow-lg">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Collaborations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partners & Collaborations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our alliances span across various sectors and regions, bringing together diverse expertise and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 hover shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-medium">Logo</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Together, we can create a more just and sustainable future for fisherfolk communities across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
              Get Involved
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 