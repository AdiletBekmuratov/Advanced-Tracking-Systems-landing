
import React from 'react';

const TextSection = () =>  {
	return (
		<>
		<div className="border-4 w-11/12 md:w-3/4">
			<div className="grid grid-cols-1">
				<div className="grid grid-cols-8 items-center">
					<div className="col-span-5"><p className="text-[16px] md:text-[20px] "> <span className="text-orange font-bold">Vasco</span> — программная платформа с web-интерфейсом для спутникового 
							мониторинга транспорта. Контролируйте автомобили, спецтехнику, стационарные объекты, людей. </p></div>
					<div className="col-span-3 object-right">
						<img className="w-3/4 md:w-[250px] mr-0 ml-auto" src="/public/images/map-gps.png"/>
					</div>
				</div>

				<div className="grid grid-cols-8 items-center">
					<div className="col-span-4"><img className="w-5/6 rounded-2xl" src="/public/images/carss.jpg" alt="" /></div>
					<div className="col-span-4"><p className="text-[16px] md:text-[20px]">Дополнительные датчики покажут температуру, вес, наклон, положение механизмов и десятки других 
							параметров мониторинга.</p></div>
				</div>

				<div className="grid grid-cols-8 items-center">
				<div className="col-span-5"><p className="text-[16px] md:text-[20px]"><span className="text-lightGreen font-bold">Wialon</span> – оптимальное решение для интеллектуального GPS мониторинга и управления транспортом. 
					</p></div>
				<div className="col-span-3"><img className="rounded-2xl" src="/public/images/trucks.jpg" /></div>
				</div>
			</div>
		</div>
		</>
	);
}
export default TextSection