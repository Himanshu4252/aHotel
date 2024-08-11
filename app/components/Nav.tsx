import React from 'react'
import style from "./Web.module.css"
const Nav = () => {
  return (<>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous" />
    <nav className={`navbar navbar-expand-lg ${style.navItems}`}>
  <div className="container-fluid" style={{paddingInline:"10vh"}}>
    <ul className={`${style.navColorFixer} navbar-nav `}>
        <a className="nav-link" href="#carouselExampleIndicators">Home</a>
        <a className="nav-link" href="/">Features</a>
      <span className="navbar-logo" style={{fontSize:"30px"}}>aHotel</span>
        <a className="nav-link" href="/">Pricing</a>
        <a className="nav-link" href="#About">About</a>
    </ul>
  </div>
</nav>
 
  </>
  )
}

export default Nav