import { Card, Col, Row } from 'antd';
import React from 'react';
export default function tallyCard(data) {
  let { totalCases, todayCases, totalDeaths, todayDeaths } = data.worldData;
  //add in conditional for worldData or countryData once added in.
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
        </Col>
        <Col span={4}>
        </Col>
        <Col span={4}>
          <Card title=" " bordered={false}>
            <p></p>
          </Card>
        </Col>
        <Col span={8}>
        </Col>
      </Row>
    </div>
  );
}
