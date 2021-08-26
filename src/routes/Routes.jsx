import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Routes() {
	return (
		<Router>
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