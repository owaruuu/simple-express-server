import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from second server.");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
