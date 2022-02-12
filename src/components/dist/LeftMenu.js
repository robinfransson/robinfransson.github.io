"use strict";
exports.__esModule = true;
exports.LeftMenu = void 0;
var react_1 = require("react");
require("../style/dist/Menu.css");
exports.LeftMenu = function () {
    var _a = react_1.useState(false), active = _a[0], setActive = _a[1];
    var toggleActive = function (e) {
        setActive(function (old) { return !old; });
    };
    return (React.createElement("div", { className: ["LeftMenu", active ? "active" : "inactive"].join(" ") },
        React.createElement("div", { className: "LeftMenu-toggler-container", onClick: toggleActive },
            React.createElement("span", { className: "LeftMenu-toggler" })),
        React.createElement("div", { className: "LeftMenu-item" },
            React.createElement("a", { className: "LeftMenu-link" }, "En \"l\u00E4nk\"")),
        React.createElement("div", { className: "LeftMenu-item" },
            React.createElement("a", { className: "LeftMenu-link" }, "En \"l\u00E4nk\"")),
        React.createElement("div", { className: "LeftMenu-item" },
            React.createElement("a", { className: "LeftMenu-link" }, "En \"l\u00E4nk\""))));
};
