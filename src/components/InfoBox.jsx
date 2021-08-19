import React, { useState } from "react";

const InfoBox = () => {
	return (
		<>
      <div className="md-auto content-center">
        <div className="grid grid-cols-2 md:grid-cols-3 md:w-[950px] gap-4 md:gap-12">
          <div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
            <div className="grid grid-col-1 gap-4 my-6 group-hover:scale-150 transition transform duration-200 ease-out">
              <div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle1.jpg"  /></div>
              <div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>Спутниковый мониторинг Vasco</p></div>
            </div>
          </div>
          <div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
            <div className="grid grid-col-1 gap-4 mt-12">
              <div className="flex justify-center"><img className="h-[150px]" src="/public/images/circle2.jpg"  /></div>
              <div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>GPS трекеры</p></div>
            </div>
          </div>
          <div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
            <div className="grid grid-col-1 gap-4 my-6">
              <div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle3.jpg"  /></div>
              <div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>GPS трекеры для животных</p></div>
            </div>
          </div>
          <div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
            <div className="grid grid-col-1 gap-4 my-6">
              <div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle4.jpg"  /></div>
              <div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>In Vehicle Monitoring System (iVMS)</p></div>
            </div>
          </div>
          <div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
            <div className="grid grid-col-1 gap-4 mt-8">
              <div className="flex justify-center"><img className=" object-cover h-[150px]" src="/public/images/circle5.jpg"  /></div>
              <div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal mt-4"><p>Датчик уровня топлива  (ДУТ)</p></div>
            </div>
          </div>
          <div className="shadow-xl md:shadow-xl border-lightGreen border-4 rounded-xl h-[300px] w-[270px] transform motion-safe:hover:scale-110 duration-200">
            <div className="grid grid-col-1 gap-4 my-6">
              <div className="flex justify-center"><img className="rounded-full object-cover w-[180px] h-[180px]" src="/public/images/circle6.jpg"  /></div>
              <div className="flex justify-center ml-[15px] w-[230px] text-center text-[18px] font-normal"><p>GPS трекеры для детей</p></div>
            </div>
          </div>
        </div>
      </div>
			
		</>
	);
}
export default InfoBox