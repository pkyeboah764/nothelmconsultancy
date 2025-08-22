import Logo from '../../Logo';
import NavList from './NavList';
import NavMobile from './NavMobile';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

export default function NavBar() {
	const [open, setOpen] = useState(false);
	return (
		<nav className='w-full absolute z-50 top-0 left-0 flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
			<Logo />
			<NavList />
			<NavMobile open={open} setOpen={setOpen} />
			<HamburgerMenu open={open} setOpen={setOpen} />
		</nav>
	);
}
