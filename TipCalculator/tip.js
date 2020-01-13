// JavaScript Document
function calculateTip() {
var billAmt = document.getElementById("billAmt").value;
var serviceRating = document.getElementById("serviceRating").value
var peopleAmt = document.getElementById("peopleAmt").value

		if(peopleAmt === '1') {
			document.querySelector(".each").style.display ='none';										 
		} else {
			document.querySelector(".each").style.display ='inline';
			
		}
		if(peopleAmt === '1') {
			document.querySelector(".billeach").style.display ='none';										 
		} else {
			document.querySelector(".billeach").style.display ='inline';
			
		}


var tipTotal = (billAmt*serviceRating)/peopleAmt;
var billTotal = (tipTotal + Number(billAmt))/peopleAmt;
	
tipTotal = Math.round(tipTotal * 100)/100;
tipTotal = tipTotal.toFixed(2);
	
billTotal = Math.round(billTotal * 100)/100;
billTotal = billTotal.toFixed(2);

document.querySelector(".tipTotal").style.display = "inline";
document.querySelector(".billTotal").style.display = "inline";
document.getElementById("tip").innerHTML = tipTotal;
document.getElementById("bill").innerHTML = billTotal;
}

document.querySelector(".tipTotal").style.display = "none";
document.querySelector(".billTotal").style.display = "none";


document.getElementById("calculate").onclick = function() {
	calculateTip();
};
