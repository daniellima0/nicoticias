import { styled } from "@mui/material";
import React from "react";
import cachorro from "../../../images/cachorro.png";
import chico from "../../../images/chico.png";
import clube from "../../../images/clube.png";
import nandao from "../../../images/nandao.png";
import gorila from "../../../images/gorila.png";

const Container = styled("div")`
    width: 66%;
    background-color: white;
    overflow: hidden;
    display: flex;
`;

const Item = styled("div")`
    display: flex;
    flex: 0 0 100%;
    object-fit: cover;
`;

const Image = styled("img")`
    width: 250px;
`;

const ContentWrapper = styled("div")`
    background-color: #d9d9d9;
    flex: 1;
`;

const Carousel: React.FC = () => {
    const carouselItens = [
        {
            title: "Noticia 1",
            description: "Descrição da noticia 1",
            image: nandao,
        },
        {
            title: "Noticia 2",
            description: "Descrição da noticia 2",
            image: cachorro,
        },
        {
            title: "Noticia 3",
            description: "Descrição da noticia 3",
            image: clube,
        },
        {
            title: "Noticia 4",
            description: "Descrição da noticia 4",
            image: gorila,
        },
        {
            title: "Noticia 5",
            description: "Descrição da noticia 5",
            image: chico,
        },
    ];

    return (
        <Container>
            {carouselItens.map((item, index) => {
                return (
                    <Item key={index}>
                        <Image src={item.image} alt="" />
                        <ContentWrapper>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </ContentWrapper>
                    </Item>
                );
            })}
        </Container>
    );
};

export default Carousel;
