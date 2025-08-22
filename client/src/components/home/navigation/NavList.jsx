import { useState } from 'react';
import NavLink from './NavLink';
import ExternalLink from './ExternalLink';
import Popup from './Popup';
import { IoIosArrowDown } from 'react-icons/io';

export default function NavList() {
	const [openPopup, setOpenPopup] = useState(false);

	return (
		<ul className='hidden lg:flex items-center space-x-14'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='#services'>Services</NavLink>
			<NavLink to='#insights'>Insights</NavLink>
			<NavLink to='#contact'>Contact us</NavLink>
		</ul>
	);
}
