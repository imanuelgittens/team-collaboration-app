window.addEventListener("load", function(){

	var messages = [];

	if(document.addEventListener){
		document.addEventListener('click', handleChatClick, false);
	}else{
		if(document.attachEvent){
			document.attachEvent('onclick', handleChatClick);
		}
	}

	function validateMessage(msg){
		return msg.length > 0;
	}

	function handleChatClick(event){
		var message = document.getElementById('myMessage')
		var chatError = document.getElementById('chat-error');
		event = event || window.event;
		event.target = event.target || event.srcElement;
		var element = event.target;

		if(element.className === 'send-message'){
			if(validateMessage(message.value)){
				chatError.innerHTML = '';
				messages.push({
					username: "John",
					message: message.value,
					timeStamp: Date.now()
				});
				console.log(messages);
			}else{
				chatError.innerHTML = 'Message cannot by empty.'
			}
		}
	}
});

