//netflix
import express from "express";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(
  session({
    secret: "ini adalah kode secret###",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

app.set("view engine", "ejs");

app.get("/create-table-movies", (req, res) => {
  Movie.sync();
  res.send("success");
});

app.get("/create-table-users", (req, res) => {
  User.sync();
  res.send("success");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/home", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
