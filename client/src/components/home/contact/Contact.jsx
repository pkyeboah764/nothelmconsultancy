import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e, formType = 'main') => {
    const { name, value } = e.target;
    if (formType === 'consultation') {
      setConsultationForm(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e, formType = 'main') => {
    e.preventDefault();
    
    try {
      if (formType === 'consultation') {
        // Send consultation form to admin@nothelmconsultancy.com
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'consultation',
            to: 'admin@nothelmconsultancy.com',
            ...consultationForm
          }),
        });
        
        if (response.ok) {
          alert('Consultation request sent successfully!');
          setIsPopupOpen(false);
          setConsultationForm({ name: '', email: '', subject: '', message: '' });
        } else {
          alert('Failed to send consultation request. Please try again.');
        }
      } else {
        // Send main contact form to admin@nothelmconsultancy.com
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'contact',
            to: 'admin@nothelmconsultancy.com',
            ...formData
          }),
        });
        
        if (response.ok) {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        } else {
          alert('Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <section id='contact' className='py-8 sm:py-12 relative overflow-hidden'>
        {/* 
          IMAGE BACKGROUND SUGGESTION #4: Contact Section
          Recommended image: Modern office reception, professional consultation, or Ghana business district
          Image should be: 1920x800px, showing accessibility, professionalism, and welcoming environment
          Alternative: Handshake, business consultation, modern office lobby, or communication theme
        */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/images/home/contact/contact-bg.jpg')`,
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-white/60 via-white/70 to-white/80'></div>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-5 sm:mb-6'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4'>
              Let's Talk Strategy
            </h2>
            <div className='w-16 sm:w-20 h-1 bg-[#202962] mx-auto mb-4 sm:mb-5'></div>
            <p className='text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
              Ready to explore opportunities in African markets? Get in touch with our team for strategic guidance and expert advisory services.
            </p>
          </motion.div>

          {/* Main Content Grid - Leadership, Form, and Get In Touch */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6'>
            {/* Left Column */}
            <div className='flex flex-col space-y-4 sm:space-y-6'>
              {/* Leadership Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className='bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                    {/* Left Side - Name and Details */}
                    <div className='bg-gradient-to-br from-[#202962] to-[#1a2252] p-4 sm:p-5 text-white'>
                      <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        {/* Profile Image */}
                        <div className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white/20 mb-4 shadow-xl hover:ring-6 hover:ring-white/30 transition-all duration-300'>
                          <img
                            src='/images/team/augustine-yeboah.jpg'
                            alt='Augustine Yeboah'
                            className='w-full h-full object-cover object-top scale-110 hover:scale-105 transition-transform duration-300'
                            style={{ objectPosition: '50% 20%' }}
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
                            }}
                          />
                        </div>
                        
                        {/* Name and Title */}
                        <div className='mb-4'>
                          <h3 className='text-lg sm:text-xl font-bold mb-1 leading-tight'>
                            Augustine Yeboah
                          </h3>
                          <p className='text-white/90 font-semibold text-sm mb-1'>
                            Managing Partner
                          </p>
                          <p className='text-white/70 text-xs font-medium'>
                            Nothelm Consultancy
                          </p>
                        </div>
                        
                        {/* Contact Details */}
                        <div className='space-y-3 w-full'>
                          <div className='w-full'>
                            <div className='flex items-center justify-center md:justify-start space-x-2 mb-1'>
                              <div className='w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors flex-shrink-0'>
                                <EnvelopeIcon className='w-3 h-3 text-white' />
                              </div>
                              <span className='text-white/80 text-xs font-medium'>Email</span>
                            </div>
                            <div className='w-full overflow-x-auto'>
                              <a 
                                href='mailto:augustine.nothelmconsultancy@gmail.com'
                                className='text-white hover:text-white/80 transition-colors font-medium hover:underline whitespace-nowrap text-xs inline-block'
                                title='augustine.nothelmconsultancy@gmail.com'
                              >
                                augustine.nothelmconsultancy@gmail.com
                              </a>
                            </div>
                          </div>
                          
                          <div className='w-full'>
                            <div className='flex items-center justify-center md:justify-start space-x-2 mb-1'>
                              <div className='w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors flex-shrink-0'>
                                <PhoneIcon className='w-3 h-3 text-white' />
                              </div>
                              <span className='text-white/80 text-xs font-medium'>Phone</span>
                            </div>
                            <div className='w-full overflow-x-auto'>
                              <a 
                                href='tel:0256537727'
                                className='text-white hover:text-white/80 transition-colors font-medium hover:underline whitespace-nowrap text-xs inline-block'
                                title='+233 256 537 727'
                              >
                                +233 256 537 727
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Profile Summary */}
                    <div className='p-4 sm:p-5 flex flex-col justify-center'>
                      <div className='space-y-3 sm:space-y-4'>
                        <div>
                          <h4 className='text-base sm:text-lg font-bold text-gray-900 mb-2'>
                            Leadership
                          </h4>
                          <div className='w-10 sm:w-12 h-1 bg-[#202962] mb-3'></div>
                        </div>
                        
                        <div className='space-y-3 text-gray-700 leading-relaxed text-xs sm:text-sm'>
                          <p>
                            Augustine Yeboah serves as Managing Partner for Nothelm Consultancy, specializing in investment and legal consultancy across key industries including real estate, infrastructure, extractives, energy, technology and entertainment.
                          </p>
                          <p>
                            With extensive project experience across Ghana's various industries, he is passionate about promoting and preserving African art and architecture heritage.
                          </p>
                          <p>
                            He brings deep expertise in navigating complex business environments across the continent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Get In Touch Section - Enhanced and Bigger */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='rounded-xl shadow-lg border border-gray-100 overflow-hidden'
              >
                {/* All Content in Header Area */}
                <div className='bg-gradient-to-r from-[#202962] to-[#1a2252] px-6 py-6'>
                  <div className='mb-5'>
                    <h3 className='text-xl sm:text-2xl font-bold text-white mb-2'>Get In Touch</h3>
                    <p className='text-white/80 text-sm'>Multiple ways to reach our team</p>
                  </div>

                  {/* Contact Methods - Two Column Layout */}
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full'>
                    {/* Left Column - Email and Phone */}
                    <div className='space-y-2'>
                      {/* Email */}
                      <div className='flex items-center space-x-2'>
                        <div className='w-6 h-6 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0'>
                          <EnvelopeIcon className='w-3 h-3 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-medium text-white text-xs mb-0.5'>Email Us</h4>
                          <a 
                            href='mailto:admin@nothelmconsultancy.com'
                            className='text-white/90 hover:text-white font-medium text-xs break-all transition-colors block'
                          >
                            admin@nothelmconsultancy.com
                          </a>
                          <a 
                            href='mailto:nothelmconsultancy@gmail.com'
                            className='text-white/90 hover:text-white font-medium text-xs break-all transition-colors block'
                          >
                            nothelmconsultancy@gmail.com
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className='flex items-center space-x-2'>
                        <div className='w-6 h-6 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0'>
                          <PhoneIcon className='w-3 h-3 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-medium text-white text-xs mb-0.5'>Call Us</h4>
                          <a 
                            href='tel:0256537727'
                            className='text-white/90 hover:text-white font-medium text-xs transition-colors'
                          >
                            0256537727 / 0267881728
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Location */}
                    <div className='flex items-start space-x-2'>
                      <div className='w-6 h-6 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0'>
                        <MapPinIcon className='w-3 h-3 text-white' />
                      </div>
                      <div className='flex-1'>
                        <h4 className='font-medium text-white text-xs mb-0.5'>Visit Us</h4>
                        <address className='text-white/90 not-italic text-xs leading-tight'>
                          Nothelm Group<br />
                          Oat Street, Agbogba<br />
                          North Legon, Accra<br />
                          GPS: GE-141-9926
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='bg-[#202962] px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-fit'
            >
              <div className='mb-4 sm:mb-6'>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2'>Send us a Message</h3>
                <p className='text-white/80 text-sm sm:text-base'>Fill out the form below and we'll get back to you.</p>
              </div>

              <form onSubmit={handleSubmit} className='flex flex-col flex-1'>
                <div className='space-y-3 sm:space-y-4 flex-1'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <label className='block text-sm sm:text-base font-medium text-white mb-2'>
                        Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm sm:text-base'
                        placeholder='Your full name'
                      />
                    </div>
                    <div>
                      <label className='block text-sm sm:text-base font-medium text-white mb-2'>
                        Email *
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm sm:text-base'
                        placeholder='your@email.com'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <label className='block text-sm sm:text-base font-medium text-white mb-2'>
                        Company
                      </label>
                      <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm sm:text-base'
                        placeholder='Your company name'
                      />
                    </div>
                    <div>
                      <label className='block text-sm sm:text-base font-medium text-white mb-2'>
                        Phone
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm sm:text-base'
                        placeholder='+233 XX XXX XXXX'
                      />
                    </div>
                  </div>

                  <div className='flex-1'>
                    <label className='block text-sm sm:text-base font-medium text-white mb-2'>
                      Message *
                    </label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='w-full h-full min-h-[150px] sm:min-h-[200px] px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 hover:bg-white/15 resize-none text-sm sm:text-base'
                      placeholder='Tell us about your project or inquiry...'
                    />
                  </div>
                </div>

                <div className='mt-4 sm:mt-6'>
                  <button
                    type='submit'
                    className='w-full bg-white text-[#202962] hover:bg-gray-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base'
                  >
                    <PaperAirplaneIcon className='w-4 h-4 sm:w-5 sm:h-5' />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='p-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-2xl font-bold text-gray-900'>Quick Consultation</h3>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                  >
                    <XMarkIcon className='w-6 h-6 text-gray-500' />
                  </button>
                </div>

                <form onSubmit={(e) => handleSubmit(e, 'consultation')} className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Name *
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={consultationForm.name}
                      onChange={(e) => handleInputChange(e, 'consultation')}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202962] focus:border-transparent transition-all'
                      placeholder='Your full name'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={consultationForm.email}
                      onChange={(e) => handleInputChange(e, 'consultation')}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202962] focus:border-transparent transition-all'
                      placeholder='your@email.com'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Subject *
                    </label>
                    <input
                      type='text'
                      name='subject'
                      value={consultationForm.subject}
                      onChange={(e) => handleInputChange(e, 'consultation')}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202962] focus:border-transparent transition-all'
                      placeholder='What would you like to discuss?'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Message *
                    </label>
                    <textarea
                      name='message'
                      value={consultationForm.message}
                      onChange={(e) => handleInputChange(e, 'consultation')}
                      required
                      rows={4}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202962] focus:border-transparent transition-all resize-none'
                      placeholder='Tell us about your consultation needs...'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-[#202962] hover:bg-[#1a2252] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2'
                  >
                    <PaperAirplaneIcon className='w-5 h-5' />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
