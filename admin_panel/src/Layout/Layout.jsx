import React from 'react';
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <header>
				<div className='container'>
					<nav>
						<ul className='menu'>
							<li>
								<Link to='/'>User</Link>
							</li>
							<li>
								<Link to='/Admin'>Admin</Link>
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
        </div>
    );
}

export default Layout;
