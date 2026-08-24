import { useState } from "react"; 

let Name = () => { 
  // 1. Fixed the syntax error in the initial state object
  const [formData, setFormData] = useState({ name: "", role: "" }); 

  let handleChange = (e) => { 
    const { name, value } = e.target; 
    // 2. Fixed the spread operator and bracket syntax
    setFormData({ ...formData, [name]: value }); 
  }; 

  return ( 
    <div style={{ marginTop: "20px" }}> 
      {/* 3. Added the 'name' attribute to match the state keys */}
      {/* 4. Bound values to the specific object properties */}
      <input 
        type="text" 
        name="name"
        placeholder="Enter name" 
        value={formData.name} 
        onChange={handleChange} 
      /> 
      <input 
        type="text" 
        name="role"
        placeholder="Enter role" 
        value={formData.role} 
        onChange={handleChange} 
      /> 
      {/* 5. Rendered the values directly from the object */}
      <p>Name: {formData.name}</p> 
      <p>Role: {formData.role}</p> 
    </div> 
  ); 
}; 

// 6. Changed export name to match the component function name
export default Name;
