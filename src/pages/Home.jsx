import React from 'react';

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

				<section className="container mx-auto px-6 flex justify-center items-center py-24">
					<div className="grid grid-cols-2 md:grid-cols-3 md:w-[950px] gap-4 md:gap-12">
						<div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
							<div className="grid grid-col-1 gap-4 my-6 group-hover:scale-150 transition transform duration-200 ease-out">
								<div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle1.jpg" /></div>
								<div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>Спутниковый мониторинг Vasco</p></div>
							</div>
						</div>
						<div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
							<div className="grid grid-col-1 gap-4 mt-12">
								<div className="flex justify-center"><img className="h-[150px]" src="/public/images/circle2.jpg" /></div>
								<div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>GPS трекеры</p></div>
							</div>
						</div>
						<div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
							<div className="grid grid-col-1 gap-4 my-6">
								<div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle3.jpg" /></div>
								<div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>GPS трекеры для животных</p></div>
							</div>
						</div>
						<div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
							<div className="grid grid-col-1 gap-4 my-6">
								<div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle4.jpg" /></div>
								<div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>In Vehicle Monitoring System (iVMS)</p></div>
							</div>
						</div>
						<div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
							<div className="grid grid-col-1 gap-4 mt-8">
								<div className="flex justify-center"><img className=" object-cover h-[150px]" src="/public/images/circle5.jpg" /></div>
								<div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal mt-4"><p>Датчик уровня топлива  (ДУТ)</p></div>
							</div>
						</div>
						<div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
							<div className="grid grid-col-1 gap-4 my-6">
								<div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle6.jpg" /></div>
								<div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>GPS трекеры для детей</p></div>
							</div>
						</div>
					</div>
				</section>

				<section className="container mx-auto px-6 flex justify-center items-center py-24 border-t-4 border-lightGreen">
					<div className="w-11/12 md:w-3/4">
						<div className="grid grid-cols-1 md:grid-cols-8 items-center">
							<div className="col-span-5"><p className="text-[16px] md:text-[20px] "> <span className="text-orange font-bold">Vasco</span> — программная платформа с web-интерфейсом для спутникового
								мониторинга транспорта. Контролируйте автомобили, спецтехнику, стационарные объекты, людей. </p>
							</div>
							<div className="col-span-3 object-right">
								<img className="w-3/4 md:w-[250px] mr-0 ml-auto" src="/public/images/map-gps.png" />
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-8 items-center">
							<div className="col-span-4"><img className="w-5/6 rounded-2xl" src="/public/images/carss.jpg" alt="" /></div>
							<div className="col-span-4"><p className="text-[16px] md:text-[20px]">Дополнительные датчики покажут температуру, вес, наклон, положение механизмов и десятки других
								параметров мониторинга.</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-8 items-center">
							<div className="col-span-5"><p className="text-[16px] md:text-[20px]"><span className="text-lightGreen font-bold">Wialon</span> – оптимальное решение для интеллектуального GPS мониторинга и управления транспортом.
							</p>
							</div>
							<div className="col-span-3"><img className="rounded-2xl" src="/public/images/trucks.jpg" /></div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
