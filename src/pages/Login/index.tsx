import React from "react";
import { styled } from "@mui/material/styles";
import Forms from "./components/Forms";
import Header from "../../components/Header";

const Container = styled("div")`
    background-color: black;
    height: 100vh;
    color: #ff9900;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Login: React.FC = () => {
    return (
        <Container>
            <Header />
            <Forms />
        </Container>
    );
};

export default Login;
