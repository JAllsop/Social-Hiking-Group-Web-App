const form = document.getElementById('group-details');

function manage(txt) {
    var submit_btn = document.getElementById('submit-groupDetails');
    var inputElement = document.getElementsByTagName('input'); 
        
    for (i = 0; i < inputElement.length; i++) {

        if (inputElement[i].type == 'text' && inputElement[i].value == '') {
            submit_btn.disabled = true;    // Disable the button.
            return false;
        }
        else {
            submit_btn.disabled = false;   // Enable the button.
        }
    }
}
