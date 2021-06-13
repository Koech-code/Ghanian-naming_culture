var form = document.getElementById("AkanForm")
form.addEventListener("submit", function generate(event){
    event.preventDefault()
    let dd = document.getElementById("day").value;
    let mm = document.getElementById("month").value;
    let yy = document.getElementById("year").value;
    let cc = document.getElementById("century").value;
    let gender = document.getElementById("gender").value;
    let result = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    let Males= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let Females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (dd <= 0 || dd > 31) {
        alert("Your date isn't within the normal range, therefore invalid. Input again.");
    }
    else if (mm <= 0 || mm > 12) {
        alert("Your input for months field cannot be less than 0 and cannot be more than 12.");
    }
    else if (Math.round(result) == 0 && gender === "male"){
        document.getElementById("output").innerHTML = ("Your Akan name is " + Males[0]);
    }
    else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === "male"){
        document.getElementById("output").innerHTML = ("Your Akan name is " + Males[1]);
    }
    else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === "male"){
        document.getElementById("output").innerHTML = ("Your Akan name is " + Males[2]);
    }
    else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === "male"){
        document.getElementById("output").innerHTML = ("Your Akan name is " + Males[3]);
    }
    else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === "male"){
        document.getElementById("output").innerHTML = ("Your Akan name is " + Males[4]);
    }
    else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === "male"){
        document.getElementById("output").innerHTML = ("Your Akan name is " + Males[5]);
    }
    else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === "male"){
        document.getElementById("output").innerHTML = ("Your Akan name is " + Males[6]);
    }
    else if (Math.round(result) == 0 && gender === "female"){
    document.getElementById("output").innerHTML = ("Your Akan name is " + Females[0]);
    }
    else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === "female"){
    document.getElementById("output").innerHTML = ("Your Akan name is " + Females[1]);
    }
    else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === "female"){
    document.getElementById("output").innerHTML = ("Your Akan name is " + Females[2]);
    }
    else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === "female"){
    document.getElementById("output").innerHTML = ("Your Akan name is " + Females[3]);
    }
    else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === "female"){
    document.getElementById("output").innerHTML = ("Your Akan name is " + Females[4]);
    }
    else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === "female"){
    document.getElementById("output").innerHTML = ("Your Akan name is " + Females[5]);
    }
    else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === "female"){
    document.getElementById("output").innerHTML = ("Your Akan name is " + Females[6]);
    }
    else{
        alert("Fill in all the fields.");
    }
}
)
