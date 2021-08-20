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

function Partners() {
	return (
		<div>
			<div className='absolute left-50 ml-1 top-10 '>
				<h2 className='font-semibold text-darkBlue'>Наши партнеры</h2>
			</div>
			<div className='grid md:grid-cols-4 md:grid-rows-3 sm:grid-cols-3 grid-cols-2 sm:gap-y-2 gap-y-5 gap-x-16'>

				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo1} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo2} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo3} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo4} /></div>

				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo5} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain ' src={Logo6} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo7} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo8} /></div>

				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo9} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo10} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo11} /></div>
				<div className='w-24 h-12 sm:w-32 sm:h-24 md:w-56 md:h-32 flex justify-center'><img className='object-contain' src={Logo12} /></div>

			</div>
		</div>
	)
}

export default Partners
