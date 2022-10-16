import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({setUser}) {

    const [showSignUp, setShowSignUp] = useState(true);
    const [showLogIn, setShowLogIn] = useState(true);
    const [showLanding, setShowLanding] = useState(false);

    return (
        <main>
            <img className="title" src="https://i.imgur.com/OHi2rSk.png" />
            <h5 style={{fontFamily:'Peralta', margin: 20}}>A questionably themed flashcard app</h5>
            <br/>
            <button className="form-button" onClick={() => {setShowSignUp(!showSignUp); 
                                    {showLanding ? setShowLanding(!showLanding): setShowLanding(showLanding)}; 
                                    {!showLogIn ? setShowLogIn(!showLogIn): setShowLogIn(showLogIn)}}}
                                    >Sign Up</button>
            <button className="form-button" onClick={() => {setShowLogIn(!showLogIn); 
                                    setShowLanding(!showLanding);
                                    {!showSignUp ? setShowSignUp(!showSignUp): setShowSignUp(showSignUp)}}}
                                    >Log In</button>
            <br/>
            {showSignUp ?
                <div></div>
                :
                <>
                <br/>
                <SignUpForm setUser={setUser}/>
                </>
            }
            {showLogIn ?
                <div></div>
                :
                <>
                <br/>
                <LoginForm setUser={setUser}/>
                </>
            }
            {!showLogIn || !showSignUp ?
                <div></div>
                :
                <>
                    <img className="cowboy" src="https://i.imgur.com/h9DRnp1.png" />
                </>
            }            
        </main>
    );
}