import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:
      <ProductProvider>
        <Layout/>
      </ProductProvider> ,
      children:[
        {
          path:'/',
          element:<Home/>,

        }
      ]

    }
  ])
  return (
    <>
    <h1>Router</h1>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
