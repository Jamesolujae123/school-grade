// Function for calculating grades
const calculate = () => {
  // Getting input from user into height variable
  let maths = document.querySelector("#maths").value;
  let grade = "";

  // Input is string so typecasting is needed
  let score = parseFloat(maths);

  let mark = score;

  if (mark < 0 || mark > 100) {
    alert("Invalid mark, outside range 0-100");
  } else if (mark <= 100 && mark >= 75) {
    grade = "A1";
  } else if (mark <= 74 && mark >= 70) {
    grade = "B2";
  } else if (mark <= 69 && mark >= 65) {
    grade = "B3";
  } else if (mark <= 64 && mark >= 60) {
    grade = "C4";
  } else if (mark <= 59 && mark >= 55) {
    grade = "C5";
  } else if (mark <= 54 && mark >= 50) {
    grade = "C6";
  } else if (mark <= 49 && mark >= 45) {
    grade = "D7";
  } else if (mark <= 45 && mark >= 40) {
    grade = "E8";
  } else if (mark < 40) {
    grade = "F9";
  }

  if (maths == "") {
    document.getElementById("showdata").innerHTML = "please enter this field";
  } else {
    if (mark >= 39.5) {
      document.getElementById(
        "showdata"
      ).innerHTML = ` Out of 100 your mark is ${score}%. <br> Your grade is ${grade}. You passed! `;
    } else {
      document.getElementById(
        "showdata"
      ).innerHTML = `Out of 100 your mark is ${score}%. <br> Your grade is ${grade}. You failed.`;
    }
  }
};
