import React from 'react'

function ContactUs() {
	return (
		<div className='py-10'>

			<div className='grad w-full h-[700px]' style={{
				backgroundImage: `linear-gradient(90deg,rgba(0, 87, 117, 0.6), rgba(0, 87, 117, 0.6)), url(/images/Track.png)`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
			}}>
				<div className="flex flex-col max-w-6xl mx-auto py-56 md:flex-row">
					<div className="w-full mb-8 text-white md:w-1/2 md:px-6 sm:px-10 sm:-translate-y-16">
						<h2 className="font-medium mb-8"> Заполните форму </h2>
						<p className="text-lg mb-6">Оставьте заявку на нашем сайте и узнайте больше о нашем GPS програмном обеспечении!	</p>
						<p className="text-lg">Мы свяжемся с вами в ближайшее время.</p>
					</div>
					<div className="w-full md:w-1/2 md:pl-16 md:px-3 h-full sm:-translate-y-16 sm:px-10 ">
						<form>
							<div className="mb-8">
								<input type="text" placeholder='Ваше Имя' name="username" className="placeholder-gray-500 border-1 border-lightBlue rounded-xl px-3 py-2.5 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="email" placeholder='E-mail' name='email' className="placeholder-gray-500 border-1 border-lightBlue rounded-xl px-3 py-2.5 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="text" placeholder='Телефон' name='phone' className="placeholder-gray-500 border-1 border-lightBlue rounded-xl px-3 py-2.5 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mt-6 flex flex-row justify-between">
								<button className={`rounded-xl px-8 py-2 font-bold text-white text-lg bg-darkBlue shadow-lg hover:shadow-xl transition duration-200 ease-out`} type='submit'> Отправить </button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUs
