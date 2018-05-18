(function(ext) {
	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {}; 
	
	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	
	ext.opcaoA = function(channel, level) {
		
		
		//return eval(a);
	};
	
	
	var descriptor = {
		blocks: [
			['r', 'Set CH %n to level %n', 'opcaoA'],
			
		],
		
		menus:{
			//"channels":	[1,2],
			//"level":	[0,127,255]
		}
	};
	ScratchExtensions.register("sACN extension", descriptor, ext);
})({});