Control.data = {
	whRatio : 2/3,
	infoText : "This page shows off features of the Gyroscope (iPhone 4 and newest iPod Touch only) and the Accelerometer (all iOS devices). Core Motion is a framework created by Apple that applies signal processing to the Gyro and Accelerometer readings to give more stable indications of pitch and roll. It also provides a usable yaw (orientation) value which changes as you change directions holding the phone. Unlike the compass, this yaw value is not affected by tilting the device. Although not present in this interface, you can also use the gyro widget to measure raw rotational rate on 3-axis (iPhone 4 and newest iPod Touch only).<br><br>You can set the update rate of the accelerometer and the gyro using the sliders provided here. The Core Motion values are sent to /gyro, the Accelerometer values are sent to /accelerometer. For MIDI, the gyro goes to CC 0, 1 and 2, the accelerometer to CC 3, 4 and 5.",
};

Control.functions = {
	changeGyroSpeed: function() {
		gyro.setUpdateRate(this.value);
		gyroSpeedLabel.setValue("Update Rate : " + (Math.round(this.value*10) / 10) +"Hz");
	},
	changeAccelerometerSpeed : function() {
		accSpeedLabel.changeValue("Update Rate : " + (Math.round(this.value*10) / 10) +"Hz");
		acc.setUpdateRate(this.value);
	},
};

Control.interface = {
	name : "Accelerometer",
	orientation : "portrait",
	pages : [[
	/*{
	    "name": "gyroLabel",
	    "type": "Label",
	    "bounds": [0,0,1,.05], 
	    "color": "#ffffff",
	    "align": "left",
	    "value": "CORE MOTION (ACCEL + GYRO)",
	},
    {
	    "name": "pitchLabel",
	    "type": "Label",
	    "bounds": [0,.2,.33,.05],     
	    "color": "#ffffff",
	    "value": "pitch",
	},
	{
	    "name": "rollLabel",
	    "type": "Label",
	    "bounds": [.33,.2,.33,.05],     
	    "color": "#ffffff",
	    "value": "roll",
	},
	{
	    "name": "yawLabel",
	    "type": "Label",
	    "bounds": [.66,.2,.33,.05],     
	    "color": "#ffffff",
	    "value": "yaw",
	},	
	{
	    "name": "gyroSliders",
	    "type": "MultiSlider",
	    "numberOfSliders": 3,
		"bounds": [0,.05,.99,.15],
	    "min": 0,
	    "max": 1,
	    "address": "/gyro",
	},
	{
	    "name": "gyroSpeed",
	    "type": "Slider",
	    "x": .0,
	    "y": .275,
	    "width": .99,
	    "height": .075,
	    "protocol": "local",
	    "min": 1,
	    "max": 100,
	    "startingValue": 10,
	    "ontouchend": Control.functions.changeGyroSpeed,
	},
    
	{
	    "name": "gyroSpeedLabel",
	    "type": "Label",
	    "x": 0,
	    "y": .325,
	    "width": .8,
	    "height": .1,
	    "color": "#ffffff",
	    "value": "Update Rate : 10Hz",
		"align": "left",
	},*/
	
	{
	    "name": "accLabel",
	    "type": "Label",
	    "x": 0,
	    "y": .45,
	    "width": .5,
	    "height": .05,
	    "color": "#ffffff",
	    "align": "left",
	    "value": "ACCELEROMETER",
	},
	{
	    "name": "xAccLabel",
	    "type": "Label",
	    "x": .0,
	    "y": .65,
	    "width": .33,
	    "height": .05,
	    "color": "#ffffff",
	    "value": "xAcc",
	},
	{
	    "name": "yAccLabel",
	    "type": "Label",
	    "x": .33,
	    "y": .65,
	    "width": .33,
	    "height": .05,
	    "color": "#ffffff",
	    "value": "yAcc",
	},
	{
	    "name": "zAccLabel",
	    "type": "Label",
	    "x": .66,
	    "y": .65,
	    "width": .33,
	    "height": .05,
	    "color": "#ffffff",
	    "value": "zAcc",
	},
    
	{
	    "name": "accSliders",
	    "type": "MultiSlider",
	    "numberOfSliders": 3,
	    "x": .0,
	    "y": .5,
	    "min": 0,
	    "max": 1,
		"address": "/accelerometer",
	    "isVertical": true,
	    "width": .99,
	    "height": .15,
	},
	
	{
	    "name": "accelerometerSpeed",
	    "type": "Slider",
	    "x": 0,
	    "y": .725,
	    "width": .99,
	    "height": .075,
	    "isLocal": true,
	    "min": 1,
	    "max": 100,
	    "startingValue": 10,
	    "ontouchend": Control.functions.changeAccelerometerSpeed,
	    "oninit": function() { accelerometerSpeed.setValue(10); },
	},
	
	{
	    "name": "accSpeedLabel",
	    "type": "Label",
	    "x": .0,
	    "y": .775,
	    "width": 1,
	    "height": .1,
	    "color": "#ffffff",
	    "value": "Update Rate : 50Hz",
		"align": "left",
	},
	{
	    "name": "tabButton",
	    "type": "Button",
	    "x": .8,
	    "y": .85,
	    "width": .19,
	    "height": .15 * Control.data.whRatio,
	    "mode": "toggle",
	    "color": "#333333",
	    "stroke": "#aaaaaa",
	    "ontouchstart": Control.toggleToolbar,
	    "label": "menu",
	},
	
	{
	    "name": "infoButton",
	    "type": "Button",
	    "x": .6,
	    "y": .85,
	    "width": .2,
	    "height": .15 * Control.data.whRatio,
	    "mode": "contact",
	    "color": "#333333",
	    "stroke": "#aaaaaa",
	    "midiType": "noteon",
	    "protocol": "local",
	    "ontouchstart": function() { Control.changePage(1); },
	    "label":"info",
	},
    
	
	{
	    "name": "acc",
	    "type": "Accelerometer",
		"updateRate":10,
		"isLocal": true, 
	    "min": 0,
	    "max": 1,
	    "onvaluechange": "accSliders.setSequentialValues(this.x, this.y, this.z);",
	},
	
	/*{
	    "name": "gyro",
	    "type": "Gyro",
		"isLocal": true, 
		"updateRate":10,
	    "min": 0,
	    "max": 1,
	    "onvaluechange": "gyroSliders.setSequentialValues(this.pitch, this.roll, this.yaw);",
	},*/
	
	],
    
	[
	{
	    "name": "infoText",
	    "type": "Label",
	    "x": .1,
	    "y": .1,
	    "width": .8,
	    "height": .7,
	    "value": Control.data.infoText,
	    "verticalCenter": false,
	    "align": "left",
	},
	{
	    "name": "backButton",
	    "type": "Button",
	    "x": .8,
	    "y": .9,
	    "width": .19,
	    "height": .09,
	    "mode": "contact",
	    "color": "#333333",
	    "stroke": "#aaaaaa",
		"isLocal": true, 
	    "ontouchstart": function() { Control.changePage(0) },
	    "label": "back", 
	},
	] ],
};