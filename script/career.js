$(document).ready(function(){
    // Fulfill value
    var name = sessionStorage.getItem('name');
    var sName = sessionStorage.getItem('sName');
    var email = sessionStorage.getItem('email');
    var checkForm="true" == sessionStorage.getItem('check');
    $('#input1').val(name);
    $('#input2').val(sName);
    $('#email').val(email);
    $('#checkForm').prop('checked', checkForm);
    // Fulfill value end

    // Submit action
    $('#form').submit(function() {
        var nameSub = $('#input1').val();
        var sNameSub = $('#input2').val();
        var emailSub = $('#email').val();
        var checkFormSub = $('#checkForm').prop('checked');
        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem('name', nameSub);
            sessionStorage.setItem('sName', sNameSub);
            sessionStorage.setItem('email', emailSub);
            sessionStorage.setItem('check', checkFormSub);
        } else {
            alert('Twoja przeglądarka nie wspiera "sessionStorage" i twoje zgłoszenie nie może być wysłane. Zaktualizuj swoją przeglądarkę do najnowszej wersji lub spróbuj uzyć innej przeglądarki.')
            return false;
        }
      });
      // Submit action end
});
