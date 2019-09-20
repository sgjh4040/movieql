"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("./db");

var resolvers = {
    Query: {
        movies: function movies(_, _ref) {
            var page = _ref.page;
            return (0, _db.getMovies)(page);
        },
        movie: function movie(_, _ref2) {
            var id = _ref2.id;
            return (0, _db.getMovie)(id);
        },
        suggestions: function suggestions(_, _ref3) {
            var id = _ref3.id;
            return (0, _db.getSuggestions)(id);
        }
    }
};

exports.default = resolvers;