import PropTypes from 'prop-types';

export default function Topic({ children, onClick, className }) {
	return (
		<li
			className={`border-[1.3px] capitalize px-5 py-2 inline-block rounded-full font-medium text-[0.8rem] cursor-pointer ${className}`}
			onClick={onClick}
		>
			{children}
		</li>
	);
}

Topic.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string
};
