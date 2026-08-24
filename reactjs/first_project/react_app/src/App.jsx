// import Counter from "./count"; 
// // Fixed: Pointed the import path to your actual file name "./Inputname"
// import Inputname from "./Inputname";
import Name from "./namedisplay";
import Counter from "./counter";
import LoginForm from "./loginform";


function App() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {/* <Counter />
            <hr style={{ margin: "30px auto", width: "50%" }} />
            <Inputname /> */}
            <Name />
            <Counter/>
            <LoginForm />
        </div>
    );
}

export default App;
