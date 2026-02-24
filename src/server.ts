import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.send(`Hello from second server. on port ${PORT}`);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});
