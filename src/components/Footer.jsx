import React from 'react'
import Logo from '/images/Logo_White.png'

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import UnstyledLink from './UnstyledLink'

const Footer = () => {
	return (
		<footer className="footer bg-darkBlue relative pt-1 px-6" id='contacts'>
			<div className="container lg:max-w-6xl mx-auto">
				<div className="sm:flex mt-8">
					<div className="sm:w-full flex flex-col md:flex-row justify-between lg:space-y-0 space-y-4">
						<div className="flex flex-col space-y-4 mb-2">
							<div>
								<img src={Logo} alt="logo_white" className="h-[5rem]" />
							</div>
							<div className="flex flex-col space-y-1 mb-2">
								<p className="text-white text-md">ул. Туркестан 34/1, г. Нур-Султан, Казахстан</p>
								<p className="text-white text-md">+7 778 995 98 62</p>
								<p className="text-white text-md">+7 707 927 17 27</p>
								<p className="text-white text-md">adaynygmanov@gmail.com</p>
							</div>
						</div>
						<div className="flex flex-col mb-2">
							<span className="font-bold text-white uppercase md:mt-0 mb-2">Навигация</span>
							<span className="my-1"><a href="#" className="text-white text-md filter hover:brightness-110">Главная</a></span>
							<span className="my-1"><a href="#equipments" className="text-white text-md filter hover:brightness-110">Оборудования и ПО</a></span>
							<span className="my-1"><a href="#process" className="text-white text-md filter hover:brightness-110">Процесс подключения</a></span>
							<span className="my-1"><a href="#partners" className="text-white text-md filter hover:brightness-110">Партнеры</a></span>
							<span className="my-1"><a href="#contacts" className="text-white text-md filter hover:brightness-110">Контакты</a></span>
						</div>
						<div className="flex flex-col space-y-2">
							<span className="font-bold text-white uppercase md:mt-0 mb-2">Социальные сети</span>
							<div className="flex md:justify-between space-x-2 md:space-x-0">
								<UnstyledLink href='https://www.facebook.com' className="group p-4 border-2 border-white rounded-md text-white">
									<FaFacebookF className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</UnstyledLink>
								<UnstyledLink href='https://www.instagram.com' className="group p-4 border-2 border-white rounded-md text-white">
									<FaInstagram className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</UnstyledLink>
								<UnstyledLink href='https://www.facebook.com' className="group p-4 border-2 border-white rounded-md text-white">
									<FaTelegramPlane className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</UnstyledLink>
							</div>
							<div className="flex md:justify-between space-x-2 md:space-x-0">
								<UnstyledLink href='https://www.twitter.com' className="group p-4 border-2 border-white rounded-md text-white">
									<FaTwitter className="group-hover:scale-150 transition transform duration-200 ease-out" />
								</UnstyledLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container lg:max-w-7xl mx-auto">
				<div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
					<div className="sm:w-2/3 text-center py-6 flex justify-center space-x-6 mb-2">
						<p className="text-sm text-white font-bold">
							© 2021 ATS
						</p>
						<p className="text-sm text-white font-bold">Все права защищены</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
