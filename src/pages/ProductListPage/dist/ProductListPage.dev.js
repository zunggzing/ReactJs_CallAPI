"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
var ProductListPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductListPage, _Component);

  function ProductListPage() {
    _classCallCheck(this, ProductListPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductListPage).apply(this, arguments));
  }

  _createClass(ProductListPage, [{
    key: "render",
    value: function render() {
      return {
        /*<div className="row my-3 py-2">
             <div className="col-6">
               <button
                 type="button"
                 className="btn btn-danger btn-sm float-start fw-bold"
                 style={{ width: "160px" }}
               >
                 <i class="far fa-user-plus"></i> Add product
               </button>
             </div>
             <div className="col-6"></div>
           </div>
           <div className="row my-2 py-2">
             <div className="col-12">
               {/* PRODUCT LIST 
               <ProductList />
             </div>
           </div>*/
      };
    }
  }]);

  return ProductListPage;
}(_react.Component);

var _default = ProductListPage;
exports["default"] = _default;