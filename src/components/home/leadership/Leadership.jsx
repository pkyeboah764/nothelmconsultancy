import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon
} from '@heroicons/react/24/outline';

const leaders = [
  {
    id: 1,
    name: 'Augustine Yeboah',
    title: 'Managing Partner',
    email: 'augustine.nothelmconsultancy@gmail.com',
    phone: '0256 537 727',
    photo: '/api/placeholder/120/120', // Placeholder for the actual photo
    bio: 'Augustine Yeboah is a businessman who serves as the Managing Partner of Nothelm Holdings LTD. His area of focus is the business advisory industry in Ghana where he is involved through Nothelm Consultancy, a business advisory firm with a focus on strategic consulting and business development. He has been involved in several business advisory projects in Ghana in various roles.',
    additionalInfo: 'He is very much interested in art and architecture, and for which he is involved in Nothelm Foundation, a not-for-profit set up for the promotion and preservation of art and architecture of African origin and heritage.'
  }
];

export default function Leadership() {
  return (
    <section id='leadership' className='py-20 bg-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Our Leadership
          </h2>
          <div className='w-24 h-1 bg-[#202962] mx-auto mb-8'></div>
          <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
            Meet the experienced professionals who drive Nothelm's strategic vision and deliver exceptional results for our clients across Africa.
          </p>
        </motion.div>

        {/* Leadership Profile */}
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className='bg-white border border-gray-200 rounded-lg p-8 shadow-sm'
          >
            {/* Profile Header */}
            <div className='flex items-start space-x-6 mb-6'>
              <div className='flex-shrink-0'>
                <div className='w-20 h-20 bg-gray-200 rounded-lg overflow-hidden'>
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
              
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-[#202962] mb-1'>
                  {leader.name}
                </h3>
                <p className='text-[#202962] font-medium mb-4'>
                  ({leader.title})
                </p>
                
                {/* Contact Info */}
                <div className='space-y-1'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-[#202962] font-medium text-sm'>E:</span>
                    <a 
                      href={`mailto:${leader.email}`}
                      className='text-[#202962] text-sm hover:underline'
                    >
                      {leader.email}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-[#202962] font-medium text-sm'>C:</span>
                    <a 
                      href={`tel:${leader.phone}`}
                      className='text-[#202962] text-sm hover:underline'
                    >
                      {leader.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className='w-full h-px bg-gray-300 mb-6'></div>

            {/* Bio */}
            <div className='space-y-4'>
              <p className='text-gray-700 leading-relaxed'>
                {leader.bio}
              </p>
              {leader.additionalInfo && (
                <p className='text-gray-700 leading-relaxed'>
                  {leader.additionalInfo}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}