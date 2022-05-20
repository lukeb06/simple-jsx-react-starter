const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost${PORT != 80 ? ":"+PORT : ""}/`);
});
