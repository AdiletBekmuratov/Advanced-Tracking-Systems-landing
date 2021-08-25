import React from 'react'

import { IoSpeedometerOutline } from 'react-icons/io5'
import { BiCar } from 'react-icons/bi'
import { AiOutlineCaretRight } from 'react-icons/ai'

function Notification() {

	return (
		<div>
			<div className="mb-16">
				<h1 className='text-darkBlue text-4xl font-semibold'>Отправка уведомлений</h1>
			</div>
			<div className='flex flex-col space-y-5'>
				<div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
					<div className="text-4xl text-orange col-span-1">
						<IoSpeedometerOutline />
					</div>
					<div className="col-span-5 lg:col-span-4">
						<h1 className='text-4xl font-semibold text-darkBlue uppercase'>ПРЕВЫШЕНИЕ СКОРОСТИ</h1>
					</div>
					<div className="col-span-5 lg:col-span-4">
						<p className="text-xl text-gray-500">
							Система проинформирует о превышении
							скоростии может даже заблокировать двигатель
						</p>
					</div>
					<div className="text-4xl text-orange col-span-1 hidden lg:col-span-3 md:flex items-center">
						<AiOutlineCaretRight />
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
					<div className="text-4xl text-orange col-span-1">
						<BiCar />
					</div>
					<div className="col-span-5 lg:col-span-4">
						<h1 className='text-4xl font-semibold text-darkBlue uppercase'>ВЫЕЗД ИЗ <br /> ГЕО - ЗОНЫ</h1>
					</div>
					<div className="col-span-5 lg:col-span-4">
						<p className="text-xl text-gray-500">
							При покидании ТС определенного участка срабатывает мобильное уведомление и может быть заблокирован двигатель
						</p>
					</div>
					<div className="text-4xl text-orange col-span-1 hidden lg:col-span-3 md:flex items-center">
						<AiOutlineCaretRight />
					</div>
				</div>
			</div>
		</div >
	)
}

export default Notification
