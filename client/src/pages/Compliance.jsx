import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  BellIcon, 
  ArrowLeftIcon 
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Compliance() {
	return (
		<section className='min-h-screen relative overflow-hidden flex items-center justify-center'>
			{/* 
				IMAGE BACKGROUND SUGGESTION: Compliance Coming Soon Page
				Recommended image: Legal compliance, professional consultation, or regulatory environment
				Image should be: 1920x1080px, showing compliance, legal, or regulatory context
				Alternative: Professional meeting, legal documents, or abstract compliance graphics
			*/}
			<div 
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: `url('/api/placeholder/1920/1080')`, // Replace with your image
				}}
			>
				<div className='absolute inset-0 bg-[#202962]/80'></div>
			</div>

			<div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					{/* Icon */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-white/20'
					>
						<ClockIcon className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white' />
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6'
					>
						Coming Soon
					</motion.h1>

					{/* Subtitle */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-white/90'
					>
						Compliance
					</motion.h2>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.6 }}
						className='text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 text-white/80 leading-relaxed max-w-2xl mx-auto px-2'
					>
						We're developing comprehensive compliance guides and regulatory updates to help you 
						navigate the complex regulatory landscape across African markets.
					</motion.p>

					{/* Notification */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						className='bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20 mx-2 sm:mx-0'
					>
						<div className='flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4'>
							<BellIcon className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
							<span className='text-base sm:text-lg font-semibold'>Get Notified</span>
						</div>
						<p className='text-white/80 mb-3 sm:mb-4 text-sm sm:text-base px-2'>
							Stay updated with the latest compliance requirements and regulatory changes.
						</p>
						<button className='bg-white text-[#202962] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto'>
							Notify Me
						</button>
					</motion.div>


				</motion.div>
			</div>
		</section>
	);
}