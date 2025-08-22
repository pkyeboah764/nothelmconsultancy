import PropTypes from 'prop-types';

export default function ExternalLink({ to, children, setOpen }) {
	return (
		<li onClick={() => setOpen && setOpen(false)}>
			<a href={to} className='nav-item' target='_blank'>
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
