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
	
	ext.blackout = function() {
		/*for (var i = 1; i <= numChannels; i++) {
              DMXChannels[i]=0;
		}*/
		
		//return eval(a);
	};
	
	ext.opcaoA = function(opçaoEscolhida) {
		//opçao=opçaoEscolhida;
		
		//return eval(a);
	};
	
	var descriptor = {
		blocks: [
			['r', 'Set CH %n to level %n', 'opcaoA'],
			['', 'Blackout', 'blackout']
			['', 'Escolher a opção: %m.opçoes','opçao', 'escolher opçao']
		],
		
		menus:{
			//"channels":	[1,2],
			//"level":	[0,127,255]
			"opçoes": [A: 2 CH Mode, B: 5 CH Mode, C: 29 CH Mode, Blackout, Exit]
		}
	};
	ScratchExtensions.register("sACN extension", descriptor, ext);
})({});