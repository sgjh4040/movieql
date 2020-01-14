"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSimilars = exports.getImages = exports.getVideos = exports.getCredits = exports.getSuggestions = exports.getMovie = exports.getUpcomingMovies = exports.getTopRateMovies = exports.getPopularMovies = exports.getNowPlayMovies = exports.getMovies = undefined;

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();
var API_URL = "https://api.themoviedb.org/3/movie";

var getMovies = exports.getMovies = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, language, category) {
        var _ref2, results;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _axios2.default)(API_URL + "/" + category, {
                            params: {
                                api_key: process.env.moviedbAPI,
                                page: page,
                                language: language
                            }
                        });

                    case 2:
                        _ref2 = _context.sent;
                        results = _ref2.data.results;

                        console.log(results);
                        return _context.abrupt("return", results);

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getMovies(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var getNowPlayMovies = exports.getNowPlayMovies = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page) {
        var _ref4, results;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _axios2.default)(API_URL + "/now_playing", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                page: page,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref4 = _context2.sent;
                        results = _ref4.data.results;

                        console.log(results);
                        return _context2.abrupt("return", results);

                    case 6:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getNowPlayMovies(_x4) {
        return _ref3.apply(this, arguments);
    };
}();
var getPopularMovies = exports.getPopularMovies = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page) {
        var _ref6, results;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return (0, _axios2.default)(API_URL + "/popular", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                page: page,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref6 = _context3.sent;
                        results = _ref6.data.results;

                        console.log(results);
                        return _context3.abrupt("return", results);

                    case 6:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function getPopularMovies(_x5) {
        return _ref5.apply(this, arguments);
    };
}();
var getTopRateMovies = exports.getTopRateMovies = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(page) {
        var _ref8, results;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return (0, _axios2.default)(API_URL + "/top_rated", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                page: page,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref8 = _context4.sent;
                        results = _ref8.data.results;

                        console.log(results);
                        return _context4.abrupt("return", results);

                    case 6:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function getTopRateMovies(_x6) {
        return _ref7.apply(this, arguments);
    };
}();
var getUpcomingMovies = exports.getUpcomingMovies = function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(page) {
        var _ref10, results;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return (0, _axios2.default)(API_URL + "/upcoming", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                page: page,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref10 = _context5.sent;
                        results = _ref10.data.results;

                        console.log(results);
                        return _context5.abrupt("return", results);

                    case 6:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function getUpcomingMovies(_x7) {
        return _ref9.apply(this, arguments);
    };
}();

var getMovie = exports.getMovie = function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
        var _ref12, data;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return (0, _axios2.default)(API_URL + "/" + id, {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref12 = _context6.sent;
                        data = _ref12.data;
                        return _context6.abrupt("return", data);

                    case 5:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, undefined);
    }));

    return function getMovie(_x8) {
        return _ref11.apply(this, arguments);
    };
}();

var getSuggestions = exports.getSuggestions = function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
        var _ref14, results;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return (0, _axios2.default)(API_URL + "/" + id + "/recommendations", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref14 = _context7.sent;
                        results = _ref14.data.results;
                        return _context7.abrupt("return", results);

                    case 5:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, undefined);
    }));

    return function getSuggestions(_x9) {
        return _ref13.apply(this, arguments);
    };
}();
var getCredits = exports.getCredits = function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id) {
        var _ref16, cast;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return (0, _axios2.default)(API_URL + "/" + id + "/credits", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref16 = _context8.sent;
                        cast = _ref16.data.cast;

                        console.log(cast);
                        return _context8.abrupt("return", cast);

                    case 6:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, undefined);
    }));

    return function getCredits(_x10) {
        return _ref15.apply(this, arguments);
    };
}();
var getVideos = exports.getVideos = function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(id) {
        var _ref18, cast;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return (0, _axios2.default)(API_URL + "/" + id + "/videos", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref18 = _context9.sent;
                        cast = _ref18.data.cast;
                        return _context9.abrupt("return", cast);

                    case 5:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, undefined);
    }));

    return function getVideos(_x11) {
        return _ref17.apply(this, arguments);
    };
}();
var getImages = exports.getImages = function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(id) {
        var _ref20, cast;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.next = 2;
                        return (0, _axios2.default)(API_URL + "/" + id + "/images", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref20 = _context10.sent;
                        cast = _ref20.data.cast;
                        return _context10.abrupt("return", cast);

                    case 5:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, undefined);
    }));

    return function getImages(_x12) {
        return _ref19.apply(this, arguments);
    };
}();
var getSimilars = exports.getSimilars = function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(id) {
        var _ref22, results;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.next = 2;
                        return (0, _axios2.default)(API_URL + "/" + id + "/similar", {
                            params: {
                                api_key: process.env.moviedbAPI,
                                language: "ko-kr"
                            }
                        });

                    case 2:
                        _ref22 = _context11.sent;
                        results = _ref22.data.results;
                        return _context11.abrupt("return", results);

                    case 5:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, undefined);
    }));

    return function getSimilars(_x13) {
        return _ref21.apply(this, arguments);
    };
}();