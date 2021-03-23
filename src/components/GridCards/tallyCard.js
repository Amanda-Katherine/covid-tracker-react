import { Card, Col, Row } from 'antd';
import React from 'react';
export default function tallyCard(data) {
  let { totalCases, todayCases, totalDeaths, todayDeaths } = data.worldData;
  //add in conditional for worldData or countryData once added in.
  let title = data.worldData ? 'Global Stats' : 'US Stats';

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title={title} bordered={false}>
            <hr />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="New Daily Cases:" bordered={false}>
            {todayCases}
          </Card>
        </Col>
        <Col span={4}>
          <Card title=" " bordered={false}>
            <p></p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Cases:" bordered={false}>
            {totalCases}
          </Card>
        </Col>
        </Col>
      </Row>
    </div>
  );
}
