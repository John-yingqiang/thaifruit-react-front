import React from 'react';
import {Layout, Row, Col, Input, Icon} from 'antd';
const Search = Input.Search;
const {Header} = Layout;

const header = ()=>{
    return(
        <Header style={{backgroundColor:'#fff'}}>
            <Row>
                <Col span={3} offset={3}>
                    <img src={require('../image/header.jpg')} />
                </Col>
                <Col span={13} offset={2}>
                    <ul className='ul_header'>
                        <li><a href="">首页</a></li>
                        <li><a href="">果园视频</a></li>
                        <li><a href="">关于我们</a></li>
                        <li><a href="">联系我们</a></li>
                        <li><Search
                            placeholder="水果名称"
                            onSearch={value => console.log(value)}
                            enterButton
                        /></li>
                        <li><Icon type="shopping-cart" style={{fontSize:20,color:'#f27779'}} /><a>我的购物车</a></li>
                    </ul>
                </Col>
                <Col span={18} offset={3} className='header_container' />
            </Row>
        </Header>
    )
}
export default header;
