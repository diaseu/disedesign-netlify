import React from 'react';
import 'antd/dist/antd.css'
import { Breadcrumb, Row, Col, Card } from 'antd';

const { Meta } = Card;

const Portfolio = props => {

  return (
    <>
      <Breadcrumb style={{ margin: '16px' }}>
        <Breadcrumb.Item>DIA SEU</Breadcrumb.Item>
        <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h1 className="line">My Projects</h1>

        <Row>
          <Col xs={12} xl={6}>
            <Card
              hoverable
              style={{ width: 440 }}
              cover={<img alt="example" src="https://i.imgur.com/nJf59GQ.png" />}
            >
              <Meta title="Zap: Bug Tracker" description="Social bug tracking app, with the ability to crowd-source solutions to issues and questions" />
            </Card>
          </Col>
          <Col xs={12} xl={6}>
            <Card
              hoverable
              style={{ width: 440 }}
              cover={<img alt="example" src="https://i.imgur.com/43rACDv.png" />}
            >
              <Meta title="Study Blog" description="https://studyblog.herokuapp.com/" />
            </Card>
          </Col>
          <Col xs={12} xl={6}>
            <Card
              hoverable
              style={{ width: 440 }}
              cover={<img alt="example" src="https://i.imgur.com/nJf59GQ.png" />}
            >
              <Meta title="Beleaf Co." description="beleaf.co" />
            </Card>
          </Col>
        </Row>

      </div>
    </>
  )
}

export default Portfolio