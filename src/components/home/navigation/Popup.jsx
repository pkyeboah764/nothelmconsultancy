import PropTypes from 'prop-types';

export default function Popup() {
	return (
		<div className='bg-secondary text-white absolute top-10 left-1/2 -translate-x-1/2'>
			<div className='w-[8px] h-[8px] bg-secondary absolute rotate-45 z-10 -top-1 left-1/2 -translate-x-1/2'></div>
			<ul className=''>
				<PopupItem to='/projects/upcoming'>upcoming projects</PopupItem>
				<PopupItem to='/projects/completed'>completed projects</PopupItem>
			</ul>
		</div>
	);
}

function PopupItem({ to, children }) {
	return (
		<li className='capitalize text-white hover:text-primary block text-[0.85rem] border-b-[1px] border-[#BEBEBE]'>
			<a
				href={to}
				className='px-3 block py-3 text-nowrap font-medium'
				target='_blank'
			>
				{children}
			</a>
		</li>
	);
}

PopupItem.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};
