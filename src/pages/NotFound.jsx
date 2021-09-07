import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full flex-grow">
			<Helmet title="Страница не найдена" meta={[{ "name": "description", "content": "Страница не найдена" }]} />
			<h1 className="error-404">404</h1>
			<div className="page">Страница, которую вы ищете, не найдена</div>
			<Link className="back-home" to="/">На главную страницу</Link>
		</div>
	)
}

export default NotFound
