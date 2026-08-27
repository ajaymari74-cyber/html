import Home from "./home1";
import Contact from "./contact";
import Gallery from "./gallery";
import About from "./about";
import Header from "./header";
import "./index.css";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Fruite } from "./Fruite";

const App = () => {
    return (
        <BrowserRouter>

            <div>
                <Header />
                <Fruite />

                <nav>
                    <Link to="/home1">Home | </Link>
                    <Link to="/about">About | </Link>
                    <Link to="/contact">Contact | </Link>
                    <Link to="/gallery">Gallery</Link>
                </nav>

                <Routes>
                    <Route path="/home1" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>

            </div>

        </BrowserRouter>
    );
};

export default App;