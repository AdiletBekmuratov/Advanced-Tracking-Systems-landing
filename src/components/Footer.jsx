import React from 'react'
import Logo from '/images/ATS_Logo.png'

import { FaFacebookF, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="footer bg-darkBlue relative">
			<div className="container mx-auto pt-6">
				<div className="sm:flex sm:mt-8">
					<div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
						<div class="flex flex-col">
							<span class="font-bold text-white uppercase md:mt-0 mb-2">Logo</span>
							<span class="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">link 1</a></span>
							<span class="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">link 1</a></span>
							<span class="my-2"><a href="#" className="text-white text-md filter hover:brightness-110">link 1</a></span>
						</div>
						<div className="flex flex-col">
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
									<FaTelegram className="group-hover:scale-150 transition transform duration-200 ease-out" />
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
			<div className="container mx-auto px-6">
				<div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
					<div className="sm:w-2/3 text-center py-6">
						<p className="text-sm text-white font-bold mb-2">
							© 2020 ATS
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
