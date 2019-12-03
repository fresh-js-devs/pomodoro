import React from "react";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { Typography, Layout, InputNumber, Button } from "antd";
import SiteWrapper from "../atoms/SiteWrapper";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

const TitleWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignContent: "center"
});

const AppTemplate = props => {
  const {
    onMinutesChange,
    onSecondsChange,
    minutes,
    seconds,
    onGoClick
  } = props;
  return (
    <SiteWrapper>
      <Layout>
        <Header>
          <TitleWrapper>
            <Title style={{ color: "white" }}>
              Pomod
              <span role="img" aria-label="heart">
                🍅
              </span>
            </Title>
            <Title style={{ color: "#ff4d4f" }}>rify</Title>
          </TitleWrapper>
        </Header>

        <Content>
          <Title level={3}>Minutes</Title>

          <Title level={3}>
            <InputNumber
              min={0}
              max={59}
              defaultValue={1}
              value={minutes}
              onChange={event => onMinutesChange(event)}
            />
          </Title>
          <Title level={3}>:</Title>

          <Title level={3}>
            <InputNumber
              min={1}
              max={59}
              defaultValue={1}
              value={seconds}
              onChange={event => onSecondsChange(event)}
            />
          </Title>

          <Title level={3}>Seconds</Title>

          <Button type="primary" onClick={onGoClick}>
            GO!
          </Button>

          <Button type="danger">STOP!</Button>
        </Content>

        <Footer>
          Pomodorify, made with love{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Footer>
      </Layout>
    </SiteWrapper>
  );
};

export default AppTemplate;
