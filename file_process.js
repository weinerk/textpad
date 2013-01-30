function saveProgress() {
    var pad = document.getElementById('pad');
    localStorage.textpad_buffer = pad.innerHTML;
};

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();


window.onload = function() {
    
    var pad = document.getElementById('pad');
    
    // load the textpad contents
    if( typeof localStorage.textpad_buffer != 'undefined') {
        pad.innerHTML = localStorage.textpad_buffer;
    } else {
        localStorage.textpad_buffer = pad.innerHTML;
    }

    function handleWindowBlur() {
        localStorage.textpad_buffer = pad.innerHTML;
    };
    //window.addEventListener("focus", handleWindowActive);

    //window.addEventListener("blur", handleWindowBlur);

    //window.onbeforeunload = function() {
    //    saveProgress();
    //};

};


function processKeyDown(event)
{
		if(event.ctrlKey && event.keyCode==81) //CTRL-Q
		{
				var date = new Date;

				var YY = date.getFullYear();
				var MM = date.getMonth()+1; // beware: January = 0; February = 1, etc.
				var DD = date.getDate();
				var hh = date.getHours();
				var mm = date.getMinutes();
				var ss = date.getSeconds();

				MM = ("0"+MM).slice(-2);
				DD = ("0"+DD).slice(-2);
				hh = ("0"+hh).slice(-2);
				mm = ("0"+mm).slice(-2);
				ss = ("0"+ss).slice(-2);

				var textToInsert = ""+YY+MM+DD+"_"+hh+mm+ss+"\n";

				var eventObject = document.createEvent('TextEvent');
				eventObject.initTextEvent('textInput',
																	true,
																	true,
																	null,
																	textToInsert);

				var pad = document.getElementById('pad');
				pad.dispatchEvent(eventObject);
		}
}

