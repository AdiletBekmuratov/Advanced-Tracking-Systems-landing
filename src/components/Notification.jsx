import React, { useEffect } from 'react'

import circle1 from '/images/circle1.jpg'
import circle2 from '/images/circle2.jpg'
import circle3 from '/images/circle3.jpg'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { BiCar } from 'react-icons/bi'

function Notification() {

	return (
		<div>
			<div className='container mx-auto py-10 px-4'>
				<p className='flex justify-center text-orange text-2xl font-semibold'>Отправка уведомлений</p>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div>

					</div>
				</div>
				<div className='flex items-center'>
					<div className='grid grid-cols-2 mt-32'>
						<div>
							<table className='table-auto w-full' >
								<tbody className='w-1/2'>
									<tr>
										<td className='smth'><img className='imgcon' src={circle1} /></td>
										<td className='smth2'><img className='imgcon' src={circle1} /></td>
									</tr>
									<tr className=''>
										<td className='smth3'>
											<img className='imgcon' src={circle1} />
										</td>
									</tr>
								</tbody>

							</table>
						</div>

						<div className='grid grid-cols-1'>

							<div className='flex px-32'>
								<IoSpeedometerOutline className='text-7xl -mt-4 text-orange' />
								<div className='ml-2'>
									<h4 className='text-xl text-orange'>ПРЕВЫШЕНИЕ СКОРОСТИ</h4>
									<p>Система проинформирует о превышении скоростии может даже заблокировать двигатель</p>
								</div>
							</div>

							<div className='flex px-32 mt-10'>
								<BiCar className='text-8xl -mt-8 text-orange' />
								<div className='ml-2'>
									<h4 className='text-xl text-orange'>ВЫЕЗД ИЗ ГЕО - ЗОНЫ</h4>
									<p>При покидании ТС определенного участка срабатывает мобильное уведомление и может быть заблокирован двигатель</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Notification
