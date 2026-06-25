const passwordBox = document.getElementById("password");



function generatePassword(){


    let length = document.getElementById("length").value;


    let uppercase = document.getElementById("uppercase").checked;

    let lowercase = document.getElementById("lowercase").checked;

    let numbers = document.getElementById("numbers").checked;

    let symbols = document.getElementById("symbols").checked;



    let characters = "";

    let password = "";



    if(length < 4 || length > 50){

        document.getElementById("message").innerHTML =
        "Password length must be between 4 and 50";

        return;

    }



    if(
        !uppercase &&
        !lowercase &&
        !numbers &&
        !symbols
    ){

        document.getElementById("message").innerHTML =
        "Select at least one option";

        return;

    }



    if(uppercase)

        characters += 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



    if(lowercase)

        characters += 
        "abcdefghijklmnopqrstuvwxyz";



    if(numbers)

        characters +=
        "0123456789";



    if(symbols)

        characters +=
        "!@#$%^&*()_+{}[]";




    for(let i=0;i<length;i++){

        let randomIndex =
        Math.floor(Math.random()*characters.length);


        password += characters[randomIndex];

    }



    passwordBox.value=password;


    document.getElementById("message").innerHTML =
    "Password Generated Successfully";

}




function copyPassword(){


    if(passwordBox.value===""){

        alert("Generate password first");

        return;

    }



    navigator.clipboard.writeText(
        passwordBox.value
    );


    alert("Password copied");

}