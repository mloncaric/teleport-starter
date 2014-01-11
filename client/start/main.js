var deferred = null;
start = function(state)
{
	deferred = state;
	
	if(Teleport.context.room)
		state.resolve();
	else
		Teleport.setView(startView);
}

var events =
{ "click #startButton": startButtonClickHandler
};

var startView = new Teleport.View("start", events);

// Event handlers
function startButtonClickHandler(e)
{
	deferred.resolve({startDate: null});
}