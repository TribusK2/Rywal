$(document).ready(function(){
    // Confirmation form
        // Fulfill value
        var nameConfirmed = sessionStorage.getItem('name');
        var sNameConfirmed = sessionStorage.getItem('sName');
        var emailConfirmed = sessionStorage.getItem('email');
        var checkConfirmed="true" == sessionStorage.getItem('check');
        $('#input1Confirmed').val(nameConfirmed);
        $('#input2Confirmed').val(sNameConfirmed);
        $('#emailConfirmed').val(emailConfirmed);
        $('#checkConfirmed').prop('checked', checkConfirmed);
        // Fulfill value end

        // back button
        var backButton = $('#backButton');
        backButton.click(function(){
        window.location.href = "career.html";
        });
        // back button end

        // Button submit
        var nameEx = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
        var sNameEx = /^(?!-)(?!.*--)[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ-]+(?<!-)$/;
        var emaiEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var maxSize = 400000;

        $('#confirmedForm').submit(function(){
            var nameCheck = $('#input1Confirmed').val();
            var sNameCheck = $('#input2Confirmed').val();
            var emailCheck = $('#emailConfirmed').val();
            var checkCheck = $('#checkConfirmed').prop('checked');
            var fileSize = $('#file')[0].files[0].size;
            if (typeof(Storage) !== "undefined"){   
                if (nameEx.test(nameCheck) && sNameEx.test(sNameCheck) && emaiEx.test(emailCheck) && checkCheck == true && fileSize < maxSize){
                        sessionStorage.removeItem("name");
                        sessionStorage.removeItem("sName");
                        sessionStorage.removeItem("email");
                        sessionStorage.removeItem("check");
                } else {
                    if(!nameEx.test(nameCheck)){
                        $('#input1Confirmed').nextAll('small').removeClass('validationAlert'); 
                    };
                    if(!sNameEx.test(sNameCheck)){
                        $('#input2Confirmed').nextAll('small').removeClass('validationAlert'); 
                    };
                    if(!emaiEx.test(emailCheck)){
                        $('#emailConfirmed').nextAll('small').removeClass('validationAlert'); 
                    };
                    if(checkCheck == false){
                        $('#checkConfirmed').nextAll('small').removeClass('validationAlert'); 
                    };
                    if(fileSize > maxSize){
                        $('#file').nextAll('small').removeClass('validationAlert'); 
                    };
                    return false;
                };    
            } else {
                alert('Twoja przeglądarka nie wspiera "sessionStorage" i twoje zgłoszenie nie może być wysłane. Zaktualizuj swoją przeglądarkę do najnowszej wersji lub spróbuj uzyć innej przeglądarki.');
                return false;
            };    
        });
        // Button submit end

    // Confirmation form end
});