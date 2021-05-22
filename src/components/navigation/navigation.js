import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand blog_logo" href="#">Bolaji Lass</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-flex">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                                </a>
                                {props?.userLoggedIn ? 
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Logout</a></li>
                                        <li><a class="dropdown-item" href="#">View Dashboard</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">new blog</a></li>
                                    </ul>
                                    :
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/login">login</Link></li>
                                        <li><Link className="dropdown-item" to="/register">register</Link></li>
                                    </ul>
                                }
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active {}" to="/">Blogs</Link>
                            </li>
                            {props?.userLoggedIn? 
                                <li class="nav-item">
                                    <Link className="nav-link active {}" to="/">+ New Blog</Link>
                                </li>
                            :
                                ""
                            }
                            <li class="nav-item">
                                <a class="nav-link active" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Projects</a>
                            </li>
                        </ul>
                    </div>    
                </div>
            </div>
        </nav>
    );
}

export default Navigation;