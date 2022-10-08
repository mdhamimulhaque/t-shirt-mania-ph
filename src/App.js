import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import GrandPa from './components/contextLearn/GrandPa/GrandPa';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("tshirts.json"),
          element: <Home />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/grandpa",
          element: <GrandPa />
        }
      ]
    },
    {
      path: "*",
      element: <Error />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
