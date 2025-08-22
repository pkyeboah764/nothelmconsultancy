import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
export default function ServiceCard({ number, title, children }) {
	const [expandService, setExpandService] = useState(false);

	return (
		<div
			className='self-start space-y-3 cursor-pointer transition-all py-3 px-5 lg:py-5 border-t border-b hover:bg-[#5C7D61] hover:border-[#5C7D61] border-white rounded-sm text-white hover:text-primary'
			onClick={() => setExpandService((expandService) => !expandService)}
		>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-6'>
					<h2 className='text-5xl lg:text-6xl font-ivymode'>{number}</h2>
					<h3 className='font-ptSerif font-medium text-lg lg:text-xl'>
						{title}
					</h3>
				</div>
				<IoIosArrowDown
					className={`text-2xl transition-all ease-in ${
						expandService && 'rotate-180'
					} `}
				/>
			</div>

			<div
				className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
					expandService ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
				} space-y-2`}
			>
				{children}
			</div>
		</div>
	);
}

ServiceCard.propTypes = {
	number: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};
