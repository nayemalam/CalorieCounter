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
var multiplier = 0;
var submit = document.querySelector(".submit");
var reset = document.querySelector(".reset");

// only when genders are changed
// sex.addEventListener("input", function() {
//     if(sex.value == "male") {
//         console.log("I am male");
//     }
//     if(sex.value == "female") {
//         console.log("I am female");
//     }
// });

// weightType.addEventListener("input", function() {
//     if(weightType.value == "kg") {
//         console.log("I chose kg");
//         console.log(weightInput.value);
//     }
//     if(weightType.value == "lbs") {
//         console.log("I chose pounds");
//         console.log(weightInput.value);
//     }
// });

// heightType.addEventListener("input", function() {
//     if(heightType.value == "kg") {
//         console.log("I chose kg");
//     }
//     if(heightType.value == "lbs") {
//         console.log("I chose pounds");
//     }
// });

submit.addEventListener("click", function() {
    var total = 0, weight = 0, height = 0;
    // activity factors from: https://www.exerciselifestyle.uk/nutrition/balancing-your-diet/
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

    if(weightType.value == "lbs") {
        weight = weightInput.value*0.453592;
    }
    if(heightType.value == "inches") {
        height = heightInput.value*2.54;
    }
    
    if(sex.value == "male") {
        console.log("I am male");
        total = Math.round(10 * weight + 6.25 * height - 5*age.value + 5);
        bmr.textContent = total, bmr.style.fontSize = "25px";
        calories.textContent = total * multiplier + "/day", calories.style.fontSize = "50px";
    } 
    if(sex.value == "female") {
        console.log("I am female");
        total = Math.round(10 * weight + 6.25 * height - 5*age.value - 161);
        bmr.textContent = total, bmr.style.fontSize = "25px";
        calories.textContent = total * multiplier + "/day", calories.style.fontSize = "50px";
    }
    else if (isNaN(weightInput.value) || isNaN(heightInput.value)) {
        alert("Something wrong with the code, please contact: github/nayemalam")
    } 
});

reset.addEventListener("click", function() {
    sex.value = "male";
    weightType.value = "kg";
    heightType.value = "cm";
    activityType.value = "sedentary";
    console.log("reset");
});


