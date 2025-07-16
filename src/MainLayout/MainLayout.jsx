import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./../components/Navbar/Navbar.jsx"
import Home from "./../Pages/Home/Home.jsx"
import LogIn from  "./../Pages/Auth/LogIn/Login.jsx"
import Register from "./../Pages/Auth/Register/Register.jsx"
import Error from "./../Pages/Error/Error.jsx"
import Auth from "./../Pages/Auth/Auth.jsx"
import AuthCheck from "../AuthCheck/AuthCheck.jsx";
import Footer from "../components/Footer/Footer.jsx";


const MainLayout = () =>{
    return (
   <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element= {
          <AuthCheck>
               <Home/>
          </AuthCheck>
          }/>
        <Route path="auth" element={<Auth/>}>
             <Route path="login" element={<LogIn/>}/>
             <Route path="register" element={<Register/>}/>
        </Route>
        {/* Page Not Found */}
         <Route path="*" element={<Error/>}/>
     </Routes>
     <Footer/>
   </BrowserRouter>
  )
}

export default MainLayout;
