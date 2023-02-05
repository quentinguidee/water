import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./Reset.css";
import "./App.sass";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
