applicationView = new Teleport.View("application", {
	// Executes when template gets rendered for the first time
	show: function() {
		
	},
	
	// Executes when template gets destroyed
	hide: function() {
		
	},
	
	// Hook shared objects to the view's lifecycle
	sharedObjects: function() {
		return [
			sharedObject
		];
	}
});

// Temporary, will be added to the view options
// Executes every time a template is rendered
Template.application.rendered = function() {
	
}

// Shares anything between users in current session, it's also persisted
var sharedObject = new Teleport.SharedObject("sharedObject", {
	// Called when user calls reset method on SharedObject instance
	// Also called when session starts (ie the object has no data yet)
	reset: function() {
		sharedObject.set("key", "initial value");
		// sharedObject.setMany({a: 1, b: "2", c: true, d: []});
	},
	
	// Called when someone calls set or setMany method
	sync: function() {
		console.log("sharedObject sync:", sharedObject.get("key"));
	}
});