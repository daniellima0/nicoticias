import { styled } from "@mui/material";
import React, { useState } from "react";
import cachorro from "../../../images/cachorro.png";
import chico from "../../../images/chico.png";
import clube from "../../../images/clube.png";
import nandao from "../../../images/nandao.png";
import gorila from "../../../images/gorila.png";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const Container = styled("div")`
    margin-top: 40px;
    width: 70%;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Button = styled("button")`
    width: 200px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const SliderWrapper = styled("div")`
    overflow: auto;
    display: flex;
`;

const Item = styled("div")`
    display: flex;
    flex: 0 0 100%;
    object-fit: cover;
    z-index: 999999;
    transition: transform 0.5s; // Add smooth transition for sliding effect
`;

const Image = styled("img")`
    width: 250px;
`;

const ContentWrapper = styled("div")`
    background-color: #d9d9d9;
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled("h2")`
    color: black;
    font-size: 1.6rem;
    font-weight: 700;
`;

const Description = styled("p")`
    color: black;
    font-size: 1.1rem;
`;

const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPreviousSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselItens.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === carouselItens.length - 1 ? 0 : prevIndex + 1
        );
    };

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
            <Button onClick={goToPreviousSlide}>
                <Icon path={mdiChevronLeft} size={2} color={"white"} />
            </Button>
            <SliderWrapper>
                {carouselItens.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            style={{
                                transform: `translateX(-${activeIndex * 100}%)`,
                            }}
                        >
                            <Image src={item.image} alt="" />
                            <ContentWrapper>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                            </ContentWrapper>
                        </Item>
                    );
                })}
            </SliderWrapper>
            <Button onClick={goToNextSlide}>
                <Icon path={mdiChevronRight} size={2} color={"white"} />
            </Button>
        </Container>
    );
};

export default Carousel;
