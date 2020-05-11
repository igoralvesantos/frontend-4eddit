import React from "react";
import styled from "styled-components";

const ContainerRegisterCard = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: 120px auto;
  background: #eb9e89;
  border: 2px solid #ed7f61;
  align-items: center;
  border-radius: 30px;
  width: 430px;
  height: 500px;
  @media (max-width: 780px) {
    width: 80vw;
  }
`;

function RegisterCard(props) {
  return <ContainerRegisterCard>{props.children}</ContainerRegisterCard>;
}

export default RegisterCard;
