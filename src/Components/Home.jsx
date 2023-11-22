import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    return (
        <>
        <div className="header">
            <div className="text">
            
                <h6 className="texth6"> Train Your Brain</h6>
                <h1 className="texth1">Qui<span>zz</span>ee Qui<span>z</span> </h1>
                <h3>Quick quiz knowledge booter for a perfect level up</h3>
                <div className="line"></div>
                <h1 className="texth11">welcome!</h1>
            </div>
            <Link to="/config" className="button">Go To Quiz</Link>

        </div>
        </>
    );
};

export default Home;
