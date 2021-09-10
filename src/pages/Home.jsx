import React from 'react';
import Notification from '@/components/Notification';
import ContactUs from '@/components/ContactUs';
import Partners from '@/components/Partners'
import 'react-lazy-load-image-component/src/effects/blur.css';
import CardSmall from '@/components/CardSmall';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import trackIMG from '/images/gps-track.png'
import { MdComputer } from 'react-icons/md'
import { IoCarSport } from 'react-icons/io5'

export default function Home() {
	return (
		<>
			<Toaster
				position="top-right"
				reverseOrder={false}
			/>
			<Header />

			<main className='bg-white'>
				<section className="w-full h-[400px] sm:h-[600px]" id='top' style={{
					backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/images/home1.jpg)`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
				}}>
					<div className='container lg:max-w-6xl mx-auto px-6 py-32'>
						<h1 className='text-white font-extrabold text-2xl md:text-6xl leading-tight'>Решение для спутникового мониторинга и IoT</h1>
						<a href='/#contactUs' >
							<button className="bg-lightGreen text-white rounded-md px-5 py-3 text-lg md:text-2xl mt-6 font-semibold filter hover:brightness-105 transition duration-100">
								Связаться
							</button>
						</a>
					</div>
				</section>

				<section className="container lg:max-w-6xl mx-auto px-6 py-24" id='equipments'>
					<div className="flex mb-10">
						<h1 className='text-2xl md:text-3xl text-darkBlue font-semibold'>Оборудования и ПО</h1>
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

				<section className="container lg:max-w-6xl mx-auto px-6 py-24 border-t-4 border-lightGreen" id='service'>
					<div className="flex mb-10">
						<h1 className='text-2xl md:text-3xl text-darkBlue font-semibold'>Услуги и возможности</h1>
					</div>
					<div className="flex justify-center items-center space-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
							<div className='flex flex-col items-center justify-center space-y-6'>
								<div className='flex space-x-6'>
									<div className='text-4xl text-darkBlue'>
										<MdComputer />
									</div>
									<div className='text-lg'>
										<strong className='text-darkBlue'>Vasco</strong> — программная платформа с
										web-интерфейсом для <strong className='text-darkBlue'>спутникового
											мониторинга транспорта</strong>. Система
										обладает рядом функций, присущих
										ПО для мониторинга и управления
										автопарками.
									</div>
								</div>
								<div className='flex space-x-6'>
									<div className='text-4xl text-darkBlue'>
										<IoCarSport />
									</div>
									<div className='text-lg'>
										Контролируйте автомобили,
										спецтехнику, стационарные объекты,
										людей – для каждого проекта
										найдется подходящий трекер. А
										дополнительные датчики покажут
										температуру, вес, наклон, положение
										механизмов и десятки других
										параметров мониторинга.
									</div>
								</div>
							</div>
							<div className='flex justify-center items-center'>
								<img src={trackIMG} alt="trackIMG" />
							</div>
						</div>
					</div>
				</section>

				<section className="bg-lightGreen" id='process'>
					<div className="container lg:max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center">
						<h1 className="text-white text-3xl font-normal mb-10">Процесс подключения</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex gap-x-4">
								<div className="border-4 border-white rounded-md text-white h-16 w-16 flex items-center justify-center flex-shrink-0">
									<p className="text-4xl font-bold">1</p>
								</div>
								<div className="text-white text-lg md:text-xl">
									<p>
										GPS-трекер
									</p>
									<p className='text-lg'>
										После включения трекер осуществляет
										прием информации от спутников системы
										ГЛОНАСС/GPS, определяет свое
										местоположение, скорость, время и
										устанавливает соединение с сервером
									</p>
								</div>
							</div>
							<div className="flex space-x-4">
								<div className="border-4 border-white rounded-md text-white h-16 w-16 flex items-center justify-center flex-shrink-0">
									<p className="text-4xl font-bold">2</p>
								</div>
								<div className="text-white text-lg md:text-xl">
									<p>
										Датчик топлива
									</p>
									<p className='text-lg'>
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

				<section className="container lg:max-w-6xl mx-auto px-6 py-24" id='notification'>
					<Notification />
				</section>

				<section id='contactUs'>
					<ContactUs />
				</section>

				<section className='container lg:max-w-6xl mx-auto px-6 py-24' id='partners'>
					<Partners />
				</section>
			</main >

			<Footer />
		</>
	);
}
