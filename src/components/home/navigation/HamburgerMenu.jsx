import PropTypes from 'prop-types';
import { Sling as Hamburger } from 'hamburger-react';

export default function HamburgerMenu({ open, setOpen }) {
	return (
		<div className={`block lg:hidden relative z-50 transition-opacity duration-300 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
			<Hamburger toggled={open} toggle={setOpen} color="white" size={20} />
		</div>
	);
}

HamburgerMenu.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired
};
