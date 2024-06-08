import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Error from "./Component/Error";
import Addprodact from "./Component/Addprodact";
import Allprodect from "./Component/Allprodect";
import Allvariant from "./Component/Allvariant";
import Registration from "./Component/Registration";
import Catagorystatus from "./Component/Catagory/Catagorystatus";
import Subcatagorystaus from "./Component/Catagory/Subcatagorystaus";
import Addcatagory from "./Component/Catagory/Addcatagory";
import Addsubcatagory from "./Component/Catagory/Addsubcatagory";
import Approvecatagorystatus from "./Component/Catagory/Approvecatagorystatus";
import AprroveSubcatagorystatus from "./Component/Catagory/AprroveSubcatagorystatus";
import UserDatlis from "./Component/Catagory/UserDatlis";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}>
        <Route path="/addprodacet" element={<Addprodact />}></Route>
        <Route path="/allproducat" element={<Allprodect />}></Route>
        <Route path="/allvariant" element={<Allvariant />}></Route>
        <Route path="/catagorystatus" element={<Catagorystatus />}></Route>
        <Route path="/subcatagorystatus" element={<Subcatagorystaus />}></Route>



        <Route path="/addcatagory" element={<Addcatagory />}></Route>
        <Route path="/addsubcatgory" element={<Addsubcatagory />}></Route>

        <Route path="/approvecatagorystatus" element={<Approvecatagorystatus />}></Route>
        <Route path="/approvesubcatagorystatus" element={<AprroveSubcatagorystatus />}></Route>
        <Route path="/user" element={<UserDatlis />}></Route>
        


        
   
      </Route>

      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
