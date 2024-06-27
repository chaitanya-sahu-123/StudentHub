import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NotificationBox from './NotificationBox';
import { useState, useEffect } from 'react';
import './Navbar.css';

// let nodemailer = require("nodemailer");
// var well = {
// boxShadow: "0px 0px 10px 0px #f0f0f0"
// }
var iconstyle = {
  marginleft: "20px",
  textDecoration: "none"
}
var title = {
  // color: "lightgreen",
  color: "#0D6EFD",
}

export default function Navbar() {
  
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);
  const [show, setShow] = useState(false);

  const isLoggedin = () => {
    if (localStorage.getItem('username') !== null) {
      setLoginStatus(true);
    }
  }

  const logout = () => {
    setLoginStatus(false);
    // window.location.reload(true);
    navigate("./Login");
  }

  const searchQuestion = async (e) => {
    e.preventDefault();
    const que = document.getElementById('searchQue').value;

    await fetch(`http://localhost:5000/api/question/search?keyword=${que}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(questions => {
      navigate("/search", { state: questions });
    })
  }

  useEffect(() => {
    isLoggedin();
  }, [loginStatus])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', position: 'fixed', top: 0, zIndex: 9999, width: '100%' }}>
        <div className="container-fluid">
          <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={require('./logo.png')} height="55" width="150" alt="StudentHub"/>
          </div>

          {localStorage.getItem("Usertype") === 'user' && (
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsSscrollHheight: "100px" }}>
              <li className="nav-item dropdown" >
                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" aria-expanded="false" style={{ color: 'black' }}>
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown" style={{ color: 'black' }}>
                  <li><NavLink className="dropdown-item" to="/questions">Questions</NavLink></li>
                  <li><a className="dropdown-item" href="/editor">Ask Question (Editor)</a></li>
                  <li><hr className="dropdown-divider" /></li>
                </ul>
              </li>
            </ul>
          )}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll" >
            <form className="d-flex" style={{ width: 500 }} onSubmit={searchQuestion}>
              <input className="form-control me-2" id="searchQue" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <div className="searchbar"></div>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsSscrollHheight: "100px" }}>
              <li className="nav-item">
                {localStorage.getItem("Usertype") === 'user' && (
                  <a className="nav-link mr" href="/editor" style={{ color: 'black' }}>
                    <button className="btn btn-outline-dark">&lt;/&gt;</button>
                  </a>
                )}
              </li>
            </ul>

            {loginStatus && localStorage.getItem("Usertype") === 'user' && (
              <NavLink to='/analysis' className='btn btn-white mr-2'>{localStorage.getItem("username")}</NavLink>
            )}
            <button className='btn btn-white mr-2'><i className="fa fa-home"></i></button>

            <ul className="navbar-nav " style={{ bsSscrollHheight: "100px" }}>
              {loginStatus ? (
                <li className="nav-item">
                  <button className="btn btn-outline-primary" onClick={logout}>Logout</button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login" style={{ color: 'black' }}>
                      <button className="btn btn-outline-primary">Login</button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register" style={{ color: 'black' }}>
                      <button className="btn btn-primary">Register</button>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {show && (
        <div className="title1">
          <NotificationBox
            description="Here all notifications will be displayed."
            title="For Notifications"
            className="box"
          />
        </div>
      )}
    </div>
  )
}
