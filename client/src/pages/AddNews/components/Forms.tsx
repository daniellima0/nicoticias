import { styled } from "@mui/material/styles";
import React, { useState } from "react";

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
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
  width: 500px;
  height: 40px;
  border: 1px solid #ff9900;
  background-color: #ff9900;
  color: black;

  :focus {
    outline: 1px solid #ff0000;
  }
`;

const TextArea = styled("textarea")`
  font-size: 1.1rem;
  margin-top: 5px;
  padding: 10px;
  width: 500px;
  min-height: 200px;
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
  font-size: 20px;

  :hover {
    background-color: rgb(255, 0, 0, 0.8);
    cursor: pointer;
    color: black;
  }
`;

const Forms: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleAddNews = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && description && url) {
      try {
        fetch("http://localhost:4111", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            url,
          }),
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        alert(err);
      }

      window.location.href = "/news";

      return;
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <Form onSubmit={handleAddNews}>
      <Label>
        Título:
        <Input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Label>
      <Label>
        Descrição:
        <TextArea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Label>
      <Label>
        URL da imagem:
        <Input
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
      </Label>
      <Button type="submit">ADICIONAR</Button>
    </Form>
  );
};

export default Forms;
