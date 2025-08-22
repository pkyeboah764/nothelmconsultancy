import { useState } from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import ExternalLink from './ExternalLink';
import { IoIosArrowDown } from 'react-icons/io';
import Logo from '../../Logo';

export default function NavMobile({ open, setOpen }) {
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
		<div
			className={`lg:hidden fixed inset-0 bg-gradient-to-br from-[#202962] via-[#1a2252] to-[#151e47] w-full h-screen transition-all duration-500 ease-in-out z-40 ${
				open ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}
		>
			{/* Close Button */}
			<button
				onClick={() => setOpen && setOpen(false)}
				className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 z-50'
			>
				<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
				</svg>
			</button>

			{/* Scrollable Content Container */}
			<div className='h-full overflow-y-auto flex flex-col justify-start pt-20 pb-8'>
				{/* Logo Section */}
				<div className={`flex justify-center mb-8 transition-all duration-700 delay-200 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
					<div className='transform hover:scale-105 transition-transform duration-300 relative z-10'>
						<Logo />
					</div>
				</div>

				{/* Navigation Buttons */}
				<div className={`px-8 mb-8 transition-all duration-700 delay-300 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
					<div className='space-y-3 max-w-sm mx-auto'>
						<a 
							href='/' 
							onClick={() => setOpen && setOpen(false)}
							className='group block w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl px-6 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center'
						>
							<span className='text-xl font-semibold text-white'>Home</span>
						</a>
						<a 
							href='#services' 
							onClick={() => setOpen && setOpen(false)}
							className='group block w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl px-6 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center'
						>
							<span className='text-xl font-semibold text-white'>Services</span>
						</a>
						<a 
							href='#insights' 
							onClick={() => setOpen && setOpen(false)}
							className='group block w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl px-6 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center'
						>
							<span className='text-xl font-semibold text-white'>Insights</span>
						</a>

						<a 
							href='/insights-reports' 
							onClick={() => setOpen && setOpen(false)}
							className='group block w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl px-6 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center'
						>
							<span className='text-xl font-semibold text-white'>Insights & Reports</span>
						</a>
						<a 
							href='#contact' 
							onClick={() => setOpen && setOpen(false)}
							className='group block w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl px-6 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center'
						>
							<span className='text-xl font-semibold text-white'>Contact us</span>
						</a>
					</div>
				</div>

				{/* Contact Information */}
				<div className={`px-8 mb-8 transition-all duration-700 delay-400 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
					<div className='space-y-3 max-w-sm mx-auto'>
						<a 
							href='tel:0256537727' 
							onClick={() => setOpen && setOpen(false)}
							className='group flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105'
						>
							<div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0'>
								<svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/>
								</svg>
							</div>
							<span className='text-base font-medium text-white group-hover:text-white/90'>0256537727 / 0267881728</span>
						</a>
						
						<a 
							href='mailto:admin@nothelmconsultancy.com' 
							onClick={() => setOpen && setOpen(false)}
							className='group flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105'
						>
							<div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0'>
								<svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
								</svg>
							</div>
							<span className='text-base font-medium text-white group-hover:text-white/90 break-all'>admin@nothelmconsultancy.com</span>
						</a>
						
						<a 
							href='mailto:nothelmconsultancy@gmail.com' 
							onClick={() => setOpen && setOpen(false)}
							className='group flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105'
						>
							<div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0'>
								<svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
								</svg>
							</div>
							<span className='text-base font-medium text-white group-hover:text-white/90 break-all'>nothelmconsultancy@gmail.com</span>
						</a>
					</div>
				</div>

				{/* Social Media Links */}
				<div className={`flex justify-center space-x-4 pb-4 transition-all duration-700 delay-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
					<a 
						href='https://www.linkedin.com/company/nothelm-consultancy/' 
						target='_blank' 
						rel='noopener noreferrer'
						onClick={() => setOpen && setOpen(false)}
						className='group w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
					>
						<svg className='w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
						</svg>
					</a>
					<a 
						href='https://x.com/nothelmconsult' 
						target='_blank' 
						rel='noopener noreferrer'
						onClick={() => setOpen && setOpen(false)}
						className='group w-12 h-12 bg-white/10 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
					>
						<svg className='w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
						</svg>
					</a>
					<a 
						href='https://www.facebook.com/profile.php?id=61566606916817' 
						target='_blank' 
						rel='noopener noreferrer'
						onClick={() => setOpen && setOpen(false)}
						className='group w-12 h-12 bg-white/10 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
					>
						<svg className='w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
						</svg>
					</a>
					<a 
						href='https://www.instagram.com/nothelmconsultancy/' 
						target='_blank' 
						rel='noopener noreferrer'
						onClick={() => setOpen && setOpen(false)}
						className='group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
					>
						<svg className='w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

function DropdownItem({ to, children }) {
	return (
		<li className='capitalize font-medium text-white hover:text-primary block text-[0.85rem]'>
			<a href={to} target='_blank'>
				{children}
			</a>
		</li>
	);
}

DropdownItem.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};
NavMobile.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func
};
