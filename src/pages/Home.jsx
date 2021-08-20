import React from 'react';
import Notification from '@/components/Notification';
import ContactUs from '@/components/ContactUs';
import Partners from '@/components/Partners'

export default function Home() {
	return (
		<>
			<main className='bg-white'>
				<section className="w-full h-[400px] sm:h-[600px]" id='alanya' style={{
					backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/images/home1.jpg)`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
				}}>
					<div className='container mx-auto px-6 py-32'>
						<h1 className='text-white font-extrabold text-6xl leading-tight'>Подходящий трекер <br /> для каждого проекта</h1>
					</div>
				</section>

				<section>
					<Notification />
				</section>

				<section>
					<ContactUs />
				</section>

				<section className='flex justify-center py-40 relative'>
					<Partners />
				</section>
			</main>
		</>
	);
}
