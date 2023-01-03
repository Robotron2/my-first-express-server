//Require express
const express = require("express")

// Initialize express
const app = express()

//Listen on a port
app.listen(3000, () => {
	console.log("App is running on port 3000")
})
