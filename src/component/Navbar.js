import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();



  // const state =useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            {/* <img  src="N-tra.png" alt="hii"  height={"35px"} width={"140px"}></img>  */}
            <i class="fa fa-book" aria-hidden="true"></i> N-DICTIONARY
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/products">
                  Products
                </NavLink> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {
                isAuthenticated && (
              <li className="nav-item">
               <img className="profile" src={user.picture}></img> 
              
              {/* <p>{user.nickname} </p> */}
              </li> 
              )}
              &nbsp; &nbsp;
              <li className="nav-item">
               
                {
                  isAuthenticated ? (<li className="nav-item">
                    <button className="btn btn-outline-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    <i className="fa fa-sign-in me-1"></i> Log Out
                    </button>
                  </li>
                  ) : (
                    <li className="nav-item">
                      <button className="btn btn-outline-dark" onClick={() => loginWithRedirect()}>
                        <i className="fa fa-user-plus me-1"></i> Log In</button>
                    </li>
                  )
                }
                </li>
                {/* <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login</NavLink> */}


                
              {/* <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register</NavLink> */}
                {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2">
             <i className="fa fa-shopping-cart me-1"></i> Cart </NavLink> */}
              </ul>
            </div>


          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
