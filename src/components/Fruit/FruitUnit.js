import React from 'react';
import {Card, Spin, Icon } from 'antd';

const fruit = ({title, price, content, icon, count=0})=>{
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    return (
        count===0?
        <div className='fruit'>
            <Card
                hoverable
                style={{ width: 273, height: 149 }}
                cover={<img alt="example" src={icon}/>}
            />
            <div className='fruit_des'>
                <div className='title'>{title}</div>
                <div className="content">{content}</div>
                <div className="price">{price}</div>
            </div>
        </div>:<div className='fruit'><Spin indicator={antIcon} size='large'/></div>
    )
}
export default fruit;