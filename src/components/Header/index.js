import React from "react";
import styled from "styled-components";
import logoHeader from "../../resources/logoheader.jpg";

const HeaderContainer = styled.header`
  width: 100vw;
  height: auto;
  background-color: #ed7f61;
`;

const LogoHeader = styled.img`
  width: auto;
  height: 18vh;
  @media (max-width: 380px) {
    text-align: center;
    margin-left: 17vw;
  }
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f5ebe7;
`;

function Header(props) {
  return (
    <PageContainer>
      <HeaderContainer>
        <LogoHeader
          onClick={props.onClick}
          alt="Logo 4eddit"
          src={logoHeader}
        />
        {props.children}
      </HeaderContainer>
    </PageContainer>
  );
}

export default Header;
