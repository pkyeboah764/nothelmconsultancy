import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, x: '100%' },
	visible: {
		opacity: 1,
		x: 0
	}
};
export default function FromRight({ children, className }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) mainControls.start('visible');
	}, [isInView, mainControls]);

	return (
		<div ref={ref} className={className}>
			<motion.div
				className='w-full'
				variants={variants}
				initial='hidden'
				animate={mainControls}
				transition={{ duration: 1.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
		</div>
	);
}

FromRight.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};
