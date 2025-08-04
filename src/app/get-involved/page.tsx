'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState('membership');

  const handleMembershipApply = (programType: string) => {
    // Navigate to contact page with membership inquiry
    window.location.href = `/contact?inquiry=membership&type=${programType}`;
  };

  const handleVolunteerApply = (position: string) => {
    // Navigate to contact page with volunteer inquiry
    window.location.href = `/contact?inquiry=volunteer&position=${position}`;
  };

  const handleInternshipApply = (program: string) => {
    // Navigate to contact page with internship inquiry
    window.location.href = `/contact?inquiry=internship&program=${program}`;
  };

  const handleEventRegister = (event: string) => {
    // Navigate to contact page with event registration
    window.location.href = `/contact?inquiry=event&event=${event}`;
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  const handleDownloadForm = () => {
    // This would typically download a PDF form
    alert('Application form download feature will be implemented soon. Please contact us directly.');
  };

  const membershipPrograms = [
    {
      id: 1,
      title: 'Community Member',
      description: 'For fisherfolk and peasants who want to join our network',
      benefits: [
        'Access to training and capacity building programs',
        'Legal support and rights advocacy',
        'Participation in community development initiatives',
        'Networking opportunities with other members'
      ],
      requirements: [
        'Must be a fisherfolk or peasant',
        'Commitment to community development',
        'Willingness to participate in PFF activities'
      ],
      fee: 'Free',
      duration: 'Lifetime'
    },
    {
      id: 2,
      title: 'Supporting Member',
      description: 'For individuals who want to support our mission',
      benefits: [
        'Regular updates on PFF activities and impact',
        'Invitation to special events and workshops',
        'Opportunity to volunteer in various programs',
        'Recognition in PFF publications'
      ],
      requirements: [
        'Support for fisherfolk and peasant rights',
        'Commitment to social justice',
        'Regular contribution to PFF initiatives'
      ],
      fee: 'Variable',
      duration: 'Annual'
    },
    {
      id: 3,
      title: 'Organizational Partner',
      description: 'For organizations working in similar areas',
      benefits: [
        'Collaboration opportunities on joint projects',
        'Shared resources and expertise',
        'Joint advocacy and campaigning',
        'Capacity building support'
      ],
      requirements: [
        'Alignment with PFF mission and values',
        'Active engagement in community development',
        'Commitment to sustainable development goals'
      ],
      fee: 'Partnership Agreement',
      duration: 'Project-based'
    }
  ];

  const volunteerOpportunities = [
    {
      id: 1,
      title: 'Community Outreach Volunteer',
      description: 'Help us reach and connect with fisherfolk communities',
      location: 'Karachi and surrounding areas',
      duration: '3-6 months',
      commitment: '10-15 hours/week',
      skills: ['Communication', 'Community engagement', 'Local language proficiency'],
      responsibilities: [
        'Conduct community surveys and assessments',
        'Organize community meetings and workshops',
        'Assist in documentation and reporting',
        'Support awareness campaigns'
      ]
    },
    {
      id: 2,
      title: 'Legal Support Volunteer',
      description: 'Provide legal assistance and rights advocacy support',
      location: 'Karachi',
      duration: '6-12 months',
      commitment: '15-20 hours/week',
      skills: ['Legal knowledge', 'Research skills', 'Documentation'],
      responsibilities: [
        'Research legal cases and precedents',
        'Assist in document preparation',
        'Support legal awareness programs',
        'Help with case documentation'
      ]
    },
    {
      id: 3,
      title: 'Environmental Justice Volunteer',
      description: 'Work on climate change and environmental protection initiatives',
      location: 'Coastal areas of Karachi',
      duration: '3-12 months',
      commitment: '10-20 hours/week',
      skills: ['Environmental awareness', 'Project management', 'Data collection'],
      responsibilities: [
        'Participate in coastal protection activities',
        'Conduct environmental assessments',
        'Support climate change awareness programs',
        'Assist in mangrove restoration projects'
      ]
    },
    {
      id: 4,
      title: 'Media and Communications Volunteer',
      description: 'Help with documentation, photography, and social media',
      location: 'Karachi (with field visits)',
      duration: '3-6 months',
      commitment: '10-15 hours/week',
      skills: ['Photography', 'Social media', 'Content creation', 'Storytelling'],
      responsibilities: [
        'Document PFF activities through photos and videos',
        'Create content for social media platforms',
        'Assist in newsletter and report preparation',
        'Help with event documentation'
      ]
    }
  ];

  const internshipPrograms = [
    {
      id: 1,
      title: 'Community Development Internship',
      description: 'Learn about community organizing and development work',
      duration: '3-6 months',
      stipend: 'Available based on performance',
      requirements: [
        'Currently enrolled in or completed degree in Social Sciences, Development Studies, or related field',
        'Strong interest in community development',
        'Good communication skills in Urdu and English',
        'Willingness to work in field conditions'
      ],
      learningOutcomes: [
        'Understanding of fisherfolk communities and their challenges',
        'Skills in community mobilization and organization',
        'Experience in project planning and implementation',
        'Knowledge of rights-based approaches to development'
      ]
    },
    {
      id: 2,
      title: 'Research and Policy Internship',
      description: 'Contribute to research on fisherfolk rights and policy advocacy',
      duration: '3-6 months',
      stipend: 'Available based on performance',
      requirements: [
        'Currently enrolled in or completed degree in Law, Public Policy, or related field',
        'Strong research and analytical skills',
        'Interest in human rights and policy advocacy',
        'Proficiency in English and Urdu'
      ],
      learningOutcomes: [
        'Understanding of legal frameworks affecting fisherfolk',
        'Skills in policy research and analysis',
        'Experience in advocacy and campaigning',
        'Knowledge of international human rights standards'
      ]
    },
    {
      id: 3,
      title: 'Environmental Justice Internship',
      description: 'Work on climate change and environmental protection projects',
      duration: '3-6 months',
      stipend: 'Available based on performance',
      requirements: [
        'Currently enrolled in or completed degree in Environmental Science, Geography, or related field',
        'Interest in climate change and environmental justice',
        'Fieldwork experience preferred',
        'Good physical fitness for field work'
      ],
      learningOutcomes: [
        'Understanding of climate change impacts on coastal communities',
        'Skills in environmental assessment and monitoring',
        'Experience in community-based environmental projects',
        'Knowledge of sustainable development practices'
      ]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Leadership Training',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'PFF Office, Korangi, Karachi',
      type: 'Workshop',
      description: 'A comprehensive training session for community leaders on advocacy and mobilization techniques.',
      registration: 'Required',
      capacity: 25
    },
    {
      id: 2,
      title: 'Climate Change Awareness Seminar',
      date: '2024-02-20',
      time: '2:00 PM - 6:00 PM',
      location: 'Community Center, Ibrahim Hydri',
      type: 'Seminar',
      description: 'Educational seminar on climate change impacts and adaptation strategies for coastal communities.',
      registration: 'Open',
      capacity: 50
    },
    {
      id: 3,
      title: 'Legal Rights Workshop',
      date: '2024-02-25',
      time: '11:00 AM - 3:00 PM',
      location: 'PFF Office, Korangi, Karachi',
      type: 'Workshop',
      description: 'Workshop on legal rights of fisherfolk and how to access legal support.',
      registration: 'Required',
      capacity: 30
    },
    {
      id: 4,
      title: 'Youth Empowerment Program',
      date: '2024-03-01',
      time: '9:00 AM - 5:00 PM',
      location: 'Youth Center, Malwala',
      type: 'Program',
      description: 'Day-long program focused on youth leadership and community engagement.',
      registration: 'Required',
      capacity: 40
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us in our mission to empower fisherfolk communities. There are many ways you can contribute to creating positive change.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'membership'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Membership
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'volunteer'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Volunteer
            </button>
            <button
              onClick={() => setActiveTab('internship')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'internship'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'events'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Membership Programs */}
          {activeTab === 'membership' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Membership Programs
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {membershipPrograms.map((program) => (
                  <Card key={program.id} className="p-8 hover:shadow-xl transition-shadow">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {program.description}
                      </p>
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block font-medium">
                        {program.fee}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                                         <Button 
                       onClick={() => handleMembershipApply(program.title.toLowerCase().replace(' ', '-'))}
                       className="w-full"
                     >
                       Apply for Membership
                     </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Volunteer Opportunities */}
          {activeTab === 'volunteer' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Volunteer Opportunities
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {volunteerOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="p-8 hover:shadow-xl transition-shadow">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {opportunity.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {opportunity.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {opportunity.location}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {opportunity.duration}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {opportunity.commitment}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {opportunity.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                                         <Button 
                       onClick={() => handleVolunteerApply(opportunity.title.toLowerCase().replace(' ', '-'))}
                       className="w-full"
                     >
                       Apply to Volunteer
                     </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Internship Programs */}
          {activeTab === 'internship' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Internship & Fellowship Programs
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {internshipPrograms.map((internship) => (
                  <Card key={internship.id} className="p-8 hover:shadow-xl transition-shadow">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {internship.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {internship.description}
                      </p>
                      <div className="flex justify-center gap-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {internship.duration}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {internship.stipend}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {internship.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes:</h4>
                      <ul className="space-y-2">
                        {internship.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                                         <Button 
                       onClick={() => handleInternshipApply(internship.title.toLowerCase().replace(' ', '-'))}
                       className="w-full"
                     >
                       Apply for Internship
                     </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Events Calendar */}
          {activeTab === 'events' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Events & Workshops Calendar
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Seminar' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600">{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-gray-600">Capacity: {event.capacity} participants</span>
                      </div>
                    </div>

                                         <div className="flex gap-3">
                       <Button 
                         onClick={() => handleEventRegister(event.title.toLowerCase().replace(' ', '-'))}
                         className="flex-1"
                       >
                         {event.registration === 'Required' ? 'Register Now' : 'Join Event'}
                       </Button>
                       <Button 
                         onClick={() => handleEventRegister(event.title.toLowerCase().replace(' ', '-'))}
                         variant="outline" 
                         className="flex-1"
                       >
                         Learn More
                       </Button>
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
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and help us create a more just and equitable society for fisherfolk communities.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
               onClick={handleContactUs}
               size="lg" 
               className="bg-white text-blue-900 hover:bg-gray-100"
             >
               Contact Us Today
             </Button>
             <Button 
               onClick={handleDownloadForm}
               size="lg" 
               variant="outline" 
               className="border-white text-white hover:bg-white hover:text-blue-900"
             >
               Download Application Form
             </Button>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 