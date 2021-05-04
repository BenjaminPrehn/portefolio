const express = require('express');
const app = express();

const fs = require("fs");

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contact.js");
const skillsRouter = require("./routes/skills.js");

app.use(projectsRouter.router);
app.use(contactRouter.router);
app.use(skillsRouter.router);

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const skills = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contact + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projects + footer);
});

app.get("/skills", (req, res) => {
    res.send(header + skills + footer);
});

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});