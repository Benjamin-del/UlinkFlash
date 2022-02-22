const fs = require('fs');
import thing from '/config/links.json';
const code = process.env['code']

export default function handler(req, res) {
  if (req.method === 'POST') {
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
			fs.writeFile('/config/links.json', data2write, (err) => {
  			if (err)
    			console.log(err);
  			else {
  			}
			});
		}
	}
}