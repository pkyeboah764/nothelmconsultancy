import PropTypes from 'prop-types';

export default function SubHeading({ styles, children }) {
	return (
		<span className={`uppercase block text-primary font-bold  ${styles}`}>
			{children}
		</span>
	);
}

SubHeading.propTypes = {
	children: PropTypes.string.isRequired,
	styles: PropTypes.string
};
