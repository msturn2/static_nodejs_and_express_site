/**
 *  Framework of the app
 */

// Import routes and setup express
const express = require("express");
const app = express();
const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");
const errorRoutes = require("./routes/error");

// Set view engine to pug
app.set("view engine", "pug");

// Serve static files to express
app.use("/static", express.static("public"));

// Routing
app.use(mainRoutes);
app.use("/projects", projectRoutes);

// Error Handling
app.use(errorRoutes.fourZeroFourHandler);
app.use(errorRoutes.globalErrorHandler);

// Instruct express to listen on port 3000
app.listen(3000, () => {
    console.log("App is running on localhost:3000");
});