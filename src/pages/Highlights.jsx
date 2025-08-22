import { useState } from 'react';
import { motion } from 'framer-motion';

import { 
  UserGroupIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  PlayIcon,
  DocumentTextIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const highlightSections = [
  {
    id: 'stakeholder',
    title: 'Stakeholder Engagements',
    icon: UserGroupIcon,
    description: 'Strategic partnerships and collaborations that drive business success',
    color: 'blue',
    items: [
      {
        title: 'Ghana Investment Promotion Centre Partnership',
        date: '2024-11-15',
        location: 'Accra, Ghana',
        description: 'Strategic partnership to facilitate foreign direct investment into Ghana\'s real estate and infrastructure sectors.',
        type: 'Partnership',
        impact: 'Facilitated $50M+ in investment opportunities',
        featured: true
      },
      {
        title: 'West Africa Mining Consortium Advisory',
        date: '2024-10-20',
        location: 'Kumasi, Ghana',
        description: 'Advisory role in establishing sustainable mining practices and stakeholder engagement frameworks.',
        type: 'Advisory',
        impact: '15+ mining companies engaged'
      },
      {
        title: 'Regional Infrastructure Development Forum',
        date: '2024-09-30',
        location: 'Lagos, Nigeria',
        description: 'Key stakeholder in regional infrastructure development initiatives across West Africa.',
        type: 'Forum',
        impact: 'Cross-border project coordination'
      },
      {
        title: 'Ghana Real Estate Developers Association',
        date: '2024-08-25',
        location: 'Accra, Ghana',
        description: 'Strategic engagement with leading developers to establish industry best practices.',
        type: 'Industry Engagement',
        impact: 'Policy recommendations adopted'
      }
    ]
  },
  {
    id: 'conferences',
    title: 'Conference Participation',
    icon: MicrophoneIcon,
    description: 'Thought leadership and expertise sharing at industry events',
    color: 'green',
    items: [
      {
        title: 'Africa Investment Summit 2024',
        date: '2024-12-05',
        location: 'London, UK',
        description: 'Keynote presentation on "Navigating Investment Opportunities in West Africa\'s Real Estate Market".',
        type: 'Keynote Speaker',
        audience: '500+ international investors',
        featured: true
      },
      {
        title: 'Ghana Economic Forum',
        date: '2024-11-18',
        location: 'Accra, Ghana',
        description: 'Panel discussion on regulatory frameworks and business environment improvements.',
        type: 'Panel Speaker',
        audience: '300+ business leaders'
      },
      {
        title: 'West Africa Infrastructure Conference',
        date: '2024-10-12',
        location: 'Abidjan, Côte d\'Ivoire',
        description: 'Presentation on project financing and stakeholder management in infrastructure development.',
        type: 'Speaker',
        audience: '250+ industry professionals'
      },
      {
        title: 'Real Estate Investment Conference',
        date: '2024-09-08',
        location: 'Accra, Ghana',
        description: 'Workshop on due diligence processes and risk management in real estate transactions.',
        type: 'Workshop Leader',
        audience: '150+ investors and developers'
      }
    ]
  },
  {
    id: 'media',
    title: 'Media Mentions & Announcements',
    icon: SpeakerWaveIcon,
    description: 'Recognition and coverage in leading business and industry publications',
    color: 'purple',
    items: [
      {
        title: 'Business & Financial Times Feature',
        date: '2024-12-10',
        publication: 'Business & Financial Times Ghana',
        description: '"Leading Consultancy Firm Drives Foreign Investment in Ghana\'s Real Estate Sector"',
        type: 'Feature Article',
        reach: '100K+ readers',
        featured: true
      },
      {
        title: 'African Business Magazine Interview',
        date: '2024-11-22',
        publication: 'African Business Magazine',
        description: 'Exclusive interview on emerging opportunities in West African infrastructure development.',
        type: 'Interview',
        reach: '250K+ readers'
      },
      {
        title: 'Ghana Investment Promotion Centre Announcement',
        date: '2024-11-01',
        publication: 'GIPC Official Release',
        description: 'Official announcement of strategic partnership for investment facilitation services.',
        type: 'Press Release',
        reach: 'Government & Industry Networks'
      },
      {
        title: 'Citi Business News Coverage',
        date: '2024-10-15',
        publication: 'Citi FM/TV',
        description: 'Live interview discussing Ghana\'s business environment and investment climate.',
        type: 'TV Interview',
        reach: '500K+ viewers'
      },
      {
        title: 'Modern Ghana Publication',
        date: '2024-09-20',
        publication: 'Modern Ghana',
        description: 'Article on regulatory compliance and best practices for foreign investors.',
        type: 'Opinion Piece',
        reach: '75K+ readers'
      }
    ]
  }
];

const colorVariants = {
  blue: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    button: 'bg-[#202962] hover:bg-[#1a2252]',
    active: 'bg-[#202962] text-white',
    gradient: 'from-[#202962] to-[#1a2252]'
  },
  green: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    button: 'bg-[#202962] hover:bg-[#1a2252]',
    active: 'bg-[#202962] text-white',
    gradient: 'from-[#202962] to-[#1a2252]'
  },
  purple: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    button: 'bg-[#202962] hover:bg-[#1a2252]',
    active: 'bg-[#202962] text-white',
    gradient: 'from-[#202962] to-[#1a2252]'
  }
};

export default function Highlights() {
  const [activeSection, setActiveSection] = useState('stakeholder');
  
  const activeData = highlightSections.find(section => section.id === activeSection);
  const colors = colorVariants[activeData.color];

  const stats = [
    { number: '50+', label: 'Strategic Partnerships', icon: UserGroupIcon },
    { number: '25+', label: 'Conference Presentations', icon: MicrophoneIcon },
    { number: '100+', label: 'Media Mentions', icon: SpeakerWaveIcon },
    { number: '15+', label: 'Industry Awards', icon: TrophyIcon }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-20 pt-24 sm:pt-28 md:pt-32'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <div className='inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6'>
              <StarIcon className='w-5 h-5 text-yellow-400' />
              <span className='text-sm font-medium'>Industry Recognition</span>
            </div>
            
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Our Highlights
            </h1>
            <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90'>
              Showcasing Nothelm's credibility, influence, and milestones in driving business success across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-[#202962]/10 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='w-8 h-8 text-[#202962]' />
                </div>
                <div className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-600 font-medium'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className='py-8 bg-gray-50 sticky top-0 z-30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            {highlightSections.map((section) => {
              const isActive = activeSection === section.id;
              const tabColors = colorVariants[section.color];
              
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isActive 
                      ? tabColors.active 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <section.icon className={`w-5 h-5 ${isActive ? 'text-white' : tabColors.text}`} />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Section Header */}
            <div className='text-center mb-12'>
              <div className={`inline-flex items-center space-x-3 ${colors.bg} ${colors.border} border-2 rounded-2xl p-6 mb-6`}>
                <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                  <activeData.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className='text-left'>
                  <h2 className='text-2xl font-bold text-gray-900'>{activeData.title}</h2>
                  <p className='text-gray-600'>{activeData.description}</p>
                </div>
              </div>
            </div>

            {/* Items Grid */}
            <div className='space-y-8'>
              {activeData.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    item.featured ? colors.border : 'border-gray-200'
                  }`}
                >
                  {item.featured && (
                    <div className={`bg-gradient-to-r ${colors.gradient} px-6 py-3`}>
                      <div className='flex items-center space-x-2 text-white'>
                        <StarIcon className='w-5 h-5' />
                        <span className='font-semibold'>Featured Highlight</span>
                      </div>
                    </div>
                  )}
                  
                  <div className='p-8'>
                    <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6'>
                      <div className='flex-1 mb-4 lg:mb-0 lg:mr-8'>
                        <div className='flex items-center space-x-4 mb-4'>
                          <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-full`}>
                            {item.type}
                          </span>
                          <div className='flex items-center space-x-2 text-sm text-gray-500'>
                            <CalendarIcon className='w-4 h-4' />
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                          {item.location && (
                            <div className='flex items-center space-x-2 text-sm text-gray-500'>
                              <MapPinIcon className='w-4 h-4' />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>
                        
                        <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                          {item.title}
                        </h3>
                        
                        <p className='text-gray-700 mb-4 leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                      
                      <div className='flex-shrink-0'>
                        {item.impact && (
                          <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 mb-4`}>
                            <div className='text-sm text-gray-600 mb-1'>Impact</div>
                            <div className={`font-semibold ${colors.text}`}>{item.impact}</div>
                          </div>
                        )}
                        
                        {item.audience && (
                          <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 mb-4`}>
                            <div className='text-sm text-gray-600 mb-1'>Audience</div>
                            <div className={`font-semibold ${colors.text}`}>{item.audience}</div>
                          </div>
                        )}
                        
                        {item.reach && (
                          <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 mb-4`}>
                            <div className='text-sm text-gray-600 mb-1'>Reach</div>
                            <div className={`font-semibold ${colors.text}`}>{item.reach}</div>
                          </div>
                        )}
                        
                        {item.publication && (
                          <div className={`${colors.bg} ${colors.border} border rounded-lg p-4`}>
                            <div className='text-sm text-gray-600 mb-1'>Publication</div>
                            <div className={`font-semibold ${colors.text}`}>{item.publication}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
                      <div className='flex items-center space-x-4'>
                        {activeSection === 'media' && (
                          <button className='flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors'>
                            <DocumentTextIcon className='w-4 h-4' />
                            <span className='text-sm'>Read Article</span>
                          </button>
                        )}
                        
                        {activeSection === 'conferences' && (
                          <button className='flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors'>
                            <PlayIcon className='w-4 h-4' />
                            <span className='text-sm'>Watch Recording</span>
                          </button>
                        )}
                      </div>
                      
                      <button className='flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors'>
                        <span className='text-sm'>Learn More</span>
                        <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}