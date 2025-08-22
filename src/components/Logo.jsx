import { getImageUrl } from '../utils/imageConfig';
import PropTypes from 'prop-types';

export default function Logo({ size }) {
	// Larger logo size for better navbar presence
	const logoStyle = {
		width: '150px',
		height: '150px',
		minWidth: '150px',
		minHeight: '150px',
		display: 'block'
	};

	const imgStyle = {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		display: 'block'
	};

	return (
		<a 
			href='/' 
			className='relative z-10 block'
			style={logoStyle}
		>
			<img
				src={getImageUrl('images/logo.png')}
				alt='Nothelm Logo'
				style={imgStyle}
			/>
		</a>
	);
}

Logo.propTypes = {
	size: PropTypes.string
};
