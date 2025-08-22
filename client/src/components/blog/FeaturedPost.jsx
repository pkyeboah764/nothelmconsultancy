import PropTypes from 'prop-types';

export default function FeaturedPost({ post }) {
	return (
		<div div className='lg:flex gap-10'>
			<div className='w-full h-auto lg:w-1/2'>
				<img
					src={post.featuredImage}
					alt={post.title}
					className='w-full h-full object-cover object-center'
				/>
			</div>
			<div className='mt-5 lg:w-2/3'>
				<span className='text-xs font-semibold uppercase hover:shadow-sm hover:bg-opacity-90 inline-block px-3 py-2 rounded-sm bg-primary text-white'>
					{post.category}
				</span>
				<h3 className='font-semibold leading-snug text-2xl md:text-3xl my-3'>
					{post.title}
				</h3>
				<p className='leading-relaxed mb-2 text-sm line-clamp-5'>
					{post.summary}
				</p>
				<a
					href={`/blog/${post._id}`}
					target='_blank'
					rel='noopener noreferrer'
					className='text-xs font-medium uppercase inline-block hover:text-primary'
					aria-label={`Read more about ${post.title}`}
				>
					Read more
				</a>
			</div>
		</div>
	);
}

FeaturedPost.propTypes = {
	post: PropTypes.object
};
