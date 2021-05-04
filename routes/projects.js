const router = require("express").Router();

const projects = [{
    title: "Student Adminstration",
    description: "My exam project made with ajax and Java Springboot - Student Adminstration to add new students for a class room",
    creationDate: new Date("2020-12-10"),
    gitLink: "https://github.com/BenjaminPrehn/Working_exam",
    image: "https://i.imgur.com/fGoN1nh.png"

},
{
    title: "Cheat sheet for Nodemon",
    description: "A sheet cheat for nodemon which is done i Node.js. Look here if you need basic info on how to setup a node project.",
    creationDate: new Date("2021-04-08"),
    gitLink: "https://github.com/BenjaminPrehn/node-cheatsheet",
    image: "https://i.imgur.com/jYGHZp8.png"

}
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};