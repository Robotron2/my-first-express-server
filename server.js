//Require express
const express = require("express")

// Initialize express
const app = express()

app.get("/", (request, response) => {
	response.send("Hello World")
})

app.get("/contact", (req, res) => {
	res.send("Contact me: theo@gmail.com")
})

app.get("/about", (req, res) => {
	res.send("I am fullstack web developer, currently in training.")
})

//Listen on a port
app.listen(3000, () => {
	console.log("App is running on port 3000")
})
