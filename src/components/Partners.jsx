import React, { useRef } from 'react'
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
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const responsive = {
	'0': {
		'slidesPerView': 3,
	},
	'770': {
		'slidesPerView': 5,
	},
	'1150': {
		'slidesPerView': 7,
	},
};

function Partners({ scrollPosition }) {
	return (
		<div>
			<div className='flex mb-10'>
				<h1 className='text-5xl font-semibold text-darkBlue'>
					Наши партнеры
				</h1>
			</div>
			<Swiper autoHeight={true} autoplay={{
				"delay": 2500,
				"disableOnInteraction": false
			}} loop={true} spaceBetween={24} breakpoints={responsive} navigation={true} grabCursor={true}>
				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo2} alt='aifc' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo3} alt='astanahub' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo4} alt='baiterek' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo5} alt='bts' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo6} alt='digitan' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo7} alt='jysan' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo8} alt='korem' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo9} alt='ktz' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo10} alt='nnq' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo11} alt='nu' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>

				<SwiperSlide>
					<LazyLoadImage className='object-contain w-40 h-20' src={Logo12} alt='qaztrade' scrollPosition={scrollPosition} effect='blur' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default trackWindowScroll(Partners)
