import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/navigation.css"

export const Navigation = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
    <a href="/" onClick={handleLogoClick}>
            <img
              src="/img/logo.png"
              alt="Logo"
              style={{
                height: "50px",
                marginRight: "10px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </a>
    


        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
  <a className="dropdown-toggle">Study Destinations</a>
  <div className="dropdown-full-width">
    <ul className="country-grid">
      <li>
        <Link to="/study-destination/usa">
          <img src="/img/usa.png" alt="USA" />
          <span>USA</span>
        </Link>
      </li>
      <li>
        <Link to="/study-destination/uzbekistan">
          <img src="/img/uzbekistan.jpg" alt="Canada" />
          <span>Uzbekistan</span>
        </Link>
      </li>
      <li>
        <Link to="/study-destination/uk">
          <img src="/img/uk.png" alt="United Kingdom" />
          <span>United Kingdom</span>
        </Link>
      </li>
      <li>
        <Link to="/study-destination/ireland">
          <img src="/img/ireland.png" alt="Ireland" />
          <span>Ireland</span>
        </Link>
      </li>
      <li>
        <Link to="/study-destination/australia">
          <img src="/img/aus.png" alt="Australia" />
          <span>Australia</span>
        </Link>
      </li>
      <li>
        <Link to="/study-destination/new-zealand">
          <img src="/img/newzlnd.png" alt="New Zealand" />
          <span>New Zealand</span>
        </Link>
      </li>
      <li>
        <Link to="/study-destination/europe">
          <img src="/img/euro.jpg" alt="Europe" />
          <span>Europe</span>
        </Link>
      </li>
      <li>
        <Link to="/study-destination/asia">
          <img src="/img/usa.png" alt="Asia" />
          <span>Asia</span>
        </Link>
      </li>
    </ul>
  </div>
</li>

           <li className="dropdown">
  <a href="#about" className="page-scroll dropdown-toggle" onClick={(e) => e.preventDefault()}>
    About Us <span className="caret"></span>
  </a>
  <ul className="dropdown-menu">
    <li>
 <Link to="/mission">  
      <span>Mission</span>
     
  
       </Link>
    </li>
  
    <li>
      <Link to="/about_home">  
      <span>Company</span>
     
  
       </Link>
      </li>
  </ul>
</li> 

            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
             <Link to='/gallery' >
             <span>Gallery</span>
             </Link>
            </li>
            <li>
              <Link to='/contactUs'    className="page-scroll">
                   Contact
              </Link>
            
           
          
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
