const express = require("express");
const app = express();
const portNumber = 3000;
const sourceDir = "dist";
const path = require("path");

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
    console.log(`Express web server started: http://localhost:${portNumber}`);
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
