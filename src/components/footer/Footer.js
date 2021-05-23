import React from 'react';

function Footer(){
    return (
        <div className="footer bg-light footer-text">
            <div className="container align-center">
                <div className="row">
                    <div className="container">
                        <div className="blog_logo footer_logo">
                            Bolaji Lass
                        </div>    
                    </div>
                </div>
        
                <div className="row">
                    <div className="footer-main-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>    
                </div>
                
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="container contact-links">
                            <div className="row">
                                <div className="col twitter"><a href="#">Twitter</a></div> <div className="col linkedIn"><a href="#">LinkedIn</a></div> <div className="col rss"><a href="#">RSS</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                
                <div className="row">
                    <div className="copyright">
                        <p className="no_margin">&copy; 2021 Bolaji Lass Inc.</p>
                        <p className="no_margin">All rights reserved</p>
                    </div>        
                </div>
            </div>
        </div>

    );
}

export default Footer;