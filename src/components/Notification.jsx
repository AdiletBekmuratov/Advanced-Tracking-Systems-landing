import React from 'react'

import { IoSpeedometerOutline } from 'react-icons/io5'
import { BiCar } from 'react-icons/bi'

function Notification() {
	return (
		<div>
			<div className="mb-14">
				<h1 className='text-darkBlue text-4xl font-semibold'>Отправка уведомлений</h1>
			</div>
			<div className="flex flex-col space-y-5 relative">
				<div className='grid grid-cols-1 lg:grid-cols-6 gap-6'>
					<div className="text-5xl text-orange col-span-1 lg:pl-5 lg:border-l-2 border-darkBlue flex items-center">
						<IoSpeedometerOutline />
					</div>
					<div className="col-span-1 lg:col-span-2 lg:pl-5 lg:border-l-2 border-darkBlue">
						<h1 className='text-4xl font-semibold text-darkBlue uppercase'>ПРЕВЫШЕНИЕ СКОРОСТИ</h1>
					</div>
					<div className="col-span-1 lg:col-span-3 lg:pl-5 lg:border-l-2 border-darkBlue">
						<p className="text-xl text-gray-500">
							Система проинформирует о превышении
							скоростии может даже заблокировать двигатель
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-6 gap-6'>
					<div className="text-5xl text-orange col-span-1 lg:pl-5 lg:border-l-2 border-darkBlue flex items-center">
						<BiCar />
					</div>
					<div className="col-span-1 lg:col-span-2 lg:pl-5 lg:border-l-2 border-darkBlue">
						<h1 className='text-4xl font-semibold text-darkBlue uppercase'>ВЫЕЗД ИЗ <br /> ГЕО - ЗОНЫ</h1>
					</div>
					<div className="col-span-1 lg:col-span-3 lg:pl-5 lg:border-l-2 border-darkBlue">
						<p className="text-xl text-gray-500">
							При покидании ТС определенного участка срабатывает мобильное уведомление и может быть заблокирован двигатель
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Notification
