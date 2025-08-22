import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  BuildingOfficeIcon, 
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import ConsultationPopup from '../../shared/ConsultationPopup';

const services = [
	{
		icon: BriefcaseIcon,
		title: 'Business Advisory and Support',
		description: 'We provide strategic guidance and hands-on support to help businesses establish, operate, manage and undertake projects effectively.',
		features: [
			'Expert advice on regulatory compliance',
			'Risk management and contract management',
			'Building strategic stakeholder relationships',
			'Market entry planning and execution'
		],
		color: 'blue'
	},
	{
		icon: BuildingOfficeIcon,
		title: 'Real Estate Advisory',
		description: 'We provide advisory services designed to offer comprehensive, seamless support for clients navigating Ghana\'s real estate market.',
		features: [
			'Due diligence audits on real estate assets',
			'Advisory, review and negotiation of transactions',
			'Transaction and client management for developers',
			'Market research and property evaluation'
		],
		color: 'green'
	},
	{
		icon: CogIcon,
		title: 'Project Advisory',
		description: 'We provide advisory services to businesses operating in civil, mechanical, mining and electrical engineering sectors in Ghana.',
		features: [
			'Project consultancy and financing',
			'Stakeholder engagements',
			'Regulatory compliance guidance',
			'Transactional advisory services'
		],
		color: 'purple'
	}
];

const colorVariants = {
	blue: {
		bg: 'bg-[#202962]/5',
		border: 'border-[#202962]/20',
		icon: 'text-[#202962]',
		iconBg: 'bg-[#202962]/10',
		button: 'bg-[#202962] hover:bg-[#1a2252]'
	},
	green: {
		bg: 'bg-[#202962]/5',
		border: 'border-[#202962]/20',
		icon: 'text-[#202962]',
		iconBg: 'bg-[#202962]/10',
		button: 'bg-[#202962] hover:bg-[#1a2252]'
	},
	purple: {
		bg: 'bg-[#202962]/5',
		border: 'border-[#202962]/20',
		icon: 'text-[#202962]',
		iconBg: 'bg-[#202962]/10',
		button: 'bg-[#202962] hover:bg-[#1a2252]'
	}
};

export default function Services() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	return (
		<>
			<section id='services' className='py-12 sm:py-16 relative overflow-hidden'>
				{/* Background Image */}
				<div 
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: `url('/images/home/services/services-bg.jpg')`,
					}}
				></div>
				<div className='absolute inset-0 bg-gradient-to-br from-white/40 via-white/50 to-white/30'></div>
				
				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-6 sm:mb-8'
					>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4'>
							Our Services
						</h2>
						<div className='w-16 sm:w-20 h-1 bg-[#202962] mx-auto mb-4 sm:mb-6'></div>
						<div className='max-w-4xl mx-auto space-y-3 sm:space-y-4'>
							<p className='text-lg sm:text-xl text-gray-700 leading-relaxed'>
								Doing business and undertaking projects in Africa require a strategic plan based on an understanding of the landscape, opportunity, regulations and risks.
							</p>
							<p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
								We help our clients to appreciate and adapt to the landscape and make informed decisions by providing consultancy, advisory and support tailored to their needs. From business operations, large-scale infrastructure to high-potential growth ventures, our team supports clients through the complexity of launching and scaling businesses and projects in Ghana.
							</p>
						</div>
					</motion.div>

					{/* Services Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8'>
						{services.map((service, index) => {
							const colors = colorVariants[service.color];
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full flex flex-col`}
								>
									<div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0`}>
										<service.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.icon}`} />
									</div>
									
									<h3 className='text-responsive-xl font-bold text-gray-900 mb-2 sm:mb-3'>
										{service.title}
									</h3>
									
									<p className='text-responsive-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed flex-grow'>
										{service.description}
									</p>
									
									<ul className='space-y-1 sm:space-y-2'>
										{service.features.map((feature, i) => (
											<li key={i} className='flex items-start space-x-2 sm:space-x-3'>
												<CheckCircleIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.icon} mt-0.5 flex-shrink-0`} />
												<span className='text-responsive-xs text-gray-700'>{feature}</span>
											</li>
										))}
									</ul>
								</motion.div>
							);
						})}
					</div>

					{/* CTA Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className='bg-gradient-to-r from-[#202962] to-[#1a2252] rounded-2xl p-5 sm:p-6 md:p-8 text-center text-white'
					>
						<h3 className='text-responsive-2xl font-bold mb-2 sm:mb-3'>
							Ready to Get Started?
						</h3>
						<p className='text-responsive-lg mb-4 sm:mb-6 opacity-90 max-w-3xl mx-auto'>
							We offer practical guidance at every stage of a business or project from planning market entry to preparing to implement a project.
						</p>
						<button 
							onClick={() => setIsPopupOpen(true)}
							className='bg-white text-[#202962] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
						>
							Request for a Consultation
						</button>
					</motion.div>
				</div>
			</section>

			{/* Consultation Popup */}
			<ConsultationPopup 
				isOpen={isPopupOpen} 
				onClose={() => setIsPopupOpen(false)} 
			/>
		</>
	);
}
