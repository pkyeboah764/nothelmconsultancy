import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

export default function ConsultationPopup({ isOpen, onClose }) {
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
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
        onClose();
        setConsultationForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send consultation request. Please try again.');
      }
    } catch (error) {
      console.error('Consultation form submission error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
          onClick={onClose}
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
                  onClick={onClose}
                  className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                >
                  <XMarkIcon className='w-6 h-6 text-gray-500' />
                </button>
              </div>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={consultationForm.name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202962] focus:border-transparent transition-all resize-none'
                    placeholder='Tell us about your consultation needs...'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-[#202962] hover:bg-[#1a2252] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2'
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
  );
}