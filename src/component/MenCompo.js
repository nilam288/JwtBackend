import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Button } from 'antd';
import {Link } from "react-router-dom";

const style = { background: '#0092ff', padding: '8px 0' };

class MenCompo extends React.Component {

    render(){
        return(
            <div>
   <Link to="/MensAdd"> <Button type="primary" >Create Mens category</Button></Link>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>
        <React.Fragment>
            <Link to="/Footware" class="btn btn-lg btn-info">
            footware
            </Link>
         </React.Fragment>
          
          
           </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Ethical</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Gromming</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Watch</div>
      </Col>
    </Row>
    <Divider orientation="left"></Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>Acceressories</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Spotsware</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Ties</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Personal Care</div>
      </Col>
    </Row>
    <Divider orientation="left"></Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>Winterware</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Loungware</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Shoes</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    </div>
        );
}
}
export default MenCompo;