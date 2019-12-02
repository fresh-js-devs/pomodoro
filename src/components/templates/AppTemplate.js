import React from "react";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { Typography, Layout, Row, Col, InputNumber, Button } from "antd";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

const AppTemplate = props => {
  const { onMinutesChange, onSecondsChange, minutes, seconds } = props;
  return (
    <Layout>
      <Header>
        <Title>Pomodorify</Title>
      </Header>
      <Content>
        <Row type="flex" align="middle">
          <Col offset={1} span={3}>Focus time:</Col>
          <Col span={2}>
            <InputNumber
              min={1}
              max={60}
              defaultValue={1}
              value={minutes}
              onChange={event => onMinutesChange(event)}
            />
          </Col>
          <Col span={3}>Minutes</Col>
          <Col span={2}>
            <InputNumber
              min={1}
              max={59}
              defaultValue={1}
              value={seconds}
              onChange={event => onSecondsChange(event)}
            />
          </Col>
          <Col span={3}>Seconds</Col>
        </Row>

        <Row type="flex">
          <Col offset={11}>
            <Button type="primary">GO!</Button>
          </Col>
        </Row>

        <Row type="flex" align="middle">
          <Col offset={2} span={2}>
            <Title level={3}>Minutes</Title>
          </Col>
          <Col span={1}>
            <Title level={3}>{minutes}</Title>
          </Col>
          <Col span={1}>
            <Title level={3}>:</Title>
          </Col>
          <Col span={1}>
            <Title level={3}>{seconds}</Title>
          </Col>
          <Col span={1}>
            <Title level={3}>Seconds</Title>
          </Col>
        </Row>

        <Row type="flex">
          <Col offset={11}>
            <Button type="danger">STOP!</Button>
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default AppTemplate;
