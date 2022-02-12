"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PageWrapper_1 = require("./components/PageWrapper");
var Header_1 = require("./components/Header");
var LeftMenu_1 = require("./components/LeftMenu");
var MainContainer_1 = require("./components/MainContainer");
function App() {
    return (react_1["default"].createElement(PageWrapper_1.PageWrapper, { test: "test", leftMenu: react_1["default"].createElement(LeftMenu_1.LeftMenu, null) },
        react_1["default"].createElement(Header_1.Header, null),
        react_1["default"].createElement(MainContainer_1.MainContainer, null)));
}
exports["default"] = App;
