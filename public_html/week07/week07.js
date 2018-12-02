var toggleShippingAddress = function () {
    if (document.getElementById("shippingCheckBox").checked == false) {
        document.getElementById("shipping").style.display = "none";
    } else {
        document.getElementById("shipping").style.display = "inherit";
    }
};

function toggleConfirm (services) {
	
	var price = Number(services);
	
	var total = + document.getElementById("price").innerHTML.replace(/[^\d\.]/g, '');
	console.log(document.getElementById("price").innerHTML);
	total += price;
    
    document.getElementById("price").innerHTML = "$" +  total.toFixed(2);
    document.getElementById("tax").innerHTML   = "$" + (total * .08).toFixed(2);
    document.getElementById("total").innerHTML = "$" + (total + total * .08).toFixed(2);
};

function clickConfirmButton () {

	document.getElementById("price").innerHTML;
	document.getElementById("tax").innerHTML;
	document.getElementById("total").innerHTML;
	
	document.getElementById("quotedServices").style.display = "none";
    document.getElementById("paymentAndShipping").style.display = "none";
    document.getElementById("confirm").style.display = "inherit";
}

var validateField = function (value, displayEl) {
    if (value == "") {
        displayEl.innerHTML = "This field is required";
    } else {
        displayEl.innerHTML = "";
    }
}

var validateMonth = function (value, displayEl) {
    if (/(0[1-9]|1[0-2]|^[1-9]$)/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Month";
    }
}

var validateYear = function (value, displayEl) {
    if (value > 14 && value < 100) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Year";
    }
}

var validateStates = function (value, displayEl) {
    if (/^\s*(A[KLRZ]|C[AOT]|DE|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])\s*$/i.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid State";
    }
}

var validateZip = function (value, displayEl) {
    if (/^\s*\d{5}(-\d{4})?\s*$/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Zip";
    }
}

var validateCard = function (value, displayEl) {
    if (/^\s*((\d{4}\s){3}\d{4}|\d{16})\s*$/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Card";
    }
}

var validatePhone = function (value, displayEl) {
    if (/^\s*(\(\d{3}\) ?\d{3}-\d{4}|\d{10})\s*$/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Number";
    }
}