"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var React = require("react");
require("../style/dist/Page.css");
var Header_1 = require("./Header");
var LeftMenu_1 = require("./LeftMenu");
var MainContainer_1 = require("./MainContainer");
exports.Layout = function (props) {
    var _a = React.useState(false), scrolledTop = _a[0], setScrolledTop = _a[1];
    React.useEffect(function () {
        window.addEventListener("scroll", handleScroll);
    });
    var handleScroll = function () {
        var bigMenu = window.scrollY <= 20;
        if (window.scrollY <= 40 && !scrolledTop) {
            setScrolledTop(bigMenu);
        }
        else if (window.scrollY >= 40 && scrolledTop) {
            setScrolledTop(bigMenu);
        }
    };
    return (React.createElement("div", { className: "Page" },
        React.createElement(Header_1.Header, { bigMenu: scrolledTop }),
        React.createElement(LeftMenu_1.LeftMenu, null),
        React.createElement(MainContainer_1.MainContainer, { marginTop: scrolledTop })));
};
