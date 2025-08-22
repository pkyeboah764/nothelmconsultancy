import PropTypes from 'prop-types';

export default function BlogPost({
	image,
	title,
	date,
	link,
	category,
	children
}) {
	return (
		<article className='flex flex-col gap-5'>
			<div className='h-[250px] relative overflow-hidden group card z-[1] after:transition-all'>
				<img
					src={image}
					alt='Post visual'
					className='w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-125'
				/>
			</div>
			<div>
				<div className='flex items-center gap-3 text-sm'>
					<span className='text-xs font-semibold uppercase hover:shadow-sm hover:bg-opacity-90 inline-block px-3 py-2 rounded-sm bg-primary text-white'>
						{category}
					</span>
					<span className='font-medium text-xs uppercase'>{date}</span>
				</div>
				<div className='space-y-2 my-3'>
					<h3 className='text-base sm:text-lg font-semibold leading-tight'>
						{title}
					</h3>

					<p className='line-clamp-3 text-sm text-gray-700'>{children}</p>
				</div>

				<a
					href={link}
					target='_blank'
					className='text-xs font-medium uppercase inline-block hover:text-primary'
				>
					Read more
				</a>
			</div>
		</article>
	);
}

BlogPost.propTypes = {
	image: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired
};
