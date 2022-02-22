const fs = require('fs');
//import thing from '/config/links.json';
const code = process.env['code']
const querystring = require("querystring");

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
	const dt = fs.readFileSync("config/links.json")
	const thing = JSON.parse(dt)
	if (params.code === code) { 
	const data = {
		user: thing.user,
		profile: thing.profile,
		symbol: thing.symbol,
		name: thing.name,
		photo: thing.photo,
		img_margin: "0",
		display: thing.display,
		links: params.links
	}
	fs.writeFileSync("config/links.json", data)
  	return {
    	statusCode: 200,
  	};
	} else {
		return {
			statusCode: 405,
		}
	}
};