import PropTypes from 'prop-types';

export default function Link({ ctaText, ctaLink }) {
	return (
		<div className='flex group justify-center items-center gap-3'>
			<div className='w-8 md:w-14 h-[1px] bg-white group-hover:bg-primary group-hover:w-0 transition-all duration-300' />
			<a
				href={ctaLink}
				className='uppercase  font-medium text-[0.85rem] sm:text-base group-hover:text-primary transition-all'
			>
				{ctaText}
			</a>
			<div className='w-8 md:w-14 h-[1px] bg-white group-hover:bg-primary group-hover:w-0 transition-all duration-300' />
		</div>
	);
}

Link.propTypes = {
	ctaText: PropTypes.string.isRequired,
	ctaLink: PropTypes.string.isRequired
};
