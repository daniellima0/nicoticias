import { styled } from "@mui/material/styles";
import Icon from "@mdi/react";
import { mdiLoginVariant } from "@mdi/js";
import { useNavigate } from "react-router-dom";

const Container = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    width: 100vw;
    padding: 0 60px;
`;

const Title = styled("h1")`
    color: #ff9900;
    font-size: 50px;
    margin-right: 100px;
`;

const Button = styled("button")`
    color: black;
    font-size: 20px;
    width: 140px;
    height: 40px;
    border: 1px solid #ff9900;
    background-color: #ff9900;
`;

const LoginButton = styled("button")`
    color: black;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border: 1px solid #ff9900;
    background-color: #ff9900;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/");
    };

    return (
        <Container>
            <Button>Notícias</Button>
            <Title>NICOTICIAS</Title>
            <LoginButton onClick={handleLogin}>
                <Icon path={mdiLoginVariant} size={1} />
            </LoginButton>
        </Container>
    );
};

export default Header;
