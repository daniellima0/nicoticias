import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = styled("form")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

const Label = styled("label")`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`;

const Input = styled("input")`
    font-size: 1.1rem;
    margin-top: 5px;
    padding: 10px;
    width: 400px;
    height: 40px;
    border: 1px solid #ff9900;
    background-color: #ff9900;
    color: black;

    :focus {
        outline: 1px solid #ff0000;
    }
`;

const Button = styled("button")`
    margin-top: 10px;
    padding: 5px;
    width: 400px;
    height: 40px;
    border: 1px solid #ff0000;
    background-color: #ff0000;
    color: black;
    font-size: 25px;

    :hover {
        background-color: rgb(255, 0, 0, 0.8);
        cursor: pointer;
        color: black;
    }
`;

const Forms: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userCredentials = {
        username: "nicoboco",
        password: "123456",
    };

    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            username !== userCredentials.username ||
            password !== userCredentials.password
        ) {
            alert("Wrong username or password");
            return;
        } else {
            navigate("/news");
        }
    };

    return (
        <Form onSubmit={handleLogin}>
            <Label>
                $ login-reporter:
                <Input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </Label>
            <Label>
                [sudo] password:
                <Input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Label>
            <Button type="submit">DETONATE</Button>
        </Form>
    );
};

export default Forms;
