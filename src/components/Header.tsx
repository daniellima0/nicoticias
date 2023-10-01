import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const Container = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 160px;
    width: 100vw;
`;

const Title = styled("h1")`
    color: #ff9900;
    font-size: 50px;
    grid-column: 2;
    align-self: center;
    justify-self: center;
`;

const LogoffButton = styled("button")`
    color: black;
    font-size: 18px;
    font-weight: 700;
    width: 80px;
    height: 40px;
    border: 1px solid #ff9900;
    background-color: #ff9900;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    align-self: center;
    justify-self: end;
    margin-right: 60px;
`;

const Header: React.FC = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const token = document.cookie.split("=")[1];

        if (token) {
            setIsUserLoggedIn(true);
        }
    }, [setIsUserLoggedIn]);

    const handleLogoff = () => {
        window.location.href = "/";
        document.cookie = "token=";
    };

    return (
        <Container>
            <Title>NICOTICIAS</Title>
            {isUserLoggedIn && (
                <LogoffButton onClick={handleLogoff}>Sair</LogoffButton>
            )}
        </Container>
    );
};

export default Header;
