import React from 'react'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'

const CardMedium = ({ image, title, desc, alt, scrollPosition }) => {
	return (
		<div className="card">
			<LazyLoadImage
				src={image}
				alt={alt}
				scrollPosition={scrollPosition}
				effect="blur"
				className="object-cover w-full h-full"
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
