import PropTypes from 'prop-types';

export default function ExternalLink({ to, children, setOpen }) {
	return (
		<li onClick={() => setOpen(false)}>
			<a
				href={to}
				className='capitalize font-medium hover:text-primary transition-all'
				target='_blank'
			>
				{children}
			</a>
		</li>
	);
}

ExternalLink.propTypes = {
	to: PropTypes.string,
	setOpen: PropTypes.func,
	children: PropTypes.node
};
