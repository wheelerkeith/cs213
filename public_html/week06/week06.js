function validateAge(val, id){
	if (val.match( /^\s*([1-9]?\d|10\d|11[0-8])\s*$/))
	{
		document.getElementsByClassName(id)[0].style.visibility = 'hidden';
	}
	else
	{
		document.getElementsByClassName(id)[0].style.visibility = 'visible';
	}
}

function validateSSN(val, id){
	var expected = new RegExp(/^\s*\d{3}-\d{2}-\d{4}\s*$/);
	if(val.match(expected))
	{
		document.getElementsByClassName(id)[0].style.visibility = 'hidden';
	}
	else
	{
		document.getElementsByClassName(id)[0].style.visibility = 'visible';
	}
}

function validateCCN(val, id){
	var expected = new RegExp(/^\s*\d{16} || \d{4} \s \d{4} \s \d{4} \s \d{4}\s*$/)
	if (val.match(expected))
	{
		document.getElementsByClassName(id)[0].style.visibility = 'hidden';
	}
	else
	{
		document.getElementsByClassName(id)[0].style.visibility = 'visible';
	}
}

function validateDate(val, id){
	var expected = new RegExp(/^\s*([1-9]|1[0-2])\/([1-9]|[1-2]\d|3[01])\/(1(7(5[3-9]|[6-9]\d)|[89]\d\d)|2(0\d\d|100))\s*$/);
	if(val.match(expected))
	{
		document.getElementsByClassName(id)[0].style.visibility = 'hidden';
	}
	else
	{
		document.getElementsByClassName(id)[0].style.visibility = 'visible';
	}
}

function validateSa(val, id){
	var expected = new RegExp(/^\s*(A[KLRZ]|C[AOT]|DE|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])\s*$/);
	if (val.match(expected))
	{
		document.getElementsByClassName(id)[0].style.visibility = 'hidden';
	}
	else
	{
		document.getElementsByClassName(id)[0].style.visibility = 'visible';
	}
}

function validateMoney(val, id){
	var expected = new RegExp(/^\s*\$?[1-9]\d{0,2}((,\d{3})*|\d*)(\.\d\d)?\s*$/)
	if (val.match(expected))
	{
		document.getElementsByClassName(id)[0].style.visibility = 'hidden';
	}
	else
	{
		document.getElementsByClassName(id)[0].style.visibility = 'visible';
	}
}


