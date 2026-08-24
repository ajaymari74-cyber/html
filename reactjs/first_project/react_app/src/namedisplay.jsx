import { useState } from "react";
let Name =()=> {
    const  [formData, setFormData] =useState({name:""});
    let handleChange= (e) =>{
        const {name , value}=e.target;
        setFormData({...FormData,[name]:value});
    };
    return(
        <div style={{marginTop:"20px"}}>
        <input type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        />
        {
            <p>Name:{formData.name}</p>
        }

        </div>
    );
};
export default Name