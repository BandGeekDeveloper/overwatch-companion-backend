require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/users");
const heroRoutes = require("./routes/heroes");
const rankRoutes = require("./routes/ranks");
const loreVideoRoutes = require("./routes/loreVideos");
const affiliationRoutes = require("./routes/affiliations");
const roleRoutes = require("./routes/roles");
const abilityRoutes = require("./routes/abilities");

const port = process.env.PORT;
const uri = process.env.ATLAS_URI;

// start express app
const app = express();

// runs every time a request is made
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.use("/api/users", userRoutes);
app.use("/api/heroes", heroRoutes);
app.use("/api/ranks", rankRoutes);
app.use("/api/loreVideos", loreVideoRoutes);
app.use("/api/affiliations", affiliationRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/abilities", abilityRoutes);


// connnect to db
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => {
          console.log(`listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    })


