import React,{useState} from 'react'
import { useHistory } from 'react-router'
import './login.css'
import axios from 'axios'
import img15 from '../images/35.png'

export default function Login() {
    const [login,setLogin] = useState({
        userName : "",
        password : ""
    })

    let history = useHistory();

    const handleLogin = (e) =>{
        e.preventDefault();
        setLogin({
            userName : "",
            password : ""
        })
        axios.post('https://api.jsonbin.io/b',login,{
            headers:{
                "Content-Type": 'application/json',
                "secret-key" : "$2b$10$y9yd7bbgUDQYdw2atNhayOHh6LZwSlR5.ZH42NWqrEZjIQ/70MBcG",
                'collection-id' : "613a3141aa02be1d44452766"
            }
        }).then(
            response=>{
                console.log(response.data);
                alert("Successfully Logged");
            }
        )
        .catch(
            error=>{
                console.log(error);
            }
        )
        history.push("/");
    }

    return (
        <div className="log">
            <form className="login_tot"> 
                <img src={img15} className="login_img"/>
                <div className="login_form">               
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" value={login.userName} className="form-control" placeholder="Username" 
                        onChange={(e) => setLogin({...login ,userName: e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={login.password} className="form-control" placeholder="Password" 
                        onChange={(e) => setLogin({...login, password: e.target.value})} required/>
                    </div>
                    <button onClick={handleLogin} className="login_btn">Login</button>
                </div>
            </form>
        </div>
    )
}
