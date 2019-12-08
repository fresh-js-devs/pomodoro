import React from "react";
import Title from "antd/lib/typography/Title";
import Box from "../atoms/Box";

const MainTitle = () => {
  return (
    <Box marginBottom="20px" marginTop="5px">
      <Title style={{ color: "white" }}>
        Pomod
        <span role="img" aria-label="heart">
          🍅
        </span>
      </Title>
      <Title style={{ color: "#ff4d4f", marginTop: 0 }}>rify</Title>
    </Box>
  );
};

export default MainTitle;
