import PropTypes from 'prop-types';

export default function Tab({ activeTab, index, setActiveTab, children }) {
	return (
		<button
			onClick={() => setActiveTab(index)}
			className={`${
				activeTab === index ? 'border-b-primary text-primary' : 'text-black'
			}  border-gray-200 transition-all  font-medium border-b-[3px]  px-6 text-start py-2`}
		>
			{children}
		</button>
	);
}

Tab.propTypes = {
	activeTab: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired
};
