let Grade = "A";
let message;

switch (Grade) {
  case "A":
    message = "Excellent!";
    break;
  case "B":
    message = "Good.";
    break;
  case "C":
    message = "Average";
    break;
    case "D":
    message = "Poor";
    break;
    case "F":
    message = "Fail";
    break;
  default:
    message = "Invalid grade.Please enter A,B,C,D or F";
}

console.log(message);