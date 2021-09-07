import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))

export default function Routes() {
	return (
		<Router>
			<div className='min-h-screen flex flex-col justify-center'>
				<Suspense fallback={
					<div className='flex flex-col justify-center items-center'>
						<div className="load-2">
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					</div>
				}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}