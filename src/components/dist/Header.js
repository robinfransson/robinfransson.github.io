"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
require("../style/dist/Header.css");
exports.Header = function (props) {
    return (react_1["default"].createElement("div", { className: ["Header", props.bigMenu ? "active" : ""].join(" ") },
        react_1["default"].createElement("div", { className: "Header-main" }, "test"),
        react_1["default"].createElement("div", { className: "Header-item" }, "Hej")));
};
