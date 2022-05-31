import { ref,set } from "firebase/database";
import React, { useState } from "react";
import { firebaseDatabase } from "../backend/firebaseHandler";
import './postjobStyles.css';

const PostJob=()=>{

    
    const [postData,setpostData]=useState({
        CompName:"",
        post:"",
        pack:"",
        Loca:"",
        tenth:"",
        twel:"",
        sem:"",
        current:""
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setpostData({
            ...postData,
            [name]: value
        })

    }
    const handlePost=async()=>{
        try{
            const postRef=ref(firebaseDatabase,`POST-RECORDS/${postData.CompName}`);
            await set(postRef,postData);

            alert("Your Data have saved successfully!");
            
            setpostData({
                CompName:"",
                post:"",
                pack:"",
                Loca:"",
                tenth:"",
                twel:"",
                sem:"",
                current:""
            })

        }
        catch(err){
            alert(err);
        }
     
    }

    return(
        <div className="record-data-container">
        <div className="input-feilds-container">
            <input className="inputs" value={postData.CompName} onChange={handleChange} name="CompName" placeholder="Company Name"/>
            <input className="inputs" value={postData.post} onChange={handleChange} name="post" placeholder="Post"/>
            <input className="inputs" value={postData.pack} onChange={handleChange} name="pack" placeholder="Package"/>
            <input className="inputs" value={postData.Loca} onChange={handleChange} name="Loca" placeholder="Location"/>
            <input className="inputs" value={postData.tenth} onChange={handleChange} name="tenth"  placeholder="10th Cutoff"/>
            <input className="inputs" value={postData.twel} onChange={handleChange} name="twel"  placeholder="12th Cutoff"/>
            <input className="inputs" value={postData.sem} onChange={handleChange} name="sem"  placeholder="Sem Cutoff"/>
            <input className="inputs" value={postData.current} onChange={handleChange} name="current"  placeholder="Current CGPA Cutoff"/>
            <button className="Post-button" onClick={handlePost}>Post Page</button>

        </div>
    </div>
    )

}
export default PostJob;