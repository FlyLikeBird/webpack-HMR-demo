import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import ButtonComponent from './src/components/button';

const App = ()=> <ButtonComponent />

ReactDOM.render(hot(App),document.getElementById('root'));
if(module.hot){
    //module.hot.accept();
    module.hot.accept();
}


