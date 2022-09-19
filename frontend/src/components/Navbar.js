import React from "react";
import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch } from "react-redux";
import Search from "./Search"
import { Navigate } from "react-router-dom";
import { logout } from "../slice/authSlice";


function NavbarComponent() {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    dispatch(logout())
      .then(() => {
        Navigate("/");
      })
      .catch();
  };
  const Login = () => {
    Navigate("/Login");
  };
  const loginAdmin = () => {
    Navigate("/HomePage");
  };
  const Employees = () => {
    Navigate("/Employees");
  };
  const addProducts = () => {
    Navigate("/StorePage");
  };
  return (
    <div>
      <Navbar color="info" light expand="md">
        <Collapse navbar>
          <Nav navbar>
            {userData ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {userData?.name}
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem href="/" onClick={logOut}>
                    logout
                  </DropdownItem>
                  {userData.user_level == "0" && (
                    <DropdownItem href="/MainPage" onClick={loginAdmin}>
                      Site görünümü
                    </DropdownItem>
                     
                  )}
                    {userData.user_level == "0" && (
                    <DropdownItem href="/HomePage" onClick={loginAdmin}>
                      Admin
                    </DropdownItem>
                     
                  )}
                  {userData.user_level == "2" && (
                   
                    <DropdownItem href="/Employees" onClick={Employees}>
                      Employees
                    </DropdownItem>
                 
                  )}
                  {userData.user_level == "2" && (
                   
                   <DropdownItem href="/addProducts" onClick={addProducts}>
                     addProducts
                   </DropdownItem>
                
                 )}
                  
                
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-light " nav caret>
                  Sign In
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem href="/Login" onClick={Login}>
                    login
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
       <Search/>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
