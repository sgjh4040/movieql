"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("./db");

var resolvers = {
    Query: {
        nowPlayMovies: function nowPlayMovies(_, _ref) {
            var page = _ref.page;
            return (0, _db.getNowPlayMovies)(page);
        },
        movies: function movies(_, _ref2) {
            var page = _ref2.page,
                language = _ref2.language,
                category = _ref2.category;
            return (0, _db.getMovies)(page, language, category);
        },
        movie: function movie(_, _ref3) {
            var id = _ref3.id;
            return (0, _db.getMovie)(id);
        },
        suggestions: function suggestions(_, _ref4) {
            var id = _ref4.id;
            return (0, _db.getSuggestions)(id);
        },
        credits: function credits(_, _ref5) {
            var id = _ref5.id;
            return (0, _db.getCredits)(id);
        },
        videos: function videos(_, _ref6) {
            var id = _ref6.id;
            return (0, _db.getVideos)(id);
        }
    }
};

exports.default = resolvers;