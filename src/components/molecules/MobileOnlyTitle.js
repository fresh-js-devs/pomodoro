import React from "react";
import Title from "antd/lib/typography/Title";

const MobileOnlyTitle = () => {
  return (
    <Title>
      Sorry, we are mobile only{" "}
      <span role="img" aria-label="sadface">
        😔
      </span>
    </Title>
  );
};

export default MobileOnlyTitle;
