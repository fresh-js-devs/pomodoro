import React from "react";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { Typography, Layout, InputNumber, Button } from "antd";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

const SiteWrapper = styled.div({
  display: "flex",
  margin: "0 auto",
  flexDirection: "column"
});

const RowWrapper = styled.div({
  display: "flex",
  margin: "10px 0"
});

const ButtonsWrapper = styled.div({
  display: "flex",
  marginTop: "15px",
  justifyContent: "space-around",
  alignItems: "center"
});

const FooterWrapper = styled.div({
  display: "flex",
  justifyContent: "flex-end"
});



const AppTemplate = props => {
  const {
    onMinutesChange,
    onSecondsChange,
    minutes,
    seconds,
    onGoClick,
    zerosDisabledButton
  } = props;
  return (
    <SiteWrapper>
      <Layout style={{ height: "85vh" }}>
        <Header>
          <RowWrapper>
            <Title style={{ color: "white" }}>
              Pomod
              <span role="img" aria-label="heart">
                🍅
              </span>
            </Title>
            <Title style={{ color: "#ff4d4f", marginTop: 0 }}>rify</Title>
          </RowWrapper>
        </Header>

        <Content>
          <RowWrapper>
            <RowWrapper>
              <Title level={3} style={{ margin: "0 5px" }}>
                Minutes
              </Title>
              <InputNumber
                min={0}
                max={59}
                defaultValue={0}
                value={minutes}
                onChange={event => onMinutesChange(event)}
                type="number" pattern="[0-9]*"
              />
            </RowWrapper>
          </RowWrapper>
          <RowWrapper>
            <RowWrapper>
              <Title level={3} style={{ margin: "0 5px" }}>
                Seconds
              </Title>
              <InputNumber
                min={0}
                max={59}
                defaultValue={0}
                value={seconds}
                onChange={event => onSecondsChange(event)}
                type="number" pattern="[0-9]*"
              />
            </RowWrapper>
          </RowWrapper>

          <ButtonsWrapper>
            <Button type="primary" onClick={onGoClick} disabled={zerosDisabledButton}>
              GO!
            </Button>
            <Button type="danger">STOP!</Button>
          </ButtonsWrapper>
        </Content>

        <Footer>
          <FooterWrapper>
            Pomodorify, made with love{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </FooterWrapper>
        </Footer>
      </Layout>
    </SiteWrapper>
  );
};

export default AppTemplate;
