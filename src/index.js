import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './container/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import './style/Header.less';
import './style/Carousel.less'

ReactDOM.render(
    <AppContainer>
    </AppContainer>,
    document.getElementById('root'));
registerServiceWorker();
