console.log("app loaded.");

var sex = document.getElementById("sex");
var weightType = document.getElementById("weightType");
var weightInput = document.getElementById("weightInput");
var heightType = document.getElementById("heightType");
var heightInput = document.getElementById("heightInput");
var age = document.getElementById("age");
var bmr = document.querySelector(".bmr");
var activityType = document.getElementById("activityType");
var calories = document.querySelector(".calories");
var submit = document.querySelector(".submit");
var reset = document.querySelector(".reset");
// get media query
var mq = window.matchMedia( "(max-width: 768px)" );

submit.addEventListener("click", function() {
    var total = 0, weight = 0, height = 0, multiplier = 0;
    if(activityType.value == "sedentary") {
        console.log("I am sedentary");
        multiplier = 1.2;
    } else if(activityType.value == "lightly-active") {
        console.log("I am lightly-active");
        multiplier = 1.375;
    } else if(activityType.value == "moderately-active") {
        console.log("I am moderately-active");
        multiplier = 1.55;
    }else if(activityType.value == "very-active") {
        console.log("I am very-active");
        multiplier = 1.725;
    }else if(activityType.value == "highly-active") {
        console.log("I am highly-active");
        multiplier = 1.9;
    }

    weight = weightInput.value;
    height = heightInput.value;

    if(weightType.value == "lbs") {
        weight = weightInput.value*0.453592;
    }
    if(heightType.value == "inches") {
        height = heightInput.value*2.54;
    }
    
    if(sex.value == "male") {
        console.log("I am male");
        total = Math.round(10 * weight + 6.25 * height - 5*age.value + 5);
        if(mq.matches) {
            bmr.textContent = total, bmr.style.fontSize = "20px;"
            calories.textContent = total * multiplier + " calories/day", calories.style.fontSize = "25px";
        } else {
            bmr.textContent = total, bmr.style.fontSize = "25px";
            calories.textContent = total * multiplier + " calories/day", calories.style.fontSize = "45px";
        }
    } 
    if(sex.value == "female") {
        console.log("I am female");
        total = Math.round(10 * weight + 6.25 * height - 5*age.value - 161);
        if(mq.matches) {
            bmr.textContent = total, bmr.style.fontSize = "20px;"
            calories.textContent = total * multiplier + " calories/day", calories.style.fontSize = "25px";
        } else {
            bmr.textContent = total, bmr.style.fontSize = "25px";
            calories.textContent = total * multiplier + " calories/day", calories.style.fontSize = "45px";
        }
    }
    else if (isNaN(weightInput.value) || isNaN(heightInput.value)) {
        alert("Something wrong with the code, please contact: github/nayemalam");
    } 
});


reset.addEventListener("click", function() {
    sex.value = "male";
    weightType.value = "kg";
    heightType.value = "cm";
    activityType.value = "sedentary";
    bmr.textContent = "-", bmr.style.fontSize = "20px";
    calories.textContent = "-", calories.style.fontSize = "20px";
    console.log("reset");
});

// activity factors from: https://www.exerciselifestyle.uk/nutrition/balancing-your-diet/
// methodology from: https://www.healthline.com/nutrition/how-many-calories-per-day