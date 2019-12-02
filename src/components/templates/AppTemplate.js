import React from "react";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { Typography, Layout } from "antd";
import { Row, Col } from "antd";

//const { Title } = Typography;

const Title = styled(Typography)({
  color: "#FFFCF2"
});

const { Header, Footer, Content } = Layout;

const AppTemplate = () => {
  return (
    <Layout>
      <Header>
        <Title>Pomodorify</Title>
      </Header>
      <Content>
        <Row>
          <Col span={8}>ahoj</Col>
          <Col span={8}>kamarade</Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default AppTemplate;
