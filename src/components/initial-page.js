import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


import './landing-page.css';

export function InitialPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing">
            <p className="landing-p">A place to learn basic sign language...</p>
            <p className="landing-p">because everyone needs to be heard.</p>
            <div>
                <div className="overlay"></div>
                <div className="overlay2"></div>
                    <div className="home">
                    <p className="p-font">Learning with Hands to Hear is as easy as </p>
                    <img className="sign-img-one" src="https://imgur.com/cOFC1mn.png" alt="sign--number-one"></img>
                    <img className="sign-img-two" src="https://imgur.com/seFFmWV.png" alt="sign-number-two"></img>
                    <img className="sign-img-three" src="https://imgur.com/hWzGNEg.png" alt="sign-number-three"></img>
                        <p className="p-font-link">If you are new to Hands to Hear, <Link to="/register" className="link">getting started is simple!</Link>
                        </p>
                        <p className="p-font-link">Existing users <Link to="/login" className="link">Login</Link> to continue your learning experience.</p>
                        <h6>Made with
                            <img className="heart-symbol" src="https://png.icons8.com/metro/1600/hearts.png" alt="heart-symbol"></img>
                            by
                            <a href="https://github.com/AlexaScott33" target="blank" className="signature">Alexa</a> and 
                            <a href="https://github.com/leonardom249" target="blank" className="signature">Megan</a>
                            </h6>  
                    </div>
            </div>
        </div>
        
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(InitialPage);
