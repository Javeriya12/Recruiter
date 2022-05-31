import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../backend/firebaseHandler";
import './signupStyles.css';

const SignUpPage=()=>{

    const [comData,setcomData]=useState({
        Cname:"",
        HRname:"",
        Loc:"",
        Email:"",
        Pass:""
    });
    
    const nav = useNavigate();

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setcomData({
            ...comData,
            [name]: value
        })

    }

    const handleSign=async()=>{
        try{
            await createUserWithEmailAndPassword(firebaseAuth,comData.Email,comData.Pass)
          
            nav("/Post");
        }
       catch(err){
           alert(err);
       }
    }

    return(
        <div className="record-data-container">
        <div className="input-feilds-container">
            <input className="inputs" value={comData.Cname} onChange={handleChange} name="Cname" placeholder="Company Name"/>
            <input className="inputs" value={comData.HRname} onChange={handleChange} name="HRname" placeholder="HR Name"/>
            <input className="inputs" value={comData.Loc} onChange={handleChange} name="Loc" placeholder="Location"/>
            <input className="inputs" value={comData.Email} onChange={handleChange} name="Email"  placeholder="Email Id"/>
            <input className="inputs" value={comData.Pass} onChange={handleChange} name="Pass"  placeholder="Password"/>
            <button className="sign-up-button" onClick={handleSign}>Sign Up</button>

        </div>
    </div>
    )
}

export default  SignUpPage;