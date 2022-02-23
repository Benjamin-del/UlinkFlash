const fs = require('fs');
const path = "./ulink/links.json"
const code = process.env['code']

export default function handler(req, res) {
	var fullUrl = (req.headers.host + req.url).split("=")
	console.log("CODE: " + fullUrl[1])
	if (fullUrl[1] === code){
		const data = fs.readFileSync(path)
		res.status(200)
		res.json(data)
	} else {
		res.status(403)
		res.json({error: "403"})
	}
}