var friends = require("./../data/friends.js")

var apiRoutes = {
    "get": function () {
        app.get("/api/friends", function (req, res) {
            return res.json(tables);
        })
    },

    "post": function () {
        app.post("/api/friends", function (req, res) {
            res.sendFile(path.join(__dirname, "./app/survey.html"));
        })
    }
}

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
            return res.json(tables);
        });

    app.post("/api/friends", function (req, res) {
            res.sendFile(path.join(__dirname, "./app/survey.html"));
        });
}