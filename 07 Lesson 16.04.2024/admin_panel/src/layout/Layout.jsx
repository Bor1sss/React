import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
		<>
			<header>
				<div className='container'>
					<nav>
						<ul className='menu'>
							<li>
								<Link to='/Admin'>Admin</Link>
							</li>
							<li>
								<Link to='/User'>User</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main>
				<div className='container'>
					<Outlet />
				</div>
			</main>
			<footer>
				<div className='container'></div>
			</footer>
		</>
	)
}

export default Layout
