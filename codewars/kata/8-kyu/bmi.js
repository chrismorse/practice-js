// http://www.codewars.com/kata/calculate-bmi/
function bmi(weight, height) {
  let b = weight / (height * height);
  
  return b <= 18.5 ? "Underweight" 
       : b <= 25.0 ? "Normal" 
       : b <= 30.0 ? "Overweight" 
       : "Obese";
}