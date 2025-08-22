import PropTypes from 'prop-types';

export default function FooterLink({ to, children }) {
	return (
		<li>
			<a
				href={to}
				className='capitalize font-medium hover:text-primary transition-all'
			>
				{children}
			</a>
		</li>
	);
}

FooterLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired
};
