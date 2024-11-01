import express from "express";
import User from "../models/user.js"

const router = express.Router();

router.get('/:id',(req,res)=>{
  User.findOne({ where: { id: req.params.id } }).then((results) => {
    res.render("subscribe", { user: results });
  })
})

//CREATE
router.post('/api/users',(req,res)=>{
    User.create({ email: req.body.email, password: req.body.password, active: 1, isSubscriber: false})
      .then((results) => {
        res.json({ status: 200, error: null, Response: results });
      })
      .catch((err) => {
        res.json({ status: 502, error: err });
      });
  });

export default router;