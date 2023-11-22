import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Config from "./Components/Config";
import Quiz from "./Components/Quiz";

import "./App.css"
const App = () => {
    return (
        <div className="container">
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/config" element={<Config />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </div>
    );
};

export default App;
