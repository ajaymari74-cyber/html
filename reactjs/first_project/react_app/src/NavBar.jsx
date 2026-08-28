// import { useState } from "react";
// import Home from "./home1";
// import Contact from "./contact";
// import Gallery from "./gallery";
// import About from "./about";
// import "./index.css";
// // FIX: Imported with a capital 'Header'
// import Header from "./header"; 
// // FIX: Capitalized Link, Routes, and Route
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const Navbar = () => {
//     // useState can track your active route if needed
//     const [activeTab, setActiveTab] = useState("home");

//     return (
//         <div>
//             {/* FIX: Capitalized component tag so it displays */}
//             <Header />
       
//             <BrowserRouter>
//                 <nav id="header" style={{ textAlign: 'left', color: '#ff9900' }}>
//                     {/* FIX: Capitalized Link tags */}
//                     <Link to="/home1" onClick={() => setActiveTab("home")}>Home | </Link>
//                     <Link to="/about" onClick={() => setActiveTab("about")}>About | </Link>
//                     <Link to="/contact" onClick={() => setActiveTab("contact")}>Contact | </Link>
//                     <Link to="/gallery" onClick={() => setActiveTab("gallery")}>Gallery | </Link>
//                 </nav>
                
//                 {/* FIX: Capitalized Routes and Route tags */}
//                 <Routes>
//                     <Route path="/home1" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/gallery" element={<Gallery />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default Navbar;
