import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

export default function SocialIcons() {
	return (
		<div className='flex items-center justify-center gap-3 text-base text-secondary'>
			<a
				href=''
				target='_blank'
				rel='noopener noreferrer'
				className='bg-white inline-block rounded-full p-2 text-center hover:-translate-y-1 transition-all'
			>
				<FaLinkedinIn />
			</a>

			<a
				href=''
				target='_blank'
				rel='noopener noreferrer'
				className='bg-white inline-block rounded-full p-2 text-center hover:-translate-y-1 transition-all'
			>
				<AiFillInstagram />
			</a>
			<a
				href=''
				target='_blank'
				rel='noopener noreferrer'
				className='bg-white inline-block rounded-full p-2 text-center hover:-translate-y-1 transition-all'
			>
				<FaXTwitter />
			</a>
		</div>
	);
}
