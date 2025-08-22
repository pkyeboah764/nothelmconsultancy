import PropTypes from 'prop-types';

export default function NavLink({ to, children, setOpen }) {
	return (
		<li onClick={() => setOpen && setOpen(false)}>
			<a href={to} className='nav-item'>
				{children}
			</a>
		</li>
	);
}

NavLink.propTypes = {
	to: PropTypes.string,
	setOpen: PropTypes.func,
	children: PropTypes.node
};
