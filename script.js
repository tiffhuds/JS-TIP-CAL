// Tip Calculation
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var levelofService = document.getElementById("levelofService").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //value input
  if (billAmt === "" && levelofService == 0) {
    alert("Please enter values");
    return;
  }
  //is input empty or less than or equal to 1
  if (numOfPeople === "" && numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  //Tip Calculation
  let total = (billAmt * levelofService) / numOfPeople;
  //round two decimal places
  total = Math.round(total * 100) / 100;

  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
//hid the tip amount on load
document.getElementById("totalTip").style.display = "block";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
