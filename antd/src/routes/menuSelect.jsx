import React from 'react';
import { Row, Col } from 'antd';

const App = ({ children }) => {
  return (<div style={{padding: '0 6%', background: 'rgb(244,244,244)', minHeight: '900px'}}>
    <Row gutter={16} style={{background: 'white'}}>
      <Col span={4} style={{background: 'white', height: '900px', borderRight: '1px rgb(242,242,242) solid'}}>
        <div>12</div>
      </Col>
      <Col span={20}>
        <div>{children}</div>
      </Col>
    </Row>
  </div>);
};

App.propTypes = {
};

export default App;

