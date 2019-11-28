"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./font/crypto-font.css");
var currencies = require('./font/crypto-font.json');
var PREFIX = 'crypto-font';
var stripPrefix = function (str) {
    return str.replace(PREFIX + "-", '');
};
exports.isValidCode = function (code) {
    return currencies["" + stripPrefix(code)];
};
exports.currencyCodes = function () {
    return Object.keys(currencies).map(stripPrefix);
};
//# sourceMappingURL=index.js.map