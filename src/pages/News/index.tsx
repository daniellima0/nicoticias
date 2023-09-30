import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../../components/Header";
import Carousel from "./components/Carousel";

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
        <Container>
            <Header />
            <Carousel />
        </Container>
    );
};

export default News;
