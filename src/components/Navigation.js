import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (        
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/posts" className="nav-link" activeClassName="active" exact>All posts</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/add" className="nav-link" activeClassName="active">Add post</NavLink>
                </li>                
                </ul>
            </div>  
        </nav>
    )
}

export default Navigation;