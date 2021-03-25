import React from "react";
import { MainBg, MaingBg } from "./styles";

const Home = ({ title }) => {
    return (
        <MainBg>
            <h1>{title}</h1>
        </MainBg>
    )
}



export default Home;