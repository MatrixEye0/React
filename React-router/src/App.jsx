import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Login } from './component/Login'
import { About } from './component/About'
import { Nav } from './component/nav'
import { Home } from './component/Home'
import { User } from './component/User'
import { Dashbord } from './component/dashbord'
import ProtectedRoute from './privateRoute'

function App() {
   /*
   createBrowserRouter()
        ↓
Creates router
        ↓
Contains all routes
        ↓
RouterProvider
        ↓
Reads browser URL
        ↓
Finds matching route
        ↓
Renders component   */
// creatBrowserRouter create the routing configuration for your React application.
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <> <Nav /> <Home /> </>  
    },
     {
      path: "/dashbord",
      element:  <ProtectedRoute> <Nav /> <Dashbord /> </ProtectedRoute>  
    },
    {
      path: "/home",
      element:  <> <Nav /> <Home /> </>  
    },
    {
      path: "/login",
      element: <> <Nav /> <Login /> </>
    },
    {
      path: "/about",
      element:  <> <Nav />  <About /> </>
    },
    {
      path:'/login/:name',
      element:<><Nav/><User/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />{/*this connect react app to react router. react router change page without render . React Router can watch the URL and decide which component to render.*/}
      {/*
       createBrowserRouter()
        ↓
        router object
        ↓
       <RouterProvider router={router} />
        ↓
       React Router starts working
        ↓
       User visits /about
        ↓
       Finds path: "/about"
        ↓
       Renders <About />
      */}

    </>
  )
}

export default App