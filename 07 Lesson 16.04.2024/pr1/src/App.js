import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import Layout from './layout/Layout'
import './App.css'
import Product from './components/Product'
import { ProductProvider } from './context/ProductContext'


function App() {
  const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProductProvider>
					<Layout />
				</ProductProvider>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/About',
					element: <About />,
				},
				{
					path: '/product/:id',
					element: <Product />,
				},
			],
		}
	])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
