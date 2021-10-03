import React from 'react';
import './socialButton.css';


function SocialButton(props) {
    return(<div className="social-container">
        <a href="#">
            <img src={props.logo} alt={props.name} />
        </a>
    </div>);
}

export default SocialButton;