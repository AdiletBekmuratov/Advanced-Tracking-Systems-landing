import React from 'react'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
import { VscActivateBreakpoints } from 'react-icons/vsc'

const CardMedium = ({ image, title, desc, alt, scrollPosition }) => {
	return (
		<div className="card relative">
			<div className='absolute z-20 flex justify-center items-center text-white text-5xl bg-black opacity-30 h-full w-full filter hover:opacity-0 hover:blur-xl transition duration-300 delay-200'>
				<VscActivateBreakpoints />
			</div>

			<LazyLoadImage
				src={image}
				alt={alt}
				scrollPosition={scrollPosition}
				effect="blur"
				className="object-cover w-full h-full card-medium-image"
				height={500}
				width='100%'
			/>
			<div className="content">
				<div className="contentBx">
					<h3>{title}</h3>
					<span>{desc}</span>
				</div>
			</div>
		</div>
	)
}

export default trackWindowScroll(CardMedium)
