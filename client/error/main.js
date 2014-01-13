var _retry = null;
error = function(retry)
{
	_retry = retry;
	
	Teleport.setView(errorView);
}

var errorView = new Teleport.View("error", {
	events: {
		"click button": tryAgain
	}
});

// Event handlers
function tryAgain()
{
	_retry();
}