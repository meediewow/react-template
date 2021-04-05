const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config({
    path: path.join(path.resolve(__dirname), ".env.production"),
});
const sourceDir = "dist";
const APP_PORT = +dotenv.parsed.APP_PORT || 3000;

app.use(express.static(sourceDir));

app.listen(APP_PORT, () => {
    console.log(`Express web server started: http://localhost:${APP_PORT}`);
    console.log(`Serving content from /${sourceDir}/`);
});

app.get("/*", function (req, res) {
    res.sendFile(
        path.join(__dirname, `${sourceDir}/index.html`),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        },
    );
});
