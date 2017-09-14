import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import './css/main.css';

//Components
import SideBar from './components/sidebar/SideBar';

const content = (
    <SideBar/>
);

ReactDOM.render(content, document.getElementById('main_container'));
registerServiceWorker();
