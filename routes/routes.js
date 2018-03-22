/* Routes JS - routes.js */

const express	= require('express');
const router	= express.Router();
router.get("/", (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send("Hello!");
	console.log("200 - [/]	Home");
});
router.get("/admin", (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.status(403).send("Admin Zone");
	console.log("403 - [/admin]	Admin Zone");
});
router.get("/room", (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send("Room Space");
	console.log("200 - [/room]	Room Space");
});
router.get("/signup", (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send("SignUp");
	console.log("200 - [/signup]	SignUp");
});
router.get("/signin", (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send("SignIn");
	console.log("200 - [/signin]	SignIn");
});
module.exports = router;
