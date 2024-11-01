const forSubscriber = (req, res, next) => {
  let user = req.session.user || "";
  if (user && user.isSubscriber) next();
  else res.redirect("/forbidden");
};
export default forSubscriber;
