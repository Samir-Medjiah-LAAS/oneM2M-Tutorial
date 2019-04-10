var request = require('request');

var options = {
	uri: "http://127.0.0.1:8080/~/in-cse/in-name/LuminositySensor/DATA?rcn=4",
	method: "GET",
	headers: {
		"X-M2M-Origin": "admin:admin" ,
		"Content-Type": "application/json"
	}
};

console.log("Sending request >>> ");
console.log(options.method + " " + options.uri);

request(options, function (err, resp, body) {
	console.log("\n\n<<< Response received ! ");
	if(err) {
		console.log("Error = " + err);
	} else {
		console.log("Response Status Code = " + resp.statusCode);
		console.log("Response Body = " + body);

		var obj = JSON.parse(body);
		console.log("\n\nEffective content of CINs = ");
		obj["m2m:cnt"]["m2m:cin"].forEach(elt => {
			console.log(elt.con);	
		});
	}
});