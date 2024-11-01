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
import { Server } from "socket.io";
import formatMessage from "./utils/message.js";
import { userJoin, getCurrentUser, userLeave, getRoomUsers} from "./utils/user.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

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

//socket
const botName = "Netflix Bot";
// Run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);
    // Welcome current user
    socket.emit("message", formatMessage(botName, "Hello there! How may i help you? \n 1. Account issues \n 2. Payment issues \n 3. Bug issues"));
    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formatMessage('You', msg));
    if(msg === '1'){
      io.emit("message", formatMessage(botName, 'Account issues. \n Please tell me your problem.. \n a. Can\'t log in \n b. Can\'t change password \n c. Another device you don\'t know log on into your account'))
      socket.on("chatMessage", (psn) => {
        if(psn === 'a' || psn === 'b'){
          io.emit("message", formatMessage(botName, 'At your service my master, will be right back. \n Thank You'))
        }
        else if(psn === 'c'){
          io.emit("message", formatMessage(botName, 'Another device log on. \n Please write which device are you using currently? \n We\'ll kick other devices and please change your password soon'))
          socket.on("chatMessage", () => {
            io.emit("message", formatMessage(botName, 'Thank You'))
          })
        }
      })
    }
    else if(msg === '2'){
      io.emit("message", formatMessage(botName, 'Payment issues. \n Please tell me your problem.. \n a. Paid but didn\'t receive any receipt \n b. Can\'t pay the subscription'))
      socket.on("chatMessage", (psn) => {
        if(psn === 'a' || psn === 'b'){
          io.emit("message", formatMessage(botName, 'We\'ll be right back soon, Please Wait. \n Thank You'))
        }
      })
    }
    else if(msg === '3'){
      socket.emit("message", formatMessage(botName, 'Bug Issues. \n You found a bug? Please tell us everything.'))
      socket.on("chatMessage", () => {
        io.emit("message", formatMessage(botName, 'Thank You, We\'ll check it soon.'))
      })
    }
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if (user) {
      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

app.get("/chat", (req, res) => {
  res.render("room", { user: req.session.user || "" });
});

app.get("/chatRoom", (req, res) => {
  res.render("chat", { user: req.session.user || "" });
});

app.get("*", (req, res) => {
  res.redirect("/forbidden");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
