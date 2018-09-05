var weight = prompt(" enter weight (kg)");
var height = prompt(" enter height (kg)");
var bmi;
bmi = weight / (height * height);
if (bmi < 18) {
    alert(bmi + "underweight");
}
else if (bmi < 25.0) {
    alert(bmi + "  Normal");
}
else if (bmi < 30.0) {
    alert(bmi + "  Overweight");
}
else {
    alert(bmi + "  Obese");
}