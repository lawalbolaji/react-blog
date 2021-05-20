import React from 'react';

function Footer(){
    return (
        <div class="footer bg-light footer-text">
            <div class="container align-center">
                <div class="row">
                    <div class="container">
                        <div class="blog_logo footer_logo">
                            Bolaji Lass
                        </div>    
                    </div>
                </div>
        
                <div class="row">
                    <div class="footer-main-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>    
                </div>
                
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        <div class="container contact-links">
                            <div class="row">
                                <div class="col twitter"><a href="#">Twitter</a></div> <div class="col linkedIn"><a href="#">LinkedIn</a></div> <div class="col rss"><a href="#">RSS</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
                
                <div class="row">
                    <div class="copyright">
                        <p class="no_margin">&copy; 2021 Bolaji Lass Inc.</p>
                        <p class="no_margin">All rights reserved</p>
                    </div>        
                </div>
            </div>
        </div>

    );
}

export default Footer;