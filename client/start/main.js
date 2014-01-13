var deferred = null;
start = function(state)
{
	deferred = state;
	
	if(Teleport.context.room)
		state.resolve();
	else
		Teleport.setView(startView);
}

var startView = new Teleport.View("start", {
	events: {
		"click #startButton": startButtonClickHandler
	}
});

// Event handlers
function startButtonClickHandler(e)
{
	deferred.resolve({startDate: null});
}