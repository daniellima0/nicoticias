import { styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import cachorro from "../../../images/cachorro.png";
import chico from "../../../images/chico.png";
import clube from "../../../images/clube.png";
import nandao from "../../../images/nandao.png";
import gorila from "../../../images/gorila.png";

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
  height: 400px;
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
  object-fit: cover;
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

interface INews {
  _id: string;
  title: string;
  description: string;
  url: string;
}

const defaultNewsList = [
  {
    _id: "1",
    title: "Noticia 1",
    description: "Descrição da noticia 1",
    url: nandao,
  },
  {
    _id: "2",
    title: "Noticia 2",
    description: "Descrição da noticia 2",
    url: cachorro,
  },
  {
    _id: "3",
    title: "Noticia 3",
    description: "Descrição da noticia 3",
    url: clube,
  },
  {
    _id: "4",
    title: "Noticia 4",
    description: "Descrição da noticia 4",
    url: gorila,
  },
  {
    _id: "5",
    title: "Noticia 5",
    description: "Descrição da noticia 5",
    url: chico,
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [newsList, setNewsList] = useState<Array<INews>>(defaultNewsList);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? newsList.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === newsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_BASE_URL)
      .then((response) => response.json())
      .then((result: INews[]) => {
        setNewsList((prevNewsList) => [
          ...prevNewsList,
          ...result.map((item) => ({
            _id: item._id,
            title: item.title,
            description: item.description,
            url: item.url,
          })),
        ]);
      });
  }, []);

  return (
    <Container>
      <Button onClick={goToPreviousSlide}>
        <Icon path={mdiChevronLeft} size={2} color={"white"} />
      </Button>
      <SliderWrapper>
        {newsList.map((item) => {
          return (
            <Item
              key={item._id}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              <Image src={item.url} alt="" />
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
