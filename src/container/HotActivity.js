import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Carousel from '../components/Carousel';

const HotActivity = ()=>{
    return (
        <Row>
            <Col className='Col_Carousel' span={18} offset={3}>
                <Carousel />
            </Col>
        </Row>
    )
}
export default HotActivity;