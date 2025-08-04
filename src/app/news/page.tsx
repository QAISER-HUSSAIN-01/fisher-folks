'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function NewsPage() {
  const blogArticles = [
    {
      title: 'Empowering Women in Coastal Communities',
      excerpt: 'How our training programs are helping women in fishing communities gain financial independence and leadership skills.',
      author: 'Fatima Hassan',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Community Development',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Climate Change Impact on Fisherfolk',
      excerpt: 'Understanding the challenges faced by fisherfolk communities due to climate change and our adaptation strategies.',
      author: 'Ahmed Khan',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Environmental Justice',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Legal Victory for Fishing Rights',
      excerpt: 'Celebrating our recent success in securing traditional fishing rights for coastal communities in Karachi.',
      author: 'Muhammad Ali Shah',
      date: 'March 5, 2024',
      readTime: '4 min read',
      category: 'Rights Advocacy',
      image: '/api/placeholder/400/250',
    },
  ];

  const pressReleases = [
    {
      title: 'PFF Calls for Immediate Action on Coastal Protection',
      excerpt: 'Pakistan Fisherfolk Forum urges government to implement stronger coastal protection measures.',
      date: 'March 12, 2024',
      category: 'Press Release',
    },
    {
      title: 'New Partnership Announced with WWF Pakistan',
      excerpt: 'PFF and WWF Pakistan join forces to promote sustainable fishing practices.',
      date: 'March 8, 2024',
      category: 'Partnership',
    },
    {
      title: 'Annual Report 2023 Released',
      excerpt: 'PFF releases comprehensive annual report highlighting achievements and challenges.',
      date: 'March 1, 2024',
      category: 'Report',
    },
  ];

  const publications = [
    {
      title: 'State of Fisherfolk Rights in Pakistan 2023',
      type: 'Annual Report',
      description: 'Comprehensive analysis of fisherfolk rights and challenges across Pakistan.',
      date: 'December 2023',
      downloadUrl: '#',
    },
    {
      title: 'Climate Adaptation Guide for Coastal Communities',
      type: 'Handbook',
      description: 'Practical guide for fisherfolk communities to adapt to climate change.',
      date: 'November 2023',
      downloadUrl: '#',
    },
    {
      title: 'Women Empowerment in Fisheries Sector',
      type: 'Research Paper',
      description: 'Study on the role of women in fisheries and strategies for empowerment.',
      date: 'October 2023',
      downloadUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Stay informed about our latest work, achievements, and the issues affecting fisherfolk communities
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest Blog Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and updates from our work in fisherfolk communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover shadow-lg">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {article.author}</span>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Press Releases & Media Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official statements and media coverage of our work and advocacy efforts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className="p-6 hover shadow-lg">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {release.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {release.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {release.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{release.date}</span>
                  <Button variant="outline" size="sm">
                    Read Full Release
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Publications & Reports
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research papers, reports, and publications on fisherfolk rights and community development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <Card key={index} className="p-6 hover shadow-lg">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {publication.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {publication.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{publication.date}</span>
                  <Button size="sm">
                    Download PDF
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest news, updates, and opportunities to get involved.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <Button size="lg" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 