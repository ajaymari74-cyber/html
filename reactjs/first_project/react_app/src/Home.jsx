let Home =({detail})=> {
    let {name,role,salary}={...detail}

   return (
   <>
   <h1>{name}</h1>
   <h1>{role}</h1>
   <h1>{salary}</h1>
    </> )
}
export default Home