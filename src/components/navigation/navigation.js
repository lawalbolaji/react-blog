import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand blog_logo" href="#">Bolaji Lass</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                                </a>
                                {props?.userLoggedIn ? 
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Logout</a></li>
                                        <li><a className="dropdown-item" href="#">View Dashboard</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">new blog</a></li>
                                    </ul>
                                    :
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/login">login</Link></li>
                                        <li><Link className="dropdown-item" to="/register">register</Link></li>
                                    </ul>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active {}" to="/">Blogs</Link>
                            </li>
                            {props?.userLoggedIn? 
                                <li className="nav-item">
                                    <Link className="nav-link active {}" to="/">+ New Blog</Link>
                                </li>
                            :
                                ""
                            }
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Projects</a>
                            </li>
                        </ul>
                    </div>    
                </div>
            </div>
        </nav>
    );
}

export default Navigation;