import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../../components/Header";
import { Navigate } from "react-router-dom";
import Forms from "./components/Forms";

const Container = styled("div")`
    background-color: black;
    height: 100vh;
    color: #ff9900;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AddNews: React.FC = () => {
    return (
        <>
            {!document.cookie.split("=")[1] && <Navigate to="/" />}
            <Container>
                <Header addNewsButton={false} />
                <Forms />
            </Container>
        </>
    );
};

export default AddNews;
