import express from "express";
import Movie from "../../models/movie.js";

const router = express.Router();

router.get("/", (req, res) => {
  Movie.findAll().then((results) => {
    res.render("subscriber/movie/home", {
      movies: results,
      user: req.session.user || "",
    });
  });
});

router.get("/:id", (req,res) =>{
  Movie.findOne({ where: { id: req.params.id } }).then((results) => {
    res.render("subscriber/movie/moviepage", {
      movie: results,
      user: req.session.user || "",
    });
  });
})

// router.get("/create", (req, res) => {
//   res.render("subscriber/home", { user: req.session.user || "" });
// });

//API yang hanya bisa digunakan di Thunder Client
//CREATE
router.post("/api/movies", (req, res) => {
  Movie.create({ name:req.body.name, category:req.body.category, link:req.body.category })
    .then((results) => {
      res.json({ status: 200, error: null, Response: results });
    })
    .catch((err) => {
      res.json({ status: 502, error: err });
    });
});

//UPDATE
router.put("/api/movie/:id", (req, res) => {
  Movie.update({ name:req.body.name, category:req.body.category, link:req.body.category }, { where: { id: req.params.id } })
    .then((results) => {
      res.json({ status: 200, error: null, Response: results });
    })
    .catch((err) => {
      res.json({ status: 502, error: err });
    });
});

//DELETE
router.delete("/api/movie/:id", (req, res) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then((results) => {
      res.json({ status: 200, error: null, Response: results });
    })
    .catch((err) => {
      res.json({ status: 502, error: err });
    });
});
export default router;
