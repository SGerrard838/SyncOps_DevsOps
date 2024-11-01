import User from "../models/user.js";

const login = (req, res, next) => {
  let msg = req.session.err || "";
  req.session.err = "";
  res.render("login", { user: req.session.user || "", message: msg });
};

const logout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
};

const auth = (req, res, next) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  req.session.err = "";
  User.findOne({ where: { email: data.email } })
    .then((results) => {
      if (!results) {
        req.session.err = "Incorrect email or password.";
        res.redirect("/user/login");
      } else if (data.password != results.password) {
        req.session.err = "Incorrect password.";
        res.redirect("/user/login");
      } else {
        req.session.user = results;
        res.redirect("/subscriber/movie");
      }
    })
    .catch((err) => {
      req.session.err = err;
      res.redirect("/user/login");
    });
};

const register = (req, res, next) => {
  req.session.err = "";
  res.render("signup", { user: req.session.user || ""});
};

const regis = (req, res, next) => {
  User.create({ email: req.body.email, password: req.body.password, active: 1, isSubscriber: false})
    .then((results) => {
      res.redirect("/subscription/"+results.id);
    })
    .catch((err) => {
      res.json({ status: 502, error: err });
    });
};

const account = (req,res,next)=>{
  req.session.err = "";
  res.render("account", { user: req.session.user || ""});
}

export default { login, logout, auth, regis, register, account };
