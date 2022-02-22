const fs = require('fs');
//import thing from '/config/links.json';
const code = process.env['code']
//const querystring = require("querystring");

exports.handler = async (event, context) => {
  // Only allow POST
	console.log("LOOKING FOR: " + code)

  // queryStringParameters – it’ll be in the event body encoded as a query string
  if (event.httpMethod === "POST") {
	const dt = fs.readFileSync("./tmp/config/links.json")
	const thing = JSON.parse(dt)
	const prs = JSON.parse(event.body)

	if (prs['code'] === code) { 
	const data = {
		user: thing.user,
		profile: thing.profile,
		symbol: thing.symbol,
		name: thing.name,
		photo: thing.photo,
		img_margin: "0",
		display: thing.display,
		links: prs.links
	}
	const data2write = JSON.stringify(data);
	fs.writeFileSync("./tmp/config/links.json", data2write)
		console.log("Updated! (200)")
  	return {
    	statusCode: 200,
  	};
	} else {
		console.log("Wrong code! Please try again (403)")
		return {
			statusCode: 403,
		}
	}
} else {
		console.log("Wrong method! Please try again (405)")
		return {
			statusCode: 405,
		}
}
};