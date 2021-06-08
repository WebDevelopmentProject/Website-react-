import React,{useState}from 'react'
import { useHistory,Link } from 'react-router-dom';
import {auth, db} from './firebase';
import "./Register.css";
function Register() {
    const history = useHistory("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [gender , setGender]=useState("");
     
    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
                if(auth.user){
                    auth.user.updateProfile({
                        displayName:firstName+ " "+lastName,
                        photoURL:"https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg"
                    }).then((s)=>{
                        db.collection('users').doc(auth.user.uid).set({
                            uid: auth.user.uid,
                            displayName: auth.user.displayName,
                            email:auth.user.email,
                            photoURL:"https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg",
                            gender,
                            bio:""
                        }).then((r) =>{
                            history.push("/Navbar")
                        })
                    })
                }
        })
    }
    return (
        <div className="register">
            <img src='https://www.vectorlogo.zone/logos/quora/quora-ar21.svg' className="register_logo"/>
            <div className="register_container">
                <h1>Sign Up</h1>
                <div className="hr3" />
                <form>
                    <div className="row">
                        <input 
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            className="register_name"
                            type="name"
                            placeholder="First Name"
                            required
                        />
                        <input 
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            className="register_name"
                            type="name"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <center>
                        <input 
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </center>
                    <center>
                        <input 
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </center>
                    <center>
                        <input 
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                    </center>
                    <h5 className="register_gender">Gender</h5>
                    <div className="register_radiocontainer">
                        <div className="wrapper">
                            <label>Female</label>
                            <input required onChange={(e) => setGender(e.target.value)}
                                type="radio"
                                name="gender"
                                value="Female"
                            />
                        </div>
                        <div className="wrapper">
                            <label>Male</label>
                            <input required onChange={(e) => setGender(e.target.value)}
                                type="radio"
                                name="gender"
                                value="Male"
                            />
                        </div>
                        <div className="wrapper">
                            <label>Other</label>
                            <input required onChange={(e) => setGender(e.target.value)}
                                type="radio"
                                name="gender"
                                value="Other"
                            />
                        </div>
                        </div>
                        <p className="register_policy">
                            By clicking Sign Up, you agree to our{" "}
                            <span>Terms, Date Policy</span> and <span>
                                Cookie Policy may receive SMS notifications from us and can opt out at any time.
                            </span>
                        </p>
                        <center>
                            <button onClick={register} type="submit" className="register_register">
                                Sign Up
                            </button>
                        </center>
                        <center>
                            <Link to="/login">
                                <p className="register_login">Already have an account ?</p>
                            </Link>
                        </center>
                </form>
            </div>
        </div>
    )
}

export default Register
