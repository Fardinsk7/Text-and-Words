import React from 'react'
import PropTypes from 'prop-types'
import "./TextForm.css"
// import {Link} from 'react-router-dom';
// import {NavLink} from 'react-router-dom';

export default function Navbar(props) {

  

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === "dark"?"light":"dark"} bg-${props.mode === "dark"?"light":"dark"} navbar-custom` }  >
  <div className="container-fluid"  >
    <a className="navbar-brand" href="/"  >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="list">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" >Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about" >{props.aboutText}</Link> */}
          {/* <NavLink to="/about">About</NavLink> */}
        {/* </li> */}

       
      {/* <li className="nav-item dropdown ">
        <div className="nav-link active dropdown-toggle"  id="navbarDropdown" role="button"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
         Themes
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="menudropdown">
          <div className="dropdown-item" style={{cursor:"pointer"}} onClick={props.summer} >Summer<div style={{height:"20px",width:"20px",backgroundImage: "linear-gradient(Orange, yellow)",display:"inline-block",marginRight:"20px",borderRadius:"100%",marginLeft:"5px"}}></div></div>
          <div className="dropdown-divider"></div>

          <div className="dropdown-item" style={{cursor:"pointer"}} onClick={props.rainy} >Rainy<div style={{height:"20px",width:"20px",backgroundImage: "linear-gradient(blue, skyblue)",display:"inline-block",marginRight:"20px",borderRadius:"100%",marginLeft:"5px"}}></div></div>
          <div className="dropdown-divider"></div>


          <div className="dropdown-item" style={{cursor:"pointer"}} onClick={props.winter} >Winter<div style={{height:"20px",width:"20px",backgroundImage: "linear-gradient(Orange,brown)",display:"inline-block",marginRight:"20px",borderRadius:"100%",marginLeft:"5px"}}></div></div>
        </div>
      </li> */}
      </ul>

     

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={props.toggleBtn} role="switch" style={{backgroundColor: props.mode === "light"?"black":"white"}} id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode === "light"?"light":"dark"}`}  htmlFor="flexSwitchCheckDefault">{props.modebtnText}</label>
      </div>
      

      


    </div>
  </div>
</nav>




    </>
    
  )
}


Navbar.propTypes = {
    title: PropTypes.string
};


Navbar.defaultProps = {
    title : "Title not Set",
    aboutText : "About Text not set"
}