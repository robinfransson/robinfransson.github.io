"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var React = require("react");
require("../style/dist/Page.css");
var Header_1 = require("./Header");
var LeftMenu_1 = require("./LeftMenu");
var MainContainer_1 = require("./MainContainer");
exports.Layout = function (props) {
    return (React.createElement("div", { className: "Page" },
        React.createElement(Header_1.Header, null),
        React.createElement(LeftMenu_1.LeftMenu, null),
        React.createElement(MainContainer_1.MainContainer, null)));
};
