import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from  'mobx-react';
import TodoList from './TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const Root = (
    <Provider TodoList={TodoList}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
