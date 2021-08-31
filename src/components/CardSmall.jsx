import React from 'react'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'

const CardSmall = ({ image, text, alt, scrollPosition }) => {
	return (
		<div className="shadow-xl border-lightGreen border-2 rounded-xl flex flex-col items-stretch justify-center transform motion-safe:hover:scale-105 duration-200">
			<div className="grid grid-col-1 gap-4 p-6 group-hover:scale-150 transition transform duration-200 ease-out">
				<div className="flex justify-center items-center mb-12">
					<LazyLoadImage className="rounded-full object-cover w-[180px] h-[180px]" src={image} alt={alt} scrollPosition={scrollPosition} effect='blur' />
				</div>
				<div className="flex justify-center w-full text-center text-[18px] font-normal">
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default trackWindowScroll(CardSmall)
