//Require express
const express = require("express")

// Initialize express
const app = express()

app.get("/", (request, response) => {
	response.send("Hello World")
})

//Listen on a port
app.listen(3000, () => {
	console.log("App is running on port 3000")
})
