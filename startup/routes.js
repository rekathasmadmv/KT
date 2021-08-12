const express = require("express");
const usersRoute = require("../routes/user.route");

module.exports = function(app) {
    app.use(express.json());
    app.use("/api/users/", usersRoute);

    console.log("Routes successfully initialized...");
};