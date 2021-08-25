import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export default function Routes() {
	return (
		<Router>
			<Toaster
				position="top-right"
				reverseOrder={false}
			/>

			<Header />
			<div className="overflow-x-hidden w-full h-full m-0 p-0">
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}