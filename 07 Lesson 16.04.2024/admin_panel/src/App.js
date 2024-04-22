import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import User from './pages/Register'
import Layout from './layout/Layout'
import './App.css'
import { ProductProvider } from './context/ProductContext'
import Admin from './pages/Admin'

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
					path: 'Admin',
					element: <Admin />,
				},
				{
					path: 'User',
					element: <User/>
				}
			],
		},
	])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
