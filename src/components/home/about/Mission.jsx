import Reveal from '../../../utils/animations/Reveal';
import Heading from '../../Heading';
import SubHeading from '../../SubHeading';

import CoreValue from './CoreValue';
import { FaHandshake } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';
import { FaPeopleCarry } from 'react-icons/fa';

const assetUrl = import.meta.env.VITE_S3_BUCKET_URL;

export default function Mission() {
	return (
		<div className='xl:flex items-center justify-center xl:h-[500px] space-y-10 xl:space-y-0 bg-secondary relative triangle-top-left triangle-bottom-right px-5 sm:px-10 md:px-16 lg:px-10 py-20 xl:py-0'>
			<div className='xl:w-1/2'>
				<Reveal>
					<div>
						<Heading>Our mission Statement</Heading>

						<p className='mt-10 leading-relaxed'>
							Africa's real estate market presents an opportunity to achieve
							diversification and global growth exposure for real estate
							investments. Our mission is to assist our clients and stakeholders
							to be able to invest and participate sustainably in the various
							real estate opportunities available in Africa, particularly Ghana,
							whilst mitigating potential risks that can derail such potential
							transactions and projects.We continue to achieve this by serving
							as partners, project supervisors, developers, advisors on various
							projects and transactions.
						</p>
					</div>
				</Reveal>
			</div>
			<div className='w-full xl:w-1/2 flex flex-col gap-10'>
				<SubHeading styles='text-center text-lg'>Our Core Values</SubHeading>
				<div className='flex items-center justify-center'>
					<div className='grid grid-cols-2 gap-20 sm:flex xl:gap-10'>
						<CoreValue
							styles='translate-y-10'
							icon={
								<FaHandshake className='text-2xl sm:text-3xl text-white group-hover:text-white' />
							}
							value='partnership'
						/>

						<CoreValue
							icon={
								<FaBalanceScale className='text-2xl sm:text-3xl text-white group-hover:text-white' />
							}
							value='fairness'
						/>

						<CoreValue
							styles='translate-y-10'
							icon={
								<GiLightBulb className='text-2xl sm:text-3xl text-white group-hover:text-white' />
							}
							value='innovation'
						/>

						<CoreValue
							icon={
								<FaPeopleCarry className='text-2xl sm:text-3xl text-white group-hover:text-white' />
							}
							value='team work'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
