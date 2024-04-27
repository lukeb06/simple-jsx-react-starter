const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

app.get("/status", (req, res) => {
    res.status(200).json({ status: "API active" });
});

app.listen(PORT, () => {
    console.log(`API active on port ${PORT}`);
});