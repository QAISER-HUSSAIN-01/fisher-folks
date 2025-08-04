'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { ImageVideoModal } from '@/components/ui/ImageVideoModal';
import { placeholderImages, getPlaceholderImage, getPlaceholderVideo } from '@/lib/utils/placeholders';
import { useState } from 'react';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('photos');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    type: 'image' | 'video';
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const photos = [
    {
      id: 1,
      title: 'Community Training Session',
      description: 'Fisherfolk participating in capacity building workshop',
      image: getPlaceholderImage('training'),
      category: 'Community Development',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Coastal Protection Initiative',
      description: 'Community members working on mangrove restoration',
      image: getPlaceholderImage('coastal'),
      category: 'Environmental Justice',
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'Women Empowerment Program',
      description: 'Female fisherfolk learning new skills',
      image: getPlaceholderImage('women'),
      category: 'Community Development',
      date: '2024-01-05'
    },
    {
      id: 4,
      title: 'Climate Change Awareness',
      description: 'Educational session on climate resilience',
      image: getPlaceholderImage('climate'),
      category: 'Environmental Justice',
      date: '2023-12-20'
    },
    {
      id: 5,
      title: 'Legal Rights Workshop',
      description: 'Community members learning about their rights',
      image: getPlaceholderImage('workshop'),
      category: 'Rights Advocacy',
      date: '2023-12-15'
    },
    {
      id: 6,
      title: 'Disaster Response Training',
      description: 'Emergency preparedness workshop',
      image: getPlaceholderImage('meeting'),
      category: 'Disaster Response',
      date: '2023-12-10'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'PFF Mission Overview',
      description: 'Learn about our work and impact in fisherfolk communities',
      thumbnail: placeholderImages.video1,
      videoUrl: getPlaceholderVideo('overview'),
      duration: '5:30',
      category: 'Overview'
    },
    {
      id: 2,
      title: 'Community Success Stories',
      description: 'Hear from community members about PFF&apos;s impact',
      thumbnail: placeholderImages.video2,
      videoUrl: getPlaceholderVideo('community'),
      duration: '8:45',
      category: 'Testimonials'
    },
    {
      id: 3,
      title: 'Climate Change Impact',
      description: 'Documentary on climate change effects on coastal communities',
      thumbnail: placeholderImages.video3,
      videoUrl: getPlaceholderVideo('climate'),
      duration: '12:20',
      category: 'Environmental Justice'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Fatima Bibi',
      role: 'Community Leader',
      location: 'Korangi, Karachi',
      image: placeholderImages.profile1,
      quote: 'PFF has transformed our community. Through their training programs, I learned new skills that helped me start my own small business. Now I can support my family better.',
      story: 'Fatima was a traditional fisherwoman who struggled to make ends meet. Through PFF\'s empowerment programs, she learned about her rights and gained new skills in community leadership.'
    },
    {
      id: 2,
      name: 'Ahmed Khan',
      role: 'Fisherman',
      location: 'Ibrahim Hydri, Karachi',
      image: placeholderImages.profile2,
      quote: 'The legal support from PFF helped us fight for our fishing rights. We now have better access to fishing grounds and fair compensation.',
      story: 'Ahmed and his community faced displacement from their traditional fishing areas. PFF provided legal assistance and advocacy that helped secure their fishing rights.'
    },
    {
      id: 3,
      name: 'Sara Ahmed',
      role: 'Youth Coordinator',
      location: 'Malwala, Karachi',
      image: placeholderImages.profile3,
      quote: 'As a young person, PFF gave me opportunities to learn and grow. I now work with other youth to create positive change in our community.',
      story: 'Sara joined PFF as a volunteer and through their youth programs, developed leadership skills. She now coordinates youth initiatives in her community.'
    }
  ];

  const handleImageClick = (photo: typeof photos[0]) => {
    setModalContent({
      type: 'image',
      src: photo.image,
      title: photo.title,
      description: photo.description
    });
    setModalOpen(true);
  };

  const handleVideoClick = (video: typeof videos[0]) => {
    setModalContent({
      type: 'video',
      src: video.videoUrl,
      title: video.title,
      description: video.description
    });
    setModalOpen(true);
  };

  const handleSubmitStory = () => {
    // Navigate to contact page or open contact form
    window.location.href = '/contact';
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gallery & Stories
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our visual journey through photos, videos, and powerful testimonies from the fisherfolk communities we serve.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'photos'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'testimonials'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Community Stories
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photos Section */}
          {activeTab === 'photos' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Photo Documentation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo) => (
                  <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {photo.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {photo.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {photo.description}
                      </p>
                                             <div className="flex justify-between items-center text-sm text-gray-500">
                         <span>{photo.date}</span>
                         <button 
                           onClick={() => handleImageClick(photo)}
                           className="text-blue-600 hover:text-blue-800 font-medium"
                         >
                           View Full Size
                         </button>
                       </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Videos Section */}
          {activeTab === 'videos' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Video Documentation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {video.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {video.description}
                      </p>
                                             <button 
                         onClick={() => handleVideoClick(video)}
                         className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                       >
                         Watch Video
                       </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Section */}
          {activeTab === 'testimonials' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Community Stories & Testimonials
              </h2>
              <div className="space-y-8">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/3">
                        <blockquote className="text-lg text-gray-700 italic mb-4 border-l-4 border-blue-600 pl-4">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Their Story:</h4>
                          <p className="text-gray-600">{testimonial.story}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your Story
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Are you a member of the fisherfolk community with a story to share? We&apos;d love to hear from you and feature your experiences in our gallery.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={handleSubmitStory}
               className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
             >
               Submit Your Story
             </button>
             <button 
               onClick={handleContactUs}
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
             >
               Contact Us
             </button>
           </div>
        </div>
      </section>

      <Footer />
      
      {/* Image/Video Modal */}
      {modalContent && (
        <ImageVideoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={modalContent.type}
          src={modalContent.src}
          title={modalContent.title}
          description={modalContent.description}
        />
      )}
    </div>
  );
} 