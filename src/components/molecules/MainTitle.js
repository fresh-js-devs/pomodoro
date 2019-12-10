import React from "react";
import Title from "antd/lib/typography/Title";
import Box from "../atoms/Box";
import styled from "@emotion/styled";

const QuerryWrapper = styled.div`
  display: flex;
  @media (max-width: 320px) {
    display: -webkit-box
  }
`;

const MainTitle = () => {
  return (
    <Box marginBottom="20px" marginTop="5px">
      <QuerryWrapper>
        <Title style={{ color: "white" }}>
          Pomod
          <span role="img" aria-label="heart">
            🍅
          </span>
        </Title>
      </QuerryWrapper>
      <Title style={{ color: "#ff4d4f", marginTop: 0 }}>rify</Title>
    </Box>
  );
};

export default MainTitle;
