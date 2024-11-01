//netflix
import express from "express";
import session from "express-session";
import user_routes from "./routers/user.js";
import subscriber_movie_routes from "./routers/subscriber/movie.js";
import subscribe_routes from "./routers/subscribe.js";
import forSubscriber from "./controllers/auth.js";
import Movie from "./models/movie.js";
import User from "./models/user.js";

// socket (chatBot)
import http from "http";

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

app.use("/user", user_routes);
app.use("/subscriber/movie", forSubscriber, subscriber_movie_routes);
app.use("/subscription", subscribe_routes);

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
  res.render("index", { user: req.session.user || "" });
});

app.get("/forbidden", (req, res) => {
  res.render("forbidden", { user: req.session.user || "" });
});

//API untuk account
app.put("/api/subs/:id", (req, res) => {
  User.update({ isSubscriber: true }, { where: { id: req.params.id } })
    .then((results) => {
      res.json({ status: 200, error: null, Response: results });
    })
    .catch((err) => {
      res.json({ status: 502, error: err });
    });
});

app.put("/api/user/:id", (req, res) => {
  User.update(
    { email: req.body.email, password: req.body.password },
    { where: { id: req.params.id } }
  )
    .then((results) => {
      res.json({ status: 200, error: null, Response: results });
    })
    .catch((err) => {
      res.json({ status: 502, error: err });
    });
});

app.delete("/api/user/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((results) => {
      res.json({ status: 200, error: null, Response: results });
    })
    .catch((err) => {
      res.json({ status: 502, error: err });
    });
});

app.get("*", (req, res) => {
  res.redirect("/forbidden");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
