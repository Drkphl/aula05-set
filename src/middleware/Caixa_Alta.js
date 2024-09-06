const express = require("express");
const app = express();

function toUpperCaseMiddleware(req, res, next) {
    if (req.body) {
        for (let key in req.body) {
            if (typeof req.body[key] === "string") {
                req.body[key] = req.body[key].toUpperCase();
            }
        }
    }
    next();
}
