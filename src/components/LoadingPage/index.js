import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const LoaderWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 50px auto;
`;

const LoadingMessage = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: regular;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.75px;
  color: #ed7f61;
  @media (max-width: 380px) {
    margin-top: 5vw;
    margin-left: 3vw;
  }
`;

export const LoadingPage = () => (
  <LoaderWrapper>
    <ReactLoading type={"spin"} color={"#ed7f61"} height={100} width={100}></ReactLoading>
    <LoadingMessage>Carregando...</LoadingMessage>
  </LoaderWrapper>
);
