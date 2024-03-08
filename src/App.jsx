import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Error from "./Component/Error";


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
     <Route
      path="/"
      element={<Home/>}
    >

<Route
      path="/login"
      element={<Login/>}
    >
    </Route>


    </Route>

    <Route
      path="*"
      element={<Error/>}
    >
    </Route>
   


   </Route>
  )
);

function App() {



  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
