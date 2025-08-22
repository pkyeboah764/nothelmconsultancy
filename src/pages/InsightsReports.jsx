import { useState } from 'react';
import { motion } from 'framer-motion';

import { 
  ArrowTrendingUpIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  EyeIcon,
  ArrowRightIcon,

} from '@heroicons/react/24/outline';

const sections = [
  {
    id: 'trends',
    title: 'Business Trends & Market Shifts',
    icon: ArrowTrendingUpIcon,
    description: 'Latest market developments and emerging business trends across African markets',
    color: 'blue',
    articles: [
      {
        title: 'Digital Transformation in West African Markets',
        date: '2024-12-15',
        readTime: '8 min read',
        category: 'Market Trends',
        excerpt: 'How digital adoption is reshaping business landscapes across Ghana, Nigeria, and Côte d\'Ivoire.',
        featured: true
      },
      {
        title: 'Foreign Investment Flows in 2024',
        date: '2024-12-10',
        readTime: '6 min read',
        category: 'Investment',
        excerpt: 'Analysis of foreign direct investment patterns and emerging opportunities.'
      },
      {
        title: 'Supply Chain Resilience in Africa',
        date: '2024-12-05',
        readTime: '7 min read',
        category: 'Operations',
        excerpt: 'Strategies for building robust supply chains in challenging environments.'
      }
    ]
  },
  {
    id: 'sectors',
    title: 'Sector Reports',
    icon: ChartBarIcon,
    description: 'In-depth analysis of key sectors: Energy, Real Estate, and Agriculture',
    color: 'green',
    articles: [
      {
        title: 'West Africa Energy Sector Outlook 2025',
        date: '2024-11-30',
        readTime: '15 min read',
        category: 'Energy',
        excerpt: 'Comprehensive analysis of renewable energy opportunities and traditional energy markets.',
        featured: true
      },
      {
        title: 'Real Estate Investment Guide: Ghana',
        date: '2024-11-25',
        readTime: '12 min read',
        category: 'Real Estate',
        excerpt: 'Market dynamics, investment opportunities, and regulatory considerations.'
      },
      {
        title: 'Agricultural Value Chains in West Africa',
        date: '2024-11-20',
        readTime: '10 min read',
        category: 'Agriculture',
        excerpt: 'Opportunities in agricultural processing and export markets.'
      }
    ]
  },
  {
    id: 'countries',
    title: 'Country Briefs',
    icon: GlobeAltIcon,
    description: 'Country-specific insights for Ghana, Nigeria, and Côte d\'Ivoire',
    color: 'purple',
    articles: [
      {
        title: 'Ghana Business Environment Report 2024',
        date: '2024-12-01',
        readTime: '20 min read',
        category: 'Ghana',
        excerpt: 'Comprehensive overview of Ghana\'s business climate, opportunities, and challenges.',
        featured: true
      },
      {
        title: 'Nigeria Market Entry Guide',
        date: '2024-11-28',
        readTime: '18 min read',
        category: 'Nigeria',
        excerpt: 'Strategic considerations for entering Nigeria\'s diverse market landscape.'
      },
      {
        title: 'Côte d\'Ivoire Investment Opportunities',
        date: '2024-11-22',
        readTime: '14 min read',
        category: 'Côte d\'Ivoire',
        excerpt: 'Emerging sectors and investment climate in Côte d\'Ivoire.'
      }
    ]
  },
  {
    id: 'policy',
    title: 'Policy & Regulation Watch',
    icon: ShieldCheckIcon,
    description: 'Updates on policy changes and regulatory developments',
    color: 'red',
    articles: [
      {
        title: 'New Foreign Investment Regulations Across West Africa',
        date: '2024-12-08',
        readTime: '10 min read',
        category: 'Regulation',
        excerpt: 'Recent changes to foreign investment laws and their implications for businesses.',
        featured: true
      },
      {
        title: 'Tax Policy Updates: Ghana 2024',
        date: '2024-11-30',
        readTime: '8 min read',
        category: 'Tax Policy',
        excerpt: 'Overview of recent tax policy changes and compliance requirements.'
      },
      {
        title: 'Environmental Regulations for Infrastructure Projects',
        date: '2024-11-25',
        readTime: '9 min read',
        category: 'Environment',
        excerpt: 'New environmental compliance requirements for development projects.'
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
    active: 'bg-[#202962] text-white'
  },
  green: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    button: 'bg-[#202962] hover:bg-[#1a2252]',
    active: 'bg-[#202962] text-white'
  },
  purple: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    button: 'bg-[#202962] hover:bg-[#1a2252]',
    active: 'bg-[#202962] text-white'
  },
  red: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    button: 'bg-[#202962] hover:bg-[#1a2252]',
    active: 'bg-[#202962] text-white'
  }
};

export default function InsightsReports() {
  const [activeSection, setActiveSection] = useState('trends');

  
  const activeData = sections.find(section => section.id === activeSection);
  const colors = colorVariants[activeData.color];

  const filteredArticles = activeData.articles;

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Background Image Container */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/images/insights/hero-bg.jpg')`,
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className='absolute inset-0 bg-[#202962]/80'></div>
        </div>
        
        {/* Content Container */}
        <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center text-white'
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20'
            >
              <span className='text-sm font-medium'>Thought Leadership</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'
            >
              Insights & Reports
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90'
            >
              Our thought leadership explores developments in policy, regulation, and industry across African markets.
            </motion.p>
            



          </motion.div>
        </div>
      </section>

      {/* Featured Resource - IMAGE BACKGROUND SUGGESTION #2 */}
      <section className='py-16 relative overflow-hidden'>
        {/* 
          IMAGE BACKGROUND SUGGESTION #2: Featured Resource Section
          Recommended image: Professional business meeting, Ghana cityscape, or office environment
          Image should be: 1920x600px, showing professionalism and African business context
          Alternative: Abstract business graphics, charts, or data visualization backgrounds
        */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/images/insights/featured-bg.jpg')`,
          }}
        >
          <div className='absolute inset-0 bg-[#202962]/85'></div>
        </div>
        
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-white border border-white/20'
          >
            <div className='flex flex-col lg:flex-row items-center justify-between'>
              <div className='mb-6 lg:mb-0 lg:mr-8'>
                <div className='inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4'>
                  Featured Resource
                </div>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                  "Navigating Ghana's Business Environment: 2025 Outlook"
                </h2>
                <p className='text-xl opacity-90 mb-6'>
                  Comprehensive guide covering market opportunities, regulatory landscape, and strategic considerations for businesses operating in Ghana.
                </p>
                <ul className='space-y-2 opacity-90'>
                  <li>• Market analysis and growth projections</li>
                  <li>• Regulatory updates and compliance requirements</li>
                  <li>• Sector-specific opportunities and challenges</li>
                  <li>• Strategic recommendations for market entry</li>
                </ul>
              </div>
              <div className='flex-shrink-0'>
                <button className='bg-white text-[#202962] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg'>
                  <ArrowDownTrayIcon className='w-5 h-5' />
                  <span>Download Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className='py-8 bg-gray-50 sticky top-0 z-30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            {sections.map((section) => {
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

      {/* Content Section - IMAGE BACKGROUND SUGGESTION #3 */}
      <section className='py-16 relative overflow-hidden'>
        {/* 
          IMAGE BACKGROUND SUGGESTION #3: Content Section Background
          Recommended image: Subtle pattern, light texture, or abstract business graphics
          Image should be: 1920x1200px, very light/subtle to not interfere with content readability
          Alternative: Geometric patterns, subtle gradients, or light corporate textures
          Opacity should be very low (10-20%) to maintain content focus
        */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10'
          style={{
            backgroundImage: `url('/images/insights/content-bg.jpg')`,
          }}
        ></div>
        
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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

            {/* Articles Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    article.featured ? colors.border : 'border-gray-200'
                  }`}
                >
                  {article.featured && (
                    <div className={`${colors.bg} px-4 py-2`}>
                      <span className={`text-sm font-semibold ${colors.text}`}>Featured</span>
                    </div>
                  )}
                  
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-full`}>
                        {article.category}
                      </span>
                      <div className='flex items-center space-x-2 text-sm text-gray-500'>
                        <CalendarIcon className='w-4 h-4' />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2'>
                      {article.title}
                    </h3>
                    
                    <p className='text-gray-600 mb-4 line-clamp-3'>
                      {article.excerpt}
                    </p>
                    
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-2 text-sm text-gray-500'>
                      </div>
                      
                      <button className={`${colors.text} font-medium text-sm flex items-center space-x-1 hover:underline`}>
                        <span>Read More</span>
                        <ArrowRightIcon className='w-4 h-4' />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className='text-center py-12'>
                <p className='text-gray-500 text-lg'>No articles found matching your search.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}