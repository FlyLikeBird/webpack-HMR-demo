import Button2 from './src/components/button2';

function render(){
    var div = document.createElement('div');
    div.innerHTML = 'this is module app2.js';
    document.body.appendChild(div);
}

render();
if(module.hot){
    //module.hot.accept();
    module.hot.accept();
}

