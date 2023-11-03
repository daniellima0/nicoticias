import React from "react";
import { styled } from "@mui/material/styles";
import Forms from "./components/Forms";
import Header from "../../components/Header";
import { Navigate } from "react-router-dom";

const Container = styled("div")`
    background-color: black;
    height: 100vh;
    color: #ff9900;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const Login: React.FC = () => {
    return (
        <>
            {document.cookie.split("=")[1] && <Navigate to="/news" />}
            <Container>
                <Header />
                <Forms />
            </Container>
        </>
    );
};

export default Login;
