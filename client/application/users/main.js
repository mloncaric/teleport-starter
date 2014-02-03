var usersView = new Teleport.View("users", {
	helpers: {
		listUsers: function(context, options) {
			return context.map(function(item)
			{
				return options.fn(item);
			}).join(", ");
		}
	},
	
	data: {
		users: function() {
			return Teleport.onlineUsers(true);
		}
	}
});