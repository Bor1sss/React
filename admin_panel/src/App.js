import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Admin from './Admin/Admin';
import User from './User/User';




function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:(
        <Layout/>
      ),
      children:[
        {
        path:'/',
        element:<User/>,
      },
      {
        path: '/Admin',
        element: <Admin />,
      },
      ]
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
