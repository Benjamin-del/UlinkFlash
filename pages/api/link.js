const fs = require('fs');
const path = "./public/links.json"
const code = process.env['code']
const dt = fs.readFileSync(path);

export default function handler(req, res) {
  if (req.method === 'POST') {
		const ext = fs.readFileSync(path);
		const thing = JSON.parse(ext)
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
			fs.writeFileSync(path, data2write);	
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

/*
{
  "user": "instagramer",
  "profile": "https://instagram.com/benmmonster",
  "symbol": "@",
  "name": "Ulink Beta Tester",
  "photo": "https://cdn.glitch.com/35409746-8e4a-406e-ac47-16c4db92cad8%2F10x100profile.jpeg",
  "img_margin": "0",
  "display":"Proud Ulink User",
  
  "links":[
    {"id":"0","title":"LINK 1!","url":"https://example.com"},
    {"id":"2","title":"LINK 2","url":"https://example.com"}
  ]
}
*/