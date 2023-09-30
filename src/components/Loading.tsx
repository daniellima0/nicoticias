import nicoboco from "../images/nicoboco.png";
import { styled } from "@mui/material/styles";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4;
    height: 100vh;
    background-color: black;
`;

const Image = styled("img")`
    width: 256px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

const Text = styled("p")`
    color: white;
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
    margin-top: 40px;
`;

const Loading: React.FC = () => {
    return (
        <Container>
            <Image src={nicoboco} alt="MRobot logo" />
            <Text className="text-2xl text-black">Carregando...</Text>
        </Container>
    );
};

export default Loading;
