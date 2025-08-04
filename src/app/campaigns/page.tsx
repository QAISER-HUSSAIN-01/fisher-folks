'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function CampaignsPage() {
  const currentCampaigns = [
    {
      title: 'Fishing Rights Protection',
      description: 'Advocating for the protection of traditional fishing rights and access to fishing grounds.',
      progress: 75,
      supporters: 2500,
      category: 'Rights Advocacy',
    },
    {
      title: 'Climate Resilience Initiative',
      description: 'Building climate-resilient fishing communities through sustainable practices.',
      progress: 60,
      supporters: 1800,
      category: 'Environmental Justice',
    },
    {
      title: 'Women in Fisheries',
      description: 'Empowering women in fishing communities through skill development.',
      progress: 85,
      supporters: 3200,
      category: 'Community Development',
    },
  ];

  const pastCampaigns = [
    {
      title: 'Coastal Protection Victory',
      description: 'Successfully prevented industrial development that would have destroyed fishing habitats.',
      impact: 'Protected 50+ fishing villages',
      year: '2023',
      category: 'Environmental Justice',
    },
    {
      title: 'Market Access Reform',
      description: 'Secured fair market access and pricing for small-scale fisherfolk.',
      impact: 'Improved income for 3000+ families',
      year: '2022',
      category: 'Economic Rights',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Campaigns & Advocacy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Join our campaigns to protect fisherfolk rights and create positive change
          </p>
        </div>
      </section>

      {/* Current Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Current Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our ongoing campaigns and help us create lasting positive change
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentCampaigns.map((campaign, index) => (
              <Card key={index} className="p-6 hover shadow-lg">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {campaign.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {campaign.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">
                    {campaign.supporters.toLocaleString()} supporters
                  </span>
                </div>

                <Button className="w-full">
                  Join Campaign
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Campaigns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Past Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our successful campaigns and their lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastCampaigns.map((campaign, index) => (
              <Card key={index} className="p-6 hover shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {campaign.category}
                  </span>
                  <span className="text-sm text-gray-500">{campaign.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {campaign.description}
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-green-800 font-medium">
                    Impact: {campaign.impact}
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ways to Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways you can get involved and support our campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sign Petitions</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join our online petitions to support fisherfolk rights.
              </p>
              <Link href="/contact?inquiry=petition">
                <Button size="sm" className="w-full">Get Started</Button>
              </Link>
            </Card>

            <Card className="p-6 text-center hover shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join Events</h3>
              <p className="text-gray-600 text-sm mb-4">
                Participate in our awareness events and workshops.
              </p>
              <Link href="/get-involved">
                <Button size="sm" className="w-full">Get Started</Button>
              </Link>
            </Card>

            <Card className="p-6 text-center hover shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 text-sm mb-4">
                Contribute your time and skills to support our campaigns.
              </p>
              <Link href="/get-involved">
                <Button size="sm" className="w-full">Get Started</Button>
              </Link>
            </Card>

            <Card className="p-6 text-center hover shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Donate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Financial support helps us continue our advocacy work.
              </p>
              <Link href="/contact?inquiry=donation">
                <Button size="sm" className="w-full">Get Started</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Together, we can create lasting positive change for fisherfolk communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?inquiry=newsletter">
              <Button size="lg" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
                Sign Up for Updates
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 