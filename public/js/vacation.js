document.getElementById("vacation-booking-form").onsubmit = () => {
    clearErrors();
    let isValid = true;
    
    let location = document.getElementById("location").value;
    if(location == "") {
        document.getElementById("err-location").style.display = "block";
        isValid = false;
    }
    
    let departure = document.getElementById("departure").value.trim();
    if(!departure) {
        document.getElementById("err-departure").style.display = "block";
        isValid = false;
    }
    
    let travelers = document.getElementById("travelers").value.trim();
    if(!travelers) {
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    } else if(travelers <= 0) {
        document.getElementById("err-travelers").textContent = "Number of travelers must be larger than 0";
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    }
    
    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}