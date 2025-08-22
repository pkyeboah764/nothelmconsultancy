/**
 * Nothelm Consultancy - Footer Component
 * Developer: Samuel Arthur
 * Description: Main footer with company info, quick links, newsletter signup, and social media links
 */

import { useState } from 'react';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa';

export default function Footer() {
	const [email, setEmail] = useState('');

	const handleNewsletterSubmit = async (e) => {
		e.preventDefault();
		
		try {
			// Send newsletter subscription to admin@nothelmconsultancy.com
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					to: 'admin@nothelmconsultancy.com'
				}),
			});
			
			if (response.ok) {
				alert('Successfully subscribed to newsletter!');
				setEmail('');
			} else {
				alert('Failed to subscribe. Please try again.');
			}
		} catch (error) {
			console.error('Newsletter subscription error:', error);
			alert('An error occurred. Please try again later.');
		}
	};

	return (
		<footer className='bg-[#202962] text-white py-8 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-4xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-6'>
					{/* Company Info */}
					<div>
						<h3 className='text-lg font-bold mb-3'>Nothelm Consultancy</h3>
						<p className='text-gray-300 mb-4 text-sm leading-relaxed'>
							Strategic advisory for businesses across Africa.
						</p>
						
						{/* Contact Info */}
						<div className='space-y-2'>
							<div className='flex items-center space-x-2'>
								<EnvelopeIcon className='w-4 h-4 text-gray-300' />
								<div className='flex flex-col'>
									<a href='mailto:admin@nothelmconsultancy.com' className='text-gray-300 hover:text-white transition-colors text-sm break-all'>
										admin@nothelmconsultancy.com
									</a>
									<a href='mailto:nothelmconsultancy@gmail.com' className='text-gray-300 hover:text-white transition-colors text-sm break-all'>
										nothelmconsultancy@gmail.com
									</a>
								</div>
							</div>
							<div className='flex items-center space-x-2'>
								<PhoneIcon className='w-4 h-4 text-gray-300' />
								<a href='tel:0256537727' className='text-gray-300 hover:text-white transition-colors text-sm'>
									0256537727 / 0267881728
								</a>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-lg font-semibold mb-3'>Quick Links</h4>
						<nav>
							<ul className='space-y-2'>
								<li>
									<a href='/' className='text-gray-300 hover:text-white transition-colors text-sm'>
										Home
									</a>
								</li>
								<li>
									<a href='#services' className='text-gray-300 hover:text-white transition-colors text-sm'>
										Services
									</a>
								</li>
								<li>
									<a href='#insights' className='text-gray-300 hover:text-white transition-colors text-sm'>
										Insights
									</a>
								</li>
								<li>
									<a href='#contact' className='text-gray-300 hover:text-white transition-colors text-sm'>
										Contact us
									</a>
								</li>
								<li>
									<a href='/privacy-policy' className='text-gray-300 hover:text-white transition-colors text-sm'>
										Privacy Policy
									</a>
								</li>
								<li>
									<a href='/terms-and-conditions' className='text-gray-300 hover:text-white transition-colors text-sm'>
										Terms & Conditions
									</a>
								</li>
							</ul>
						</nav>
					</div>

					{/* Newsletter */}
					<div>
						<h4 className='text-lg font-semibold mb-3'>Stay Updated</h4>
						<p className='text-gray-300 mb-3 text-sm'>
							Get our latest insights.
						</p>
						
						<form onSubmit={handleNewsletterSubmit} className='space-y-2'>
							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Your email'
								required
								className='w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all text-sm min-h-[44px]'
							/>
							<button
								type='submit'
								className='w-full bg-white text-[#202962] font-semibold py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm min-h-[44px]'
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='border-t border-white/20 pt-4'>
					<div className='flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'>
						{/* Social Media Links */}
						<div className='flex space-x-3'>
							<a
								href='https://www.facebook.com/profile.php?id=61566606916817'
								target='_blank'
								rel='noopener noreferrer'
								className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110'
								aria-label='Facebook'
							>
								<FaFacebookF className='w-4 h-4' />
							</a>
							<a
								href='https://x.com/nothelmconsult'
								target='_blank'
								rel='noopener noreferrer'
								className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-sky-500 transition-all duration-300'
								aria-label='Twitter'
							>
								<FaTwitter className='w-4 h-4' />
							</a>
							<a
								href='https://www.linkedin.com/company/nothelm-consultancy/'
								target='_blank'
								rel='noopener noreferrer'
								className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110'
								aria-label='LinkedIn'
							>
								<FaLinkedinIn className='w-4 h-4' />
							</a>
							<a
								href='https://www.instagram.com/nothelmconsultancy/'
								target='_blank'
								rel='noopener noreferrer'
								className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-110'
								aria-label='Instagram'
							>
								<FaInstagram className='w-4 h-4' />
							</a>
						</div>

						{/* Copyright */}
						<div className='text-center text-gray-300 text-sm'>
							<p>&copy; 2025 Nothelm Consultancy. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
