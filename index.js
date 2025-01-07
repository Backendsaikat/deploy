import express from "express";
const app = express();
const port = 9000;

app.use("/", (req, res) => {
    res.json({ message: "Hello" });
});

app.listen(port, () => {
    console.log("Server started on port", port);
});

