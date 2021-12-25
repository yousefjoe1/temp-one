import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Nav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                <img src="https://wallpaperaccess.com/full/406168.jpg" alt="" width="50" height="44"/>
                <div class="dropstart">
                    <i className="bi bi-border-width btn btn-secondary dropdown-toggle "type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><AnchorLink className="dropdown-item" href="#services">Services</AnchorLink></li>
                        <li><AnchorLink className="dropdown-item" href="#portfolio">Portfolio</AnchorLink></li>
                        <li><AnchorLink className="dropdown-item" href="#contact">Contact</AnchorLink></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav; 