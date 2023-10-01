import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../../components/Header";
import Carousel from "./components/Carousel";
import { Navigate } from "react-router-dom";

const Container = styled("div")`
    background-color: black;
    height: 100vh;
    color: #ff9900;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const News: React.FC = () => {
    return (
        <>
            {!document.cookie.split("=")[1] && <Navigate to="/" />}
            <Container>
                <Header />
                <Carousel />
            </Container>
        </>
    );
};

export default News;
