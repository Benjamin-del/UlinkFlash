const fs = require('fs');
const path = "./ulink/links.json"
const code = process.env['code']

export default function handler(req, res) {
	if (req.method === 'POST') {
		const ext = fs.readFileSync(path);
		const thing = JSON.parse(ext)
		if (req.body.code === code) {
			const data = {
				user: req.body.user,
				profile: req.body.profile,
				symbol: req.body.symbol,
				name: req.body.name,
				photo: req.body.photo,
				img_margin: "0",
				display: req.body.display,
				links: thing.links
			}
			const data2write = JSON.stringify(data, null, 2)
			fs.writeFileSync(path, data2write);
			res.json(data)
			res.status(200)
			console.log("Data has been saved")
			res.end()
		} else {
			res.status(403)
			res.json({ error: '403' })
			res.end()
		}
	} else {
		res.status(405)
		res.json({ error: '405' })
		res.end()
	}
}