import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import explosionGif from "../../../images/explosion.gif";
import MuiButton from "@mui/material/Button";

const Form = styled("form")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 130px;
`;

const Label = styled("label")`
    margin-bottom: 40px;
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

const Button = styled(MuiButton)`
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

const Gif = styled("img")`
    position: absolute;
    z-index: 10;
    right: 340px;
    top: 0;
    width: 700px;
`;

const Forms: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showExplosion, setShowExplosion] = useState(false);

    const userCredentials = {
        username: "nicoboco",
        password: "123456",
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            username !== userCredentials.username ||
            password !== userCredentials.password
        ) {
            alert("Wrong username or password");
            return;
        } else {
            setShowExplosion(true);
            setTimeout(() => {
                window.location.href = "/news";
                document.cookie = "token=token123";
            }, 3000);
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
            <Button variant="contained" type="submit">
                DETONATE
            </Button>
            {showExplosion && <Gif src={explosionGif} alt="Explosion" />}
        </Form>
    );
};

export default Forms;
