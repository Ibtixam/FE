import React from "react";
import styled from "styled-components";

interface Props {
  theme?: String;
}

const PageNotFound: React.FC<Props> = ({ theme }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    color: ${theme === "light" ? "black" : "white"};
  `;

  const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `;

  const Title404 = styled.h1`
    font-size: 22px;
    font-weight: 600;
    padding-left: 12px;
  `;

  const Error = styled.p`
    font-size: 14px;
  `;

  const Line = styled.hr`
    height: 45px;
    width: 1px;
    border: none;
    background-color: ${theme === "light" ? "black" : "white"};
  `;

  return (
    <Wrapper>
      <Container>
        <Title404>404</Title404>
        <Line />
        <Error>This page could not be found.</Error>
      </Container>
    </Wrapper>
  );
};

export default PageNotFound;
