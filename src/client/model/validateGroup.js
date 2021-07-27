
$(document).ready(function(){

    var submit_bt = document.getElementById('submitGCId');

    $('#groupName_').on('focusout', function(){

        if($('#groupName_').val() != ""){

            let groupname_ = $('#groupName_').val();

            fetch('/validate-group/'+`${groupname_}`)
             .then(function(response){
                 return response.json()
             })
             .then(function(_value){
                 if(_value == true){

                    $("#groupIDFields").trigger("reset");
                    submit_bt.disabled = true;

                    $('.error').text('Group name already exists.');
                    $('.error').fadeIn('slow');
                 }
                 else{
                    $('.error').fadeOut('slow');
                 }
             })                  

        }else{
            $('.error').text('Group name equired..!');
            $('.error').fadeIn("slow");
        }

    });

});
