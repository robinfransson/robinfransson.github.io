"use strict";
exports.__esModule = true;
exports.PageWrapper = void 0;
var React = require("react");
require("../style/dist/Page.css");
exports.PageWrapper = function (_a) {
    var test = _a.test, children = _a.children, leftMenu = _a.leftMenu;
    console.log(leftMenu);
    return (React.createElement("div", { className: "Main" },
        leftMenu,
        children));
};
