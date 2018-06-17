import React from 'react';
import {Divider, Row, Col, Spin, Icon} from 'antd';

const divider = ({title, more, count=0})=>{
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    return (
        <Row>
            {count===0?
            <Col span={18} offset={3}>
                <div className='divider_left'>{title}</div>
                <div className='divider_right'>{more ?'更多':''}</div>
                <Divider/>
            </Col>:<Col span={18} offset={3}><Spin indicator={antIcon} size='large'/></Col>
            }
        </Row>
    )
}
export default divider;