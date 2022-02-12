"use strict";
exports.__esModule = true;
exports.MainContainer = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.MainContainer = function (props) {
    return (React.createElement("div", { className: ["Page-content", props.marginTop ? " margin" : ""].join(" ") },
        React.createElement(react_router_dom_1.Outlet, null)));
};
