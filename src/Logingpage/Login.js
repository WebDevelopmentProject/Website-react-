import React, {useState} from 'react'
import {auth} from "./firebase"; 
import './Login.css';
import {Link, useHistory } from "react-router-dom";
function Login() {
    const history=useHistory("");
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('');
    const login= (event) =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) => 
        {
            history.push("/")
        }).catch((e) => {
            if(
                e.message===
                "This password is invalid or the user does not have a password."
            )
            {
                alert("Please check your credentials again");
            }else if(
                e.message===
                "There is no use record corresponding to this identifier. The user may have been deleted."
            ){
                alert("Please check your credentials again");
            }else{
                alert(e.message);
            }
        })
    }
    return (
        <div className="login">
            <img src='https://www.vectorlogo.zone/logos/quora/quora-ar21.svg' className="login_logo"/>
            <div className="login_container">
                <h3>Log In To Quora</h3>
                <form >
                    <center>
                        <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                    </center>
                    <center>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </center>
                    <center>
                        <button onClick={login} type="submit" className="login_login">
                            Log In
                        </button>
                    </center>
                    <center>
                        <div className="sideinfo">
                            <h5>Forgotten Password</h5>
                            <h5 className="dot">.</h5>
                            <Link to="/register" style={{textDecoration:"none"}}>
                                <h5 className="rtd">Signup For Quora</h5>
                            </Link>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login
