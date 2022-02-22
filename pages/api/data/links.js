const fs = require('fs');
const path = "./ulink/links.json"
const code = process.env['code']

export default function handler(req, res) {
	const data = JSON.parse(fs.readFileSync(path))
	res.status(200)
	res.json(data.links)
}