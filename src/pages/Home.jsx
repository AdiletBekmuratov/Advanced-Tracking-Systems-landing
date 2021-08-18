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
			</main>
		</>
	);
}
