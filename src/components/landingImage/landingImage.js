import React from 'react';

function LandingImage(){
    return (
        <div className="container align-center main_image mt-5 pt-5">
            <img src="https://via.placeholder.com/854x533" alt="" />
            <div className="description">
                <p id="intro_message">Excepteur sint occaecat cupidatat non proident</p>
                <div id="explain_intro" className="container aling-center">
                    <p>sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </div>
    );
}

export default LandingImage;