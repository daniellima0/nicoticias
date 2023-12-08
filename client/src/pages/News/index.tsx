import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../../components/Header";
import Carousel from "./components/Carousel";
import { Navigate } from "react-router-dom";

const Container = styled("div")`
  background-color: black;
  height: 100vh;
  color: #ff9900;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeleteButton = styled("button")`
  color: black;
  font-size: 18px;
  font-weight: 700;
  width: 120px;
  height: 40px;
  border: 1px solid #ff0000;
  background-color: #ff0000;
  cursor: pointer;
  align-self: center;
  justify-self: start;
  margin-left: 60px;
  margin-top: 150px;
`;

const News: React.FC = () => {
  const handleDelete = () => {
    fetch(import.meta.env.VITE_API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!document.cookie.split("=")[1] && <Navigate to="/" />}
      <Container>
        <Header addNewsButton={true} />
        <Carousel />
        <DeleteButton onClick={handleDelete}>Delete All</DeleteButton>
      </Container>
    </>
  );
};

export default News;
