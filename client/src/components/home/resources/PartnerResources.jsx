import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  LinkIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BanknotesIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const resourceCategories = [
  {
    id: 'stakeholder',
    title: 'Stakeholder Portals',
    icon: UserGroupIcon,
    description: 'Government and institutional portals for stakeholder engagement',
    color: 'blue',
    resources: [
      {
        name: 'Ghana Investment Promotion Centre (GIPC)',
        url: 'https://gipcghana.com',
        description: 'Official investment promotion and facilitation agency'
      },
      {
        name: 'Ghana Export Promotion Authority',
        url: 'https://gepa.gov.gh',
        description: 'Export development and trade promotion services'
      },
      {
        name: 'Ministry of Trade and Industry',
        url: 'https://moti.gov.gh',
        description: 'Trade policy and industrial development'
      },
      {
        name: 'Ghana Free Zones Authority',
        url: 'https://gfza.gov.gh',
        description: 'Free zone development and investment incentives'
      },
      {
        name: 'Ghana Standards Authority',
        url: 'https://gsa.gov.gh',
        description: 'Standards development and quality assurance'
      },
      {
        name: 'Public Procurement Authority',
        url: 'https://ppa.gov.gh',
        description: 'Public procurement regulations and opportunities'
      }
    ]
  },
  {
    id: 'regulatory',
    title: 'Regulatory Databases',
    icon: DocumentTextIcon,
    description: 'Legal frameworks, compliance requirements, and regulatory updates',
    color: 'green',
    resources: [
      {
        name: 'Registrar General\'s Department',
        url: 'https://rgd.gov.gh',
        description: 'Business registration and corporate compliance'
      },
      {
        name: 'Ghana Revenue Authority',
        url: 'https://gra.gov.gh',
        description: 'Tax regulations and compliance procedures'
      },
      {
        name: 'Environmental Protection Agency',
        url: 'https://epa.gov.gh',
        description: 'Environmental regulations and permits'
      },
      {
        name: 'Securities and Exchange Commission',
        url: 'https://sec.gov.gh',
        description: 'Capital market regulations and licensing'
      },
      {
        name: 'National Insurance Commission',
        url: 'https://nic.gov.gh',
        description: 'Insurance industry regulation and oversight'
      },
      {
        name: 'Bank of Ghana',
        url: 'https://bog.gov.gh',
        description: 'Central banking and financial sector regulation'
      }
    ]
  },
  {
    id: 'industry',
    title: 'Industry Associations',
    icon: BuildingOfficeIcon,
    description: 'Professional bodies and sector-specific organizations',
    color: 'purple',
    resources: [
      {
        name: 'Ghana Real Estate Developers Association',
        url: 'https://greda.org.gh',
        description: 'Real estate industry standards and networking'
      },
      {
        name: 'Association of Ghana Industries',
        url: 'https://agi.org.gh',
        description: 'Manufacturing and industrial sector representation'
      },
      {
        name: 'Ghana National Chamber of Mines',
        url: 'https://ghanachamberofmines.org',
        description: 'Mining industry advocacy and development'
      },
      {
        name: 'Ghana Association of Banks',
        url: 'https://gab.com.gh',
        description: 'Banking sector coordination and standards'
      },
      {
        name: 'Ghana Oil and Gas Service Providers Association',
        url: 'https://gogspa.org',
        description: 'Oil and gas industry service providers'
      },
      {
        name: 'Ghana Employers Association',
        url: 'https://ghanaemployers.com',
        description: 'Employer advocacy and labor relations'
      }
    ]
  },
  {
    id: 'chambers',
    title: 'Chambers of Commerce',
    icon: GlobeAltIcon,
    description: 'Business networking and commercial support organizations',
    color: 'orange',
    resources: [
      {
        name: 'Ghana National Chamber of Commerce',
        url: 'https://gnccim.com',
        description: 'National business advocacy and networking'
      },
      {
        name: 'Accra Chamber of Commerce',
        url: 'https://accrachamber.org',
        description: 'Regional business support and development'
      },
      {
        name: 'British Chamber of Commerce Ghana',
        url: 'https://bccghana.com',
        description: 'UK-Ghana trade and investment facilitation'
      },
      {
        name: 'American Chamber of Commerce Ghana',
        url: 'https://amchamghana.org',
        description: 'US-Ghana business relations and networking'
      },
      {
        name: 'German-Ghanaian Business Association',
        url: 'https://ggba.com.gh',
        description: 'German-Ghana trade and business relations'
      },
      {
        name: 'French Chamber of Commerce Ghana',
        url: 'https://ccifg.org',
        description: 'French-Ghana commercial partnerships'
      }
    ]
  },
  {
    id: 'investment',
    title: 'Investment & Trade Platforms',
    icon: BanknotesIcon,
    description: 'Investment opportunities and trade facilitation platforms',
    color: 'red',
    resources: [
      {
        name: 'Ghana Stock Exchange',
        url: 'https://gse.com.gh',
        description: 'Capital market and investment opportunities'
      },
      {
        name: 'African Development Bank',
        url: 'https://afdb.org',
        description: 'Development finance and project funding'
      },
      {
        name: 'International Finance Corporation',
        url: 'https://ifc.org',
        description: 'Private sector development and investment'
      },
      {
        name: 'Ghana Commodity Exchange',
        url: 'https://gcx.com.gh',
        description: 'Agricultural commodity trading platform'
      },
      {
        name: 'Development Bank Ghana',
        url: 'https://dbghana.com.gh',
        description: 'Development finance for SMEs and infrastructure'
      },
      {
        name: 'Ghana Infrastructure Investment Fund',
        url: 'https://giif.gov.gh',
        description: 'Infrastructure development and financing'
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
    hover: 'hover:bg-[#202962]/5'
  },
  green: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    hover: 'hover:bg-[#202962]/5'
  },
  purple: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    hover: 'hover:bg-[#202962]/5'
  },
  orange: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    hover: 'hover:bg-[#202962]/5'
  },
  red: {
    bg: 'bg-[#202962]/5',
    border: 'border-[#202962]/20',
    text: 'text-[#202962]',
    iconBg: 'bg-[#202962]/10',
    hover: 'hover:bg-[#202962]/5'
  }
};

export default function PartnerResources() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id='partner-resources' className='py-8 sm:py-10 relative overflow-hidden'>
      {/* Background Image */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('/images/home/resources/resources-bg.jpg')`,
        }}
      ></div>
      <div className='absolute inset-0 bg-gradient-to-br from-white/70 via-white/75 to-white/80'></div>
      
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-6 sm:mb-8'
        >
          <div className='inline-flex items-center space-x-2 bg-[#202962]/5 rounded-full px-3 py-1 mb-4'>
            <LinkIcon className='w-4 h-4 text-[#202962]' />
            <span className='text-[#202962] font-medium text-sm'>Useful Resources</span>
          </div>
          
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
            Partner Resources
          </h2>
          <div className='w-16 h-1 bg-[#202962] mx-auto mb-4'></div>
          <p className='text-gray-600 leading-relaxed max-w-2xl mx-auto'>
            Quick access to key institutions and databases for your business needs in Ghana.
          </p>
        </motion.div>

        {/* Resource Categories - Horizontal Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 relative'>
          {resourceCategories.map((category, categoryIndex) => {
            const colors = colorVariants[category.color];
            const isHovered = hoveredCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className='relative'
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Main Category Card */}
                <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer'>
                  {/* Category Header */}
                  <div className={`${colors.bg} p-3`}>
                    <div className='flex flex-col items-center text-center space-y-2'>
                      <div className={`w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                        <category.icon className={`w-4 h-4 ${colors.text}`} />
                      </div>
                      <h3 className='text-sm font-bold text-gray-900 leading-tight'>{category.title}</h3>
                    </div>
                  </div>

                  {/* Preview Resources */}
                  <div className='p-3'>
                    <div className='space-y-1'>
                      {category.resources.slice(0, 2).map((resource, resourceIndex) => (
                        <div
                          key={resourceIndex}
                          className={`block p-2 rounded-lg ${colors.hover} transition-all duration-200`}
                        >
                          <div className='flex items-center justify-between'>
                            <div className='flex-1'>
                              <h4 className='font-medium text-gray-900 text-xs line-clamp-1'>
                                {resource.name}
                              </h4>
                              <p className='text-xs text-gray-500 mt-0.5 line-clamp-1'>
                                {resource.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className='text-center pt-1'>
                        <span className='text-xs text-gray-400'>
                          see all
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popup Style Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute bottom-full z-50 mb-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ${
                      categoryIndex <= 1 ? 'left-0' : 
                      categoryIndex >= 3 ? 'right-0' : 
                      'left-1/2 transform -translate-x-1/2'
                    }`}
                    style={{ filter: 'drop-shadow(0 20px 25px rgb(0 0 0 / 0.15))' }}
                  >
                    {/* Popup Arrow */}
                    <div className={`absolute top-full ${
                      categoryIndex <= 1 ? 'left-6' : 
                      categoryIndex >= 3 ? 'right-6' : 
                      'left-1/2 transform -translate-x-1/2'
                    }`}>
                      <div className='w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white'></div>
                    </div>
                    
                    {/* Popup Header */}
                    <div className='bg-gradient-to-r from-[#202962] to-[#1a2252] px-5 py-4'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center'>
                          <category.icon className='w-4 h-4 text-white' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-white text-sm'>{category.title}</h4>
                          <p className='text-white/80 text-xs'>{category.resources.length} resources available</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Resources List */}
                    <div className='max-h-72 overflow-y-auto'>
                      <div className='p-2'>
                        {category.resources.map((resource, resourceIndex) => (
                          <motion.a
                            key={resourceIndex}
                            href={resource.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15, delay: resourceIndex * 0.03 }}
                            className='group block p-3 m-1 rounded-lg hover:bg-[#202962]/5 transition-all duration-200 border border-transparent hover:border-[#202962]/10'
                          >
                            <div className='flex items-start justify-between'>
                              <div className='flex-1 min-w-0'>
                                <h5 className='font-medium text-gray-900 text-sm group-hover:text-[#202962] transition-colors'>
                                  {resource.name}
                                </h5>
                                <p className='text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2'>
                                  {resource.description}
                                </p>
                              </div>
                              <div className='ml-3 flex-shrink-0'>
                                <div className='w-6 h-6 rounded-md bg-gray-100 group-hover:bg-[#202962] flex items-center justify-center transition-colors duration-200'>
                                  <ArrowTopRightOnSquareIcon className='w-3 h-3 text-gray-500 group-hover:text-white transition-colors duration-200' />
                                </div>
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Popup Footer */}
                    <div className='bg-gray-50 px-4 py-3 text-center border-t border-gray-100'>
                      <p className='text-xs text-gray-500'>Click any resource to visit their website</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className='mt-8 sm:mt-10'
        >
          <div className='bg-yellow-50 border border-yellow-200 rounded-2xl p-6'>
            <div className='flex items-start space-x-3'>
              <ExclamationTriangleIcon className='w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5' />
              <div>
                <h4 className='font-semibold text-yellow-800 mb-2'>Disclaimer</h4>
                <p className='text-yellow-700 text-sm leading-relaxed'>
                  Nothelm curates these resources for user convenience. We are not responsible for external content, 
                  and users should verify information independently. Links are provided for informational purposes only 
                  and do not constitute endorsement of external organizations or their services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}