import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./Reset.css";
import "./App.sass";
import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
