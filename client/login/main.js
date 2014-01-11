var deferred = null;
login = function(state)
{
	deferred = state;
	
	if(Teleport.context.user)
		state.resolve();
	else
		Teleport.setView(loginGuestView);
}

var loginGuestView = new Teleport.View("loginGuest", {"submit form": submitHandler});

// Event handlers
function submitHandler(e)
{
	e.preventDefault();
	
	var name = $("#guestName").val();
	
	if(!name)
		return;
	
	deferred.resolve({guestName: name});
}