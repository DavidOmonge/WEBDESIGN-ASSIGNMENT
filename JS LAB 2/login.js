

document.getElementById('login').onclick = function() {
    if (document.querySelector('input[type="text"]').value && document.querySelector('input[type="password"]').value) {

        email = document.querySelector('input[type="text"]').value;
        password = document.querySelector('input[type="password"]').value;
        
    }

    confirm("Successful login");
};

