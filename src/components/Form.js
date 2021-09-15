import React,{useState} from 'react'
import './form.css'
import axios from 'axios'

export default function Form() {

    const[form, setForm] = useState({
        FullName: "",
        Email: "",
        MobileNumber: "",
        CollegeName: ""
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setForm({
            FullName: "",
            Email: "",
            MobileNumber: "",
            CollegeName: ""
        })
        axios.post('https://api.jsonbin.io/b',form,{
            headers:{
                "Content-Type": 'application/json',
                "secret-key" : "$2b$10$y9yd7bbgUDQYdw2atNhayOHh6LZwSlR5.ZH42NWqrEZjIQ/70MBcG",
                'collection-id' : "61375241470d33259403e4c0"
            }
        }).then(
            response=>{
                console.log(response.data);
            }
        )
        .catch(
            error=>{
                console.log(error);
            }
        )
    }

    return (
        <div className="form">
            <form className="sub_form"> 
                <div className="subscribe">Subscribe To Our Newsletter</div>               
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name"  className="form-control" value={form.FullName} placeholder="Full Name" 
                    onChange={ (e) => setForm({...form ,FullName: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email"  className="form-control" value={form.Email} placeholder="Email" 
                    onChange={ (e) => setForm({...form ,Email: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="number" name="no"  className="form-control" value={form.MobileNumber} placeholder="Mobile number" 
                    onChange={ (e) => setForm({...form ,MobileNumber: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>College Name</label>
                    <input type="text" name="col"  className="form-control" value={form.CollegeName} placeholder="College Name" 
                    onChange={ (e) => setForm({...form ,CollegeName: e.target.value})} required/>
                </div>
                <button onClick={handleSubmit} className="sub_btn">Submit</button>
            </form>
        </div>
    )
}
