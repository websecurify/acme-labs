var http = require('http');

// ---

http.createServer(function (req, res) {
	var chunks = [];
	
	// ---
	
	req.on('data', function (data) {
		chunks.push(data);
	});
	
	// ---
	
	req.on('end', function () {
		var obj;
		
		try {
			obj = JSON.parse( chunks.join(''));
		} catch (e) {
	        res.writeHead(500);
	        res.end();
			
			// ---
			
			return;
		}
		
		// ---
		
		var cur;
		
		switch (obj.code || 'USD') {
			case 'USD': cur = 0.9; break;
			case 'GBP': cur = 0.5; break;
			
			// ---
			
			default:
				cur = 0.9;
				
				// ---
				
				break;
		}
		
		// ---
		
		var quantity = obj.quantity || 1;
		
		// ---
		
		var price;
		
		switch (obj.item || 'tie') {
			case 'tie': price = 5.76; break;
			case 'socks': price = 1.56; break;
			
			// ---
			
			default:
				price = 1.56;
				
				// ---
				
				break;
		}
		
		// ---
		
		var total = cur * quantity * price;
		
		// ---
		
        res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
        res.end(JSON.stringify({total: Math.abs(total).toFixed(2)}));
	});
}).listen(8080);

// ---
