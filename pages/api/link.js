const fs = require('fs');
import jsonData from '/config/links.json';

export default function handler(req, res) {


  if (req.method === 'POST') {
		//const ext = fs.readFileSync(file);
		const thing = jsonData
		if (req.body.code === code) {
			
			const data = {
				user: thing.user,
				profile: thing.profile,
				symbol: thing.symbol,
				name: thing.name,
				photo: thing.photo,
				img_margin: "0",
				display: thing.display,
				links: req.body.links
			}
			const data2write = JSON.stringify(data, null, 2)
			fs.writeFileSync('/config/links.json', data2write);	
			res.json(data)
			res.status(200)
			res.end()
		}
	} else {
		res.status(405)
		res.json({ error: '405' })
		res.end()
	}
}