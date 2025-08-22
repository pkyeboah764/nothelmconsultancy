import NavBar from '../navigation/NavBar';
import Hero from '../hero/Hero';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
	Autoplay
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Header() {
	return (
		<Swiper
			navigation={true}
			pagination={true}
			mousewheel={false}
			autoplay={{ delay: 8000, disableOnInteraction: false }}
			keyboard={true}
			loop={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
		>
			<NavBar />
			<SwiperSlide>
				<Hero
					ctaText='explore our properties'
					ctaLink='#properties'
					bgImage='1.jpg'
				>
					Building the Future of
					<span className='text-primary'> Real Estate </span>
					in Ghana
				</Hero>
			</SwiperSlide>
			<SwiperSlide>
				<Hero ctaText='contact our team' ctaLink='#contact' bgImage='2.jpg'>
					Innovative. Secure. Exceptional
				</Hero>
			</SwiperSlide>
		</Swiper>
	);
}
