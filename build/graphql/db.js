"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSuggestions = exports.getMovie = exports.getMovies = undefined;

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();

var API_URL = "https://api.themoviedb.org/3/movie/now_playing";
var DETAIL_API_URL = "https://api.themoviedb.org/3/movie";

var getMovies = exports.getMovies = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
        var _ref2, results;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _axios2.default)(API_URL, {
                            params: {
                                api_key: process.env.moviedbAPI,
                                page: page,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref2 = _context.sent;
                        results = _ref2.data.results;
                        return _context.abrupt("return", results);

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getMovies(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getMovie = exports.getMovie = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var _ref4, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _axios2.default)(DETAIL_API_URL + "/" + id, {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref4 = _context2.sent;
                        data = _ref4.data;
                        return _context2.abrupt("return", data);

                    case 5:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getMovie(_x2) {
        return _ref3.apply(this, arguments);
    };
}();

var getSuggestions = exports.getSuggestions = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var _ref6, results;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return (0, _axios2.default)(DETAIL_API_URL + "/" + id + "/recommendations", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref6 = _context3.sent;
                        results = _ref6.data.results;
                        return _context3.abrupt("return", results);

                    case 5:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function getSuggestions(_x3) {
        return _ref5.apply(this, arguments);
    };
}();