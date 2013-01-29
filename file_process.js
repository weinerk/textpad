window.onload = function() {
    
    var pad = document.getElementById('pad');
    
    function handleWindowActive() {
        if( typeof localStorage.textpad_buffer != 'undefined') {
            pad.innerHTML = localStorage.textpad_buffer;
        } else {
            localStorage.textpad_buffer = pad.innerHTML;
        }
    };
    
    function handleWindowBlur() {
        localStorage.textpad_buffer = pad.innerHTML;
    };
    
    function saveProgress() {
        localStorage.textpad_buffer = pad.innerHTML;
    };
    
    window.addEventListener("focus", handleWindowActive);
    window.addEventListener("blur", handleWindowBlur);
    window.onbeforeunload = function() {
        saveProgress();
    };

};