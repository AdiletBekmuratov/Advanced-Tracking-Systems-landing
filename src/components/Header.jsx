import React, { useState } from "react";
import Logo from '/images/Logo.png'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'


export default function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<>
			<div className="flex flex-wrap items-center justify-between px-2 py-2 bg-gray-100 z-50">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-end gap-x-10">
					<p className="text-darkBlue flex items-center gap-x-2">
						<HiOutlineMail />
						adaynygmanov@gmail.com
					</p>
					<p className="text-darkBlue flex items-center gap-x-2">
						<HiOutlinePhone />
						+7 778 995 98 62
					</p>
				</div>
			</div>
			<nav className="flex flex-wrap items-center justify-between px-2 py-4 bg-white sticky left-0 top-0 shadow-md z-50">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
						<img src={Logo} alt="Logo" className="h-[3rem] ml-3" />
						<button
							className="text-darkBlue cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
							</svg>
						</button>
					</div>
					<div
						className={`lg:flex flex-grow items-center ${navbarOpen ? " flex" : " hidden"}`}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row gap-x-12 list-none lg:ml-auto">
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-base font-bold leading-snug text-darkBlue hover:opacity-75"
									href="#pablo"
								>
									Услуги
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-base font-bold leading-snug text-darkBlue hover:opacity-75"
									href="#pablo"
								>
									Возможности
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-base font-bold leading-snug text-darkBlue hover:opacity-75"
									href="#pablo"
								>
									GPS оборудования
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-base font-bold leading-snug text-darkBlue hover:opacity-75"
									href="#pablo"
								>
									Контакты
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}