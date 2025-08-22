import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { IoIosArrowDropupCircle } from 'react-icons/io';

import Header from '../home/header/Header';
import Footer from '../home/footer/Footer';

export default function PageLayout({ children }) {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<main className='space-y-14'>{children}</main>
			<Footer />
			{isVisible && (
				<div className='fixed bottom-10 right-10 z-50'>
					<IoIosArrowDropupCircle
						className='text-[2rem] md:text-[3rem] cursor-pointer text-primary hover:-translate-y-[0.1rem] transition-all'
						onClick={scrollToTop}
					/>
				</div>
			)}
		</>
	);
}

PageLayout.propTypes = {
	children: PropTypes.node
};
