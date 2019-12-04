import React from "react";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { Typography, Layout, InputNumber, Button } from "antd";

const { Title, Paragraph } = Typography;

const { Header, Footer, Content } = Layout;

const SiteWrapper = styled.div({
  display: "flex",
  margin: "0 auto",
  flexDirection: "column"
});

const RowWrapper = styled.div({
  display: "flex",
  marginBottom: "20px",
  marginTop: "5px"
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

const InfoWrapper = styled.div({
  display: "flex",
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
});

const LegendWrapper = styled.div({
  display: "flex",
  marginTop: "45px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
});

const AppTemplate = props => {
  const {
    onMinutesChange,
    onSecondsChange,
    minutes,
    seconds,
    onGoClick,
    zerosDisabledButton,
    onStopClick
  } = props;
  return (
    <SiteWrapper>
      <Layout style={{ height: "75vh" }}>
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
            <Title level={3} style={{ margin: "0 5px" }}>
              Minutes
            </Title>
            <InputNumber
              min={0}
              max={59}
              defaultValue={0}
              value={minutes}
              onChange={event => onMinutesChange(event)}
              type="number"
              pattern="[0-9]*"
            />
          </RowWrapper>
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
              type="number"
              pattern="[0-9]*"
            />
          </RowWrapper>

          <ButtonsWrapper>
            <Button
              type="primary"
              onClick={onGoClick}
              disabled={zerosDisabledButton}
            >
              GO!
            </Button>
            <Button type="danger" onClick={onStopClick}>
              STOP!
            </Button>
          </ButtonsWrapper>

          <InfoWrapper>
            <Title>FT{"/"}BT</Title>
            <Title style={{ margin: 0 }}>
              {minutes}:{seconds}
            </Title>
          </InfoWrapper>
          <LegendWrapper>
            <Paragraph>Set your time</Paragraph>
            <Paragraph>Short break: 5 minutes</Paragraph>
            <Paragraph>Long break: 10 minutes</Paragraph>
          </LegendWrapper>
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
