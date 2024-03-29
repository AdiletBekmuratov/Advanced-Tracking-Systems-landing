import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import '@/index.css';
import 'swiper/css/bundle';

import App from '@/App';

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider >
			<Helmet
				defaultTitle='ATS'
				titleTemplate='%s | ATS'
			>
				<meta charSet='utf-8' />
				<html lang='id' amp />
			</Helmet>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
