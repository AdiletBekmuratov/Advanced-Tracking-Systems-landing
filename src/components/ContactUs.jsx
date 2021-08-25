import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

function ContactUs() {
	const [loading, setLoading] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		setLoading(true)
		toast.promise(emailjs.sendForm('service_sf50y1r', 'template_t85mqmc', event.target, 'user_0w8aCAe7lmOPhtRiTxmLt'), {
			loading: 'Отправка...',
			success: 'Мы свяжемся с вами в ближайшее время!',
			error: 'Произошла ошибка',
		});

		event.tager.phone.value = ''
		event.tager.username.value = ''
		event.tager.email.value = ''

		setLoading(false)
	}

	return (
		<div className='grad w-full h-[700px] px-6 flex items-center' style={{
			backgroundImage: `linear-gradient(90deg,rgba(0, 87, 117, 0.6), rgba(0, 87, 117, 0.6)), url(/images/Track.png)`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			width: '100%',
		}}>
			<div className="container flex flex-col lg:max-w-6xl mx-auto py-56 md:flex-row">
				<div className="w-full mb-8 text-white md:w-1/2 md:px-6 sm:px-10 sm:-translate-y-16">
					<h2 className="text-lg md:text-4xl font-medium mb-8"> Заполните форму </h2>
					<p className="text-base md:text-xl mb-6">Оставьте заявку на нашем сайте и узнайте больше о нашем GPS програмном обеспечении!	</p>
					<p className="text-base md:text-xl">Мы свяжемся с вами в ближайшее время.</p>
				</div>
				<div className="w-full md:w-1/2 md:pl-16 md:px-3 h-full sm:-translate-y-16 sm:px-10 ">
					<form onSubmit={handleSubmit}>
						<div className="mb-8">
							<input type="text" placeholder='Ваше Имя' name="username" className="placeholder-gray-500 border-1 border-lightBlue rounded-xl px-3 py-2.5 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
						</div>
						<div className="mb-8">
							<input type="email" placeholder='E-mail' name='email' className="placeholder-gray-500 border-1 border-lightBlue rounded-xl px-3 py-2.5 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
						</div>
						<div className="mb-8">
							<input type="tel" placeholder='Телефон' name='phone'
								className="placeholder-gray-500 border-1 border-lightBlue rounded-xl px-3 py-2.5 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400"
								required={true} />
						</div>
						<div className="mt-6 flex flex-row justify-between">
							<button className={`rounded-xl px-8 py-4 font-bold text-white text-lg bg-darkBlue shadow-lg hover:shadow-xl transition duration-200 ease-out filter ${loading ? 'grayscale' : 'grayscale-0'}`} type='submit' disabled={loading} > Отправить </button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactUs
