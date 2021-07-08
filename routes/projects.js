/**
 *  Projects Route
 */

const express = require("express");
const router = express.Router();
const { projects } = require("../data/data.json");

// Render project page based on project id
router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    const project = projects[id];

    // Boolean to catch if user enters id not found
    // in url
    if (project) {
        res.render("project", { project });
    } else {
        const err = new Error("Not Found");
        err.status = 404;
        next(err);
    }
});

module.exports = router;