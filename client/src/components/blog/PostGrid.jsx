import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

export default function PostGrid({ posts }) {
	return (
		<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20'>
			{posts.map((post) => (
				<BlogPost
					image={post.featuredImage}
					category={post.category}
					date={post.date}
					key={post._id}
					link={`/blog/${post._id}`}
					title={post.title}
				>
					{post.summary}
				</BlogPost>
			))}
		</div>
	);
}
PostGrid.propTypes = {
	posts: PropTypes.array
};
