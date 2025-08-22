import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const insightCategories = [
  {
    id: 'blog',
    title: 'Blog',
    icon: DocumentTextIcon,
    description: 'Latest insights and analysis on business trends in Ghana',
    color: 'blue',
    link: '/blog',
    articles: [
      {
        title: 'Market Entry Strategies for Foreign Investors',
        date: '2024-12-15',
        readTime: '5 min read',
        excerpt: 'Key considerations for international businesses entering the Ghanaian market.'
      },
      {
        title: 'Real Estate Investment Trends in Accra',
        date: '2024-12-10',
        readTime: '7 min read',
        excerpt: 'Analysis of current property market dynamics and future opportunities.'
      },
      {
        title: 'Infrastructure Development Opportunities',
        date: '2024-12-05',
        readTime: '6 min read',
        excerpt: 'Exploring emerging infrastructure projects and investment potential.'
      }
    ]
  },
  {
    id: 'reports',
    title: 'Sector Reports',
    icon: ChartBarIcon,
    description: 'Comprehensive analysis of key industry sectors',
    color: 'green',
    link: '/reports',
    articles: [
      {
        title: 'Ghana Real Estate Market Report 2024',
        date: '2024-11-30',
        readTime: '15 min read',
        excerpt: 'Annual comprehensive analysis of Ghana\'s real estate sector performance.'
      },
      {
        title: 'Mining Sector Investment Guide',
        date: '2024-11-15',
        readTime: '12 min read',
        excerpt: 'Investment opportunities and regulatory landscape in Ghana\'s mining sector.'
      },
      {
        title: 'Infrastructure Development Outlook',
        date: '2024-10-30',
        readTime: '10 min read',
        excerpt: 'Future infrastructure projects and their investment implications.'
      }
    ]
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance',
    icon: ShieldCheckIcon,
    description: 'Updates on regulations and compliance requirements',
    color: 'purple',
    link: '/compliance',
    articles: [
      {
        title: 'New Foreign Investment Regulations 2024',
        date: '2024-12-01',
        readTime: '8 min read',
        excerpt: 'Overview of recent changes to foreign investment laws and requirements.'
      },
      {
        title: 'Tax Compliance Guide for Businesses',
        date: '2024-11-20',
        readTime: '10 min read',
        excerpt: 'Essential tax obligations and compliance procedures for businesses in Ghana.'
      },
      {
        title: 'Environmental Compliance for Projects',
        date: '2024-11-10',
        readTime: '9 min read',
        excerpt: 'Environmental regulations and compliance requirements for development projects.'
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
  }
};

export default function Insights() {
  const [activeTab, setActiveTab] = useState('blog');
  
  const activeCategory = insightCategories.find(cat => cat.id === activeTab);
  const colors = colorVariants[activeCategory.color];

  const handleTabClick = (categoryId, link) => {
    setActiveTab(categoryId);
    // For now, just set active tab. Later we can add navigation
    // window.location.href = link;
  };

  const handleViewAll = (link) => {
    window.location.href = link;
  };

  return (
    <section id='insights' className='py-12 sm:py-16 relative overflow-hidden'>
      {/* Background Image */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('/images/home/insights/section-bg.jpg')`,
        }}
      ></div>
      <div className='absolute inset-0 bg-gradient-to-br from-white/75 via-white/80 to-white/85'></div>
      
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-10 sm:mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Insights & Reports
          </h2>
          <div className='w-24 h-1 bg-[#202962] mx-auto mb-8'></div>
          <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
            Our thought leadership explores various topics relevant to businesses and investors in the Ghanaian market in areas of policies, regulations, and significant developments.
          </p>
        </motion.div>

        {/* Featured Resource */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-[#202962] to-[#1a2252] rounded-2xl p-6 md:p-8 text-white mb-10 sm:mb-12'
        >
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-6 md:mb-0 md:mr-8'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Featured Resource
              </h3>
              <p className='text-xl mb-4 opacity-90'>
                "Navigating Ghana's Business Environment: 2025 Outlook"
              </p>
              <p className='opacity-80'>
                Comprehensive guide to business opportunities and challenges in Ghana for 2025
              </p>
            </div>
            <button className='bg-white text-[#202962] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap'>
              <ArrowDownTrayIcon className='w-5 h-5' />
              <span>Download Now</span>
            </button>
          </div>
        </motion.div>

        {/* Horizontal Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row justify-center mb-8 sm:mb-10 bg-white rounded-2xl p-2 shadow-lg'
        >
          {insightCategories.map((category) => {
            const isActive = activeTab === category.id;
            const tabColors = colorVariants[category.color];
            
            return (
              <button
                key={category.id}
                onClick={() => handleTabClick(category.id, category.link)}
                className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? tabColors.active 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <category.icon className={`w-6 h-6 ${isActive ? 'text-white' : tabColors.text}`} />
                <span className='font-semibold'>{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className='bg-white rounded-2xl shadow-lg overflow-hidden'
        >
          {/* Category Header */}
          <div className={`${colors.bg} ${colors.border} border-b-2 p-8`}>
            <div className='flex items-center space-x-4 mb-4'>
              <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                <activeCategory.icon className={`w-6 h-6 ${colors.text}`} />
              </div>
              <div>
                <h3 className='text-2xl font-bold text-gray-900'>{activeCategory.title}</h3>
                <p className='text-gray-600'>{activeCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className='p-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {activeCategory.articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300'
                >
                  <div className='flex items-center space-x-2 text-sm text-gray-500 mb-3'>
                    <CalendarIcon className='w-4 h-4' />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  
                  <h4 className='font-semibold text-gray-900 mb-3 line-clamp-2'>
                    {article.title}
                  </h4>
                  
                  <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                    {article.excerpt}
                  </p>
                  
                  <button className={`${colors.text} font-medium text-sm flex items-center space-x-1 hover:underline`}>
                    <span>Read More</span>
                    <ArrowRightIcon className='w-4 h-4' />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Single Action Button - Only View Full Insights & Reports */}
            <div className='flex justify-center mt-8'>
              <button
                onClick={() => window.location.href = '/insights-reports'}
                className='bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2'
              >
                <span>View Full Insights & Reports</span>
                <ArrowRightIcon className='w-5 h-5' />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}