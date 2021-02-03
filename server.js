const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");

const app = express();
app.use(bodyParser.json());
app.use("/books", bookRoutes);

app.listen(3000);
