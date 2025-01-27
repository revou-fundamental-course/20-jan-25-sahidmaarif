function calculateBMI() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;

  if (height > 0 && weight > 0) {
    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById("bmiResult").textContent = bmi;
  } else {
    alert("Please enter valid height and weight values.");
  }
}
