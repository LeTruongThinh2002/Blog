const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("node:path"); // Import the path module

const app = express();
const port = 3002;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// http logger
// app.use(morgan('combined'));

// template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views")); // Use path.join correctly

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
