import PropTypes from 'prop-types';

export default function CoreValue({ icon, value, styles }) {
	return (
		<div
			className={`space-y-2 flex flex-col items-center justify-center ${styles}`}
		>
			<div className='w-24 h-24 group hover:bg-transparent border-primary transition-all rounded-full flex items-center justify-center border-2 bg-primary'>
				{icon}
			</div>
			<div className='flex flex-col [&>div]:w-[1.5px] [&>div]:h-1 [&>div]:bg-white items-center gap-1'>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
			<h3 className='uppercase text-[0.85rem] text-nowrap font-semibold text-white'>
				{value}
			</h3>
		</div>
	);
}

CoreValue.propTypes = {
	icon: PropTypes.node.isRequired,
	value: PropTypes.string.isRequired,
	styles: PropTypes.string
};
