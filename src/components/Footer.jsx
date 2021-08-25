import React from 'react'
import Logo from '/images/Logo_White.png'

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="footer bg-darkBlue relative pt-1 px-6">
			<div className="container mx-auto">
				<div className="sm:flex mt-8">
					<div className="sm:w-full flex flex-col md:flex-row justify-between">
						<div className="flex flex-col gap-y-4 mb-2">
							<div>
								<img src={Logo} alt="logo_white" className="h-[5rem]" />
							</div>
							<div className="flex flex-col gap-y-1 mb-2">
								<p className="text-white text-md">ул. Туркестан 34/1, г. Нур-Султан, Казахстан</p>
								<p className="text-white text-md">+7 778 995 98 62</p>
								<p className="text-white text-md">+7 707 927 17 27</p>
								<p className="text-white text-md">adaynygmanov@gmail.com</p>
							</div>
						</div>
						<div className="flex flex-col mb-2">
							<span className="font-bold text-white uppercase md:mt-0 mb-2">Навигация</span>
							<span className="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">Главная</a></span>
							<span className="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">Услуги</a></span>
							<span className="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">Возможности</a></span>
							<span className="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">GPS оборудования</a></span>
							<span className="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">Контакты</a></span>
						</div>
						<div className="flex flex-col gap-y-2">
							<span className="font-bold text-white uppercase md:mt-0 mb-2">Социальные сети</span>
							<div className="flex md:justify-between gap-x-2 md:gap-x-0">
								<div className="group p-4 border-2 border-white rounded-md text-white">
									<FaFacebookF className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</div>
								<div className="group p-4 border-2 border-white rounded-md text-white">
									<FaInstagram className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</div>
								<div className="group p-4 border-2 border-white rounded-md text-white">
									<FaTelegramPlane className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</div>
							</div>
							<div className="flex md:justify-between gap-x-2 md:gap-x-0">
								<div className="group p-4 border-2 border-white rounded-md text-white">
									<FaTwitter className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</div>
								<div className="group p-4 border-2 border-white rounded-md text-white">
									<FaFacebookF className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</div>
								<div className="group p-4 border-2 border-white rounded-md text-white">
									<FaFacebookF className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
					<div className="sm:w-2/3 text-center py-6 flex justify-center gap-x-6 mb-2">
						<p className="text-sm text-white font-bold">
							© 2020 ATS
						</p>
						<p className="text-sm text-white font-bold">All rights reserved</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
