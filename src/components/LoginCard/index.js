import React from "react";
import styled from "styled-components";

const ContainerLoginCard = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: 120px auto;
  background: #eb9e89;
  border: 2px solid #ed7f61;
  align-items: center;
  border-radius: 30px;
  width: 430px;
  height: auto;
  @media (max-width: 380px) {
    width: 80vw;
  }
`;

function LoginCard(props) {
  return <ContainerLoginCard>{props.children}</ContainerLoginCard>;
}

export default LoginCard;
