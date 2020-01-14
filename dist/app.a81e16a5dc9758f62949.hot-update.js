webpackHotUpdate("app",{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _button = _interopRequireDefault(__webpack_require__(/*! ./src/components/button.js */ "./src/components/button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/*
import React from 'react';
import ReactDOM from 'react-dom';
//import { AppContainer } from 'react-hot-loader';

/*
const render = (Component1,Component2) =>{
    ReactDOM.render(
        <AppContainer>
            <Component1 />
            <Component2 />
        </AppContainer>,
        document.getElementById('root')
    )
}
render(ButtonComponent,Button2);
console.log(module);
class Index extends React.Component {
    render(){
        return (
            <div><ButtonComponent /></div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'));
*/
function render() {
  var div = document.createElement('div');
  div.innerHTML = 'this is module app.js';
  document.body.appendChild(div);
}

render();
console.log(module);

if (true) {
  //module.hot.accept();
  module.hot.accept();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, "render", "/Users/ninsankou/Documents/NodeJs\u9879\u76EE/webpack-HMR-demo/app.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=app.a81e16a5dc9758f62949.hot-update.js.map