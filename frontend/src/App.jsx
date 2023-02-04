import {BrowserRouter, Route, Routes} from "react-router-dom";

function Home() {
    return null;
}

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
