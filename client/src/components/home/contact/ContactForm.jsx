import PropTypes from 'prop-types';
import Reveal from '../../../utils/animations/Reveal';
import Heading from '../../Heading';

export default function ContactForm() {
	return (
		<Reveal>
			<form className=''>
				<div className='mb-5 md:flex gap-5 items-center'>
					<FormInput
						label='First Name*'
						labelFor='firstName'
						type='text'
						name='firstName'
						id='firstName'
						placeholder='Enter your first name'
						style='mb-5 md:mb-0'
					/>
					<FormInput
						label='Last Name*'
						labelFor='lastName'
						type='text'
						name='lastName'
						id='lastName'
						placeholder='Enter your last name'
					/>
				</div>
				<FormInput
					label='Email*'
					labelFor='email'
					type='email'
					name='email'
					id='email'
					placeholder='Enter your email'
					style='mb-5'
				/>
				<FormInput
					label='Phone*'
					labelFor='phone'
					type='text'
					name='phone'
					id='phone'
					placeholder='Enter your phone number'
					style='mb-5'
				/>
				<div className='mb-5'>
					<label
						htmlFor='message'
						className='block mb-2 text-[0.9rem] font-medium'
					>
						Select a service*
					</label>
					<select
						name='service'
						id='service'
						className='appearance-none bg-transparent text-[0.9rem] relative cursor-pointer custom-select transition-all bg-white border-[#D9D9D9] border-2 w-full focus:border-primary text-[#1e1e1e] focus:outline-none rounded-sm px-6 py-3 [&>option]:bg-white [&>option]:text-[#1e1e1e]'
					>
						<option value='property-development'>Property Development</option>
						<option value='brokerage'>Brokerage</option>
					</select>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='message'
						className='block mb-2 text-[0.9rem] font-medium'
					>
						Message
					</label>

					<textarea
						name='message'
						id='message'
						placeholder='Your message'
						rows={5}
						cols={30}
						className='resize-none w-full text-[0.9rem] text-[#1e1e1e] border-[#D9D9D9] border-2 focus:border-primary placeholder-[#424242] focus:outline-none  rounded-sm px-6 py-3'
					></textarea>
				</div>

				<button
					type='submit'
					className='bg-primary text-[0.9rem] font-medium px-8 py-4 hover:shadow-md hover:-translate-y-[0.1rem] rounded-sm hover:opacity-95 transition-all inline-block text-center'
				>
					Send
				</button>
			</form>
		</Reveal>
	);
}

function FormInput({ label, labelFor, style, ...otherProps }) {
	return (
		<div className='w-full'>
			<label
				htmlFor={labelFor}
				className='block mb-2 text-[0.9rem] font-medium'
			>
				{label}
			</label>
			<input
				{...otherProps}
				className={`appearance-none text-[0.9rem] bg-white border-[#D9D9D9] border-2 w-full transition-all focus:border-primary text-[#1e1e1e] placeholder-[#424242] focus:outline-none rounded-sm px-6 py-3 ${style}`}
			/>
		</div>
	);
}

FormInput.propTypes = {
	label: PropTypes.string,
	labelFor: PropTypes.string,
	style: PropTypes.string,
	otherProps: PropTypes.any
};
