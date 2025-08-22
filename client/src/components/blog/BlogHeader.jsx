import HeroLogo from '../HeroLogo';
import Reveal from '../../utils/animations/Reveal';
import { getImageUrl } from '../../utils/imageConfig';

export default function BlogHeader() {
	return (
		<header
			style={{
				backgroundImage: `url(${getImageUrl('images/blog/hero.jpg')})`
			}}
			className='flex items-center justify-center bg-cover bg-center h-[400px] sm:h-[500px] md:h-[700px] lg:h-[598px] bg-black bg-blend-multiply bg-opacity-[40%] relative'
		>
			{/* Logo positioned absolutely outside nav constraints */}
			<div className='absolute top-5 left-5 z-50'>
				<HeroLogo />
			</div>
			<nav className='flex items-center justify-between absolute top-0 left-0 w-full py-10 px-5 md:px-16 lg:px-8 xl:px-20'>
				{/* Empty space where logo was */}
				<div></div>
			</nav>
			<Reveal>
				<p className='text-primary sm:text-lg uppercase text-center font-medium mb-5'>
					Home
				</p>
				<h1 className='font-medium font-ivymode text-3xl sm:text-4xl lg:text-5xl capitalize text-center'>
					Blog
				</h1>
			</Reveal>
		</header>
	);
}
