import Button2 from './button2';

function render(){
    var div = document.createElement('div');
    div.innerHTML = 'this is module button.js';
    document.body.appendChild(div);
}

render();