import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  ArrowDownTrayIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function About() {
	const features = [
		{
			icon: GlobeAltIcon,
			title: "Strategic Advisory",
			description: "Comprehensive business advisory across Africa with focus on Ghana"
		},
		{
			icon: BuildingOfficeIcon,
			title: "Real Estate Expertise",
			description: "Specialized advisory for real estate investments and transactions"
		},
		{
			icon: ChartBarIcon,
			title: "Infrastructure Projects",
			description: "Project consultancy and financing solutions for infrastructure"
		},
		{
			icon: ShieldCheckIcon,
			title: "Risk Management",
			description: "Effective risk assessment and management strategies"
		},
		{
			icon: UserGroupIcon,
			title: "Stakeholder Engagement",
			description: "Expert guidance in stakeholder relations and negotiations"
		}
	];

	return (
		<section id='about' className='py-12 sm:py-16 relative overflow-hidden'>
			{/* 
				IMAGE BACKGROUND SUGGESTION #2: About Section
				Recommended image: Professional African business environment, modern office, or Ghana landmarks
				Image should be: 1920x800px, showing professionalism and African business context
				Alternative: Abstract corporate graphics, team collaboration, or modern architecture
			*/}
			<div 
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: `url('/api/placeholder/1920/800')`, // Replace with your image
				}}
			>
				<div className='absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90'></div>
			</div>
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
						Who We Are
					</h2>
					<div className='w-24 h-1 bg-[#202962] mx-auto mb-8'></div>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='space-y-4 sm:space-y-5'
					>
						<div className='prose prose-lg text-gray-700 leading-relaxed'>
							<p className='text-xl mb-4'>
								<strong className='text-gray-900'>Nothelm Consultancy</strong> is a business consultancy firm that provides advisory in the form of strategic support and practical insights for clients looking to do business and invest in Ghana, specifically in the areas of our specialisation.
							</p>
							
							<p className='mb-4'>
								Our operational advantage in Ghana and areas where our partners operate have provided us the experience to be able to appreciate the opportunities, the risks, the gaps and the challenges in entering, investing and operating in Ghana and those areas.
							</p>
							
							<p className='mb-4'>
								We have a focus on business advisory and strategic consulting projects, and we have set up a formidable division, <strong className='text-[#202962]'>Nothelm Consultancy & Advisory</strong>, made up of consultants who are adept at assisting clients with advisory and support on business development and strategic consulting projects in Ghana.
							</p>
							
							<div className='bg-[#202962]/5 border-l-4 border-[#202962] p-4 my-6'>
								<p className='text-[#202962] font-medium italic'>
									"At the centre of our strategy for service delivery is a simple aspiration: to be a consultancy firm that is respected for the provision of excellent advisory and effective risk management to businesses on matters requiring specialized and detailed expertise."
								</p>
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
						>
							<a 
								href='https://bit.ly/4lFI6Ao' 
								target='_blank' 
								rel='noopener noreferrer'
								className='inline-flex items-center px-8 py-4 bg-[#202962] hover:bg-[#1a2252] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
							>
								<ArrowDownTrayIcon className='w-5 h-5 mr-2' />
								Download Profile
							</a>
						</motion.div>
					</motion.div>

					{/* Features Grid */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className='grid grid-cols-1 sm:grid-cols-2 gap-6'
					>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 * index }}
								viewport={{ once: true }}
								className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#202962]/20'
							>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0'>
										<div className='w-12 h-12 bg-[#202962]/10 rounded-lg flex items-center justify-center'>
											<feature.icon className='w-6 h-6 text-[#202962]' />
										</div>
									</div>
									<div>
										<h3 className='font-semibold text-gray-900 mb-2'>
											{feature.title}
										</h3>
										<p className='text-gray-600 text-sm leading-relaxed'>
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>


			</div>
		</section>
	);
}
