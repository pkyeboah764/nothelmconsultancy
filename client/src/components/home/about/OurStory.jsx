import PropTypes from 'prop-types';
import Reveal from '../../utils/animations/Reveal';
import SubHeading from '../SubHeading';

export default function OurStory() {
	return (
		<div className='w-full hidden md:block  md:w-[50%] lg:w-[40%] mx-auto px-5 sm:px-10 lg:px-8 xl:px-20'>
			<SubHeading styles='text-center'>Our Story</SubHeading>

			<div className='relative mt-10'>
				<YearIndicator year='2023' />
				<YearIndicator year='2024' />

				<div className='absolute top-[130px] -translate-x-[calc(50%+47.5px)]'>
					<LeftEventCard
						date='15th August 2023'
						title='The Day We Started'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi justo, efficitur id scelerisque sed, laoreet ac nibh.'
					/>
				</div>
				<div className='absolute top-[200px] translate-x-[calc(50%+47.5px)]'>
					<RightEventCard
						date='20th October 2023'
						title='The Day We Ended'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi justo, efficitur id scelerisque sed, laoreet ac nibh.'
					/>
				</div>
			</div>
		</div>
	);
}

function YearIndicator({ year }) {
	return (
		<div className='flex flex-col items-center'>
			<div className='font-medium bg-primary p-4 md:p-6 lg:p-7 text-lg md:text-xl inline-block'>
				{year}
			</div>
			<div className='w-[1px] h-[400px] bg-primary' />
		</div>
	);
}

YearIndicator.propTypes = {
	year: PropTypes.string.isRequired
};

function LeftEventCard({ date, title, description }) {
	return (
		<div className='relative bg-secondary px-5 py-10 space-y-2 mb-10 text-right'>
			<span className='uppercase text-primary  font-semibold'>{date}</span>
			<h2 className='text-2xl font-medium font-ptSerif'>{title}</h2>
			<p className='text-[0.85rem] md:w-full lg:w-5/6 inline-block '>
				{description}
			</p>
			<div className='absolute -right-[55px] top-5 flex items-center'>
				<div className='w-10 h-[1px] bg-primary'></div>
				<div className='w-[15px] h-[15px] bg-primary rounded-full'></div>
			</div>
		</div>
	);
}
function RightEventCard({ date, title, description }) {
	return (
		<div className='relative bg-secondary px-5 py-10 space-y-2 mb-10 text-left'>
			<span className='uppercase text-primary  font-semibold'>{date}</span>
			<h2 className='text-2xl font-medium font-ptSerif'>{title}</h2>
			<p className='text-[0.85rem] md:w-full lg:w-5/6 inline-block '>
				{description}
			</p>
			<div className='absolute -left-[55px] top-5 flex items-center'>
				<div className='w-[15px] h-[15px] bg-primary rounded-full'></div>
				<div className='w-10 h-[1px] bg-primary'></div>
			</div>
		</div>
	);
}

LeftEventCard.propTypes = {
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

RightEventCard.propTypes = {
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
