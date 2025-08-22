import PropTypes from 'prop-types';

export default function Heading({ children }) {
	return (
		<h2
			className="capitalize font-ivymode font-semibold inline-block text-2xl md:text-3xl relative after:content-[''] 
                    after:block after:absolute after:-bottom-3 after:h-[1.5px] after:bg-primary after:w-[50%]"
		>
			{children}
		</h2>
	);
}
Heading.propTypes = {
	children: PropTypes.node.isRequired
};
