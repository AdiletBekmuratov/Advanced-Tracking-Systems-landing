import React from 'react'
import Logo1 from '/images/able_logo.png'
import Logo2 from '/images/AIFC_logo.png'
import Logo3 from '/images/astanahub_logo.png'
import Logo4 from '/images/baiterek_logo.png'
import Logo5 from '/images/BTS_logo.png'
import Logo6 from '/images/Digitan_logo.png'
import Logo7 from '/images/Jysan_logo.png'
import Logo8 from '/images/Korem_logo.png'
import Logo9 from '/images/KTZ_logo.png'
import Logo10 from '/images/nnq_logo.png'
import Logo11 from '/images/NU_logo.png'
import Logo12 from '/images/Qaztrade_logo.png'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
import Carousel from "react-multi-carousel";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 7
	},
	tablet: {
		breakpoint: { max: 1150, min: 464 },
		items: 5
	},
	mobile: {
		breakpoint: { max: 770, min: 0 },
		items: 3
	}
};

function Partners({ scrollPosition }) {
	return (
		<div>
			<div className='flex mb-5'>
				<h1 className='text-5xl font-semibold text-darkBlue'>
					Наши партнеры
				</h1>
			</div>
			<Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={3000} itemClass='p-5' removeArrowOnDeviceType={['mobile', 'desktop', 'tablet']}>
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo1} alt='able' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo2} alt='aifc' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo3} alt='astanahub' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo4} alt='baiterek' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo5} alt='bts' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo6} alt='digitan' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo7} alt='jysan' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo8} alt='korem' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo9} alt='ktz' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo10} alt='nnq' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo11} alt='nu' scrollPosition={scrollPosition} effect='blur' />
				<LazyLoadImage className='object-contain w-60 h-40' src={Logo12} alt='qaztrade' scrollPosition={scrollPosition} effect='blur' />
			</Carousel>
		</div>
	)
}

export default trackWindowScroll(Partners)
