/**
 *  Error Handlers
 */

const express = require("express");

// 404 Error Handler
const fourZeroFourHandler = (req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
};

// Errors are passed to global handler...The handler
// will render page based on err.status
const globalErrorHandler = (err, req, res, next) => {
    
    if (err.status === 404) {
        res.status(err.status).render("page-not-found", { err });
    } else {
        err.status = 500
        err.message = "Oh nooooo...., something has gone wrong! Internal Server Error.";
        res.status(err.status).render("error", { err });
    }

    console.error(err.status, err.message);
};

// Pass Error Handlers to app.js
module.exports = {
    fourZeroFourHandler,
    globalErrorHandler
};