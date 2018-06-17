import React from 'react';
import {Layout} from 'antd';
import Header from '../components/Header';
import HotActivity from '../container/HotActivity';
import FruitContainer from '../container/FruitContainer';

const {Content} = Layout
const AppContainer = ()=>(
    <Layout>
        <Header/>
        <Content>
            <HotActivity/>
            <FruitContainer/>
        </Content>
    </Layout>
)

export default AppContainer;