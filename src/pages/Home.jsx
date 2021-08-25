import React from 'react';
import Notification from '@/components/Notification';
import ContactUs from '@/components/ContactUs';
import Partners from '@/components/Partners'
import 'react-lazy-load-image-component/src/effects/blur.css';
import CardMedium from '@/components/CardMedium';
import Carousel from "react-multi-carousel";
import CardSmall from '@/components/CardSmall';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1150, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 770, min: 0 },
		items: 1
	}
};

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
						<h1 className='text-white font-extrabold text-2xl md:text-6xl leading-tight'>Подходящий трекер <br /> для каждого проекта</h1>
						<button className="bg-lightGreen text-white rounded-md px-5 py-3 text-lg md:text-2xl font-semibold mt-6 filter hover:brightness-105 transition duration-100">Связаться</button>
					</div>
				</section>

				<section className="bg-lightGreen">
					<div className="container mx-auto px-6 py-24 flex flex-col justify-center">
						<h1 className="text-white text-4xl font-normal mb-10">Процесс подключения</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex gap-x-4">
								<div className="border-4 border-white rounded-md text-white h-20 w-20 flex items-center justify-center flex-shrink-0">
									<p className="text-6xl font-bold">1</p>
								</div>
								<div className="text-white text-lg md:text-2xl">
									<p>
										GPS-трекер
									</p>
									<p>
										После включения трекер осуществляет
										прием информации от спутников системы
										ГЛОНАСС/GPS, определяет свое
										местоположение, скорость, время и
										устанавливает соединение с сервером
									</p>
								</div>
							</div>
							<div className="flex gap-x-4">
								<div className="border-4 border-white rounded-md text-white h-20 w-20 flex items-center justify-center flex-shrink-0">
									<p className="text-6xl font-bold">2</p>
								</div>
								<div className="text-white text-lg md:text-2xl">
									<p>
										Датчик топлива
									</p>
									<p>
										Считывает и мониторит уровень
										топлива в баке, показывает текущий
										уровень топлива, сливы и заправки.
										Показывает расходы в разрезе холостой
										ход/движение и показывает КПД
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="container mx-auto px-6 py-24">
					<div className="flex mb-10">
						<h1 className='text-5xl text-lightGreen font-semibold'>Оборудования и ПО:</h1>
					</div>
					<div className="flex justify-center items-center">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
							<CardSmall image="/images/circle1.jpg" text='Спутниковый мониторинг Vasco' alt='c1' />
							<CardSmall image="/images/circle2.jpg" text='GPS трекеры' alt='c2' />
							<CardSmall image="/images/circle3.jpg" text='GPS трекеры для животных' alt='c3' />
							<CardSmall image="/images/circle4.jpg" text='In Vehicle Monitoring System (iVMS)' alt='c4' />
							<CardSmall image="/images/circle5.jpg" text='Датчик уровня топлива (ДУТ)' alt='c5' />
							<CardSmall image="/images/circle6.jpg" text='GPS трекеры для детей' alt='c6' />
						</div>
					</div>
				</section>

				<section className="container lg:max-w-6xl mx-auto px-6 py-24 border-t-4 border-lightGreen">
					<Carousel responsive={responsive} infinite={false} itemClass='p-5'>
						<CardMedium
							image='https://images.unsplash.com/photo-1591397932448-e68f94f11b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
							title='Vasco'
							desc='программная платформа с web-интерфейсом для спутникового мониторинга транспорта.'
							alt='card1'
						/>
						<CardMedium
							image='https://images.unsplash.com/photo-1621237675692-fb7f104bd241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&w=1000&q=80'
							title='Особенности'
							desc='Дополнительные датчики покажут температуру, вес, наклон, положение механизмов и десятки других параметров мониторинга.'
							alt='card2'
						/>
						<CardMedium
							image='https://images.unsplash.com/photo-1621237675692-fb7f104bd241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&w=1000&q=80'
							title='Vasco'
							desc='программная платформа с web-интерфейсом для спутникового мониторинга транспорта.'
							alt='card3'
						/>
					</Carousel>
				</section>

				<section>
					<Notification />
				</section>

				<section>
					<ContactUs />
				</section>

				<section className='container mx-auto px-6 py-24'>
					<Partners />
				</section>
			</main >
		</>
	);
}
