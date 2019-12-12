import React from "react";
import "antd/dist/antd.css";
import { Typography, Layout, Button, Progress } from "antd";
import Box from "../atoms/Box";
import MainTitle from "../molecules/MainTitle";
import SmallScreenQuerry from "../atoms/SmallScreenQuerry";
import windowSize from "react-window-size";
import MobileOnlyTitle from "../molecules/MobileOnlyTitle";

const { Title, Paragraph } = Typography;

const { Header, Footer, Content } = Layout;

const AppTemplate = ({
  minutes,
  seconds,
  onGoClick,
  onStopClick,
  workLoop,
  breakLoop,
  breakTimeWorkTime,
  disableStopButton,
  disableGoButton,
  percents,
  windowWidth
}) => {
  const isMobile = windowWidth <= 768;
  return isMobile ? (
    <Box margin="0 auto" flexDirection="column">
      <Layout style={{ height: "100vh" }}>
        <Header>
          <MainTitle />
        </Header>

        <Content>
          <Box
            marginTop="50px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Title>{breakTimeWorkTime}</Title>
            <Box margin="10px">
              <Progress
                type="circle"
                percent={percents}
                strokeColor={"#ff4d4f"}
              />
            </Box>
            <Title style={{ margin: 0 }}>
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
            </Title>

            <SmallScreenQuerry>
              <Title level={3}> Work: {workLoop}</Title>
              <Title level={3}>Break: {breakLoop}</Title>
            </SmallScreenQuerry>
          </Box>
          <Box
            marginTop="45px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <SmallScreenQuerry>
              <Paragraph>Work time: 25 minutes</Paragraph>
              <Paragraph>Short break: 5 minutes</Paragraph>
              <Paragraph>Long break: 10 minutes</Paragraph>
            </SmallScreenQuerry>
          </Box>
          <Box
            marginTop="15px"
            justifyContent="space-around"
            alignItems="center"
          >
            <Button
              type="primary"
              onClick={onGoClick}
              style={{ margin: "0 20px" }}
              disabled={disableGoButton}
            >
              GO!
            </Button>
            <Button
              type="danger"
              onClick={onStopClick}
              disabled={disableStopButton}
            >
              STOP!
            </Button>
          </Box>
        </Content>

        <Footer>
          <Box justifyContent="center">
            Pomodorify, made with love{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Box>
        </Footer>
      </Layout>
    </Box>
  ) : (
    <Box margin="0 auto" flexDirection="column">
      <Layout style={{ height: "100vh" }}>
        <Header>
          <MainTitle />
        </Header>

        <Content>
          <Box
            justifyContent="center"
            alignItems="center"
            margin="15%"
            flexDirection="column"
          >
            <MobileOnlyTitle/>
            <iframe
              title="im sorry im trying"
              src="https://open.spotify.com/embed/track/51CUtoKY6oPN5PIXJsCQIq"
              width="300"
              height="75"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </Box>
        </Content>

        <Footer>
          <Box justifyContent="flex-end">
            Pomodorify, made with love{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Box>
        </Footer>
      </Layout>
    </Box>
  );
};

export default windowSize(AppTemplate);
