import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginRegister from "./pages/LoginRegister";
import AdminPage from "./pages/AdminPage";
import { useState } from "react";
import Categories from "./components/Categories";
import Products from "./components/Products";
import NavbarComponent from "./components/Navbar";
import StoreApplication from "./pages/StoreApplication";
import MainPage from "./pages/MainPage";
import Employees from "./pages/Employees"
import StorePage from "./pages/StorePage"

function App() {
  
  const [loginFlag, setLoginFlag] = useState(false);
  return (
    <div>
      <div>
    <NavbarComponent loginFlag={loginFlag} setLoginFlag={setLoginFlag} />
    </div>
    <>
    
      <Router>
        <div className="Container">
        
          <Routes>
            <Route path="/" element={<MainPage/>}/>
          
            <Route
              path="/Login"
              element={
                <LoginRegister
                  loginFlag={loginFlag}
                  setLoginFlag={setLoginFlag}
                />
              }
            />
            <Route path="/MainPage" element={<MainPage/>}/>
            <Route path="/Store" element={<Employees/>}/>
            <Route path="/HomePage" element={<AdminPage />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/StoreApplication" element={<StoreApplication/>}/>
            <Route path="/Employees" element= {<Employees/>}/>
            <Route path ="/addProducts" element={<StorePage/>}/>
          </Routes>
        </div>
      </Router>
    </>
    </div>
  );
}

export default App;
