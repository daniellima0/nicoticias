import { styled } from "@mui/material/styles";

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
`;

const Button = styled("button")`
    color: black;
    font-size: 20px;
    width: 180px;
    height: 40px;
    border: 1px solid #ff9900;
    background-color: #ff9900;
`;

// const LoginButton = styled("button")`
//     width: 40px;
//     height: 40px;
//     border: 1px solid #ff9900;
//     background-color: #ff9900;
// `;

const Header: React.FC = () => {
    return (
        <Container>
            <Button>ticias</Button>
            <Title>NICOTICIAS</Title>
            <Button>a</Button>
        </Container>
    );
};

export default Header;
