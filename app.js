import button from './src/components/button.js';

function render(){
    var div = document.createElement('div');
    div.innerHTML = 'this is module app.js';
    document.body.appendChild(div);
}
render();
if(module.hot){
    //module.hot.accept();
    module.hot.accept();
}


