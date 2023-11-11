function ValidateAndCalculate (AnimalOption, Breeds) {
    var userIn = document.getElementById("userIn").value;
    var userIn2 = document.getElementById("userIn2").value;
    var userIn3 = document.getElementById("userIn3").value;
    var weight = parseFloat(userIn2);
    var height = parseFloat(userIn3);
    var selected = AnimalOption.options[AnimalOption.selectedIndex].text;
    var breedSelected = Breeds.options[Breeds.selectedIndex].text;
    var catBreedSelected = CatBreeds.options[CatBreeds.selectedIndex].text;
    var age = parseInt(userIn);
    var  BMI = parseFloat(weight / (height/100 * height/100));
    var  BMI = BMI.toFixed(1);
    let test = document.getElementById("test");
    const dogBreeds = {
        "Husky": 7,         
        "Pug": 8,
        "Bulldog": 9,
        "German Shepherd": 10,
    }
    const catBreeds = {
        "Persian": 4,         
        "Siamese": 5,
        "Birman": 6,
        "Burmese": 7,
    }
    const breed = dogBreeds[breedSelected];

    if (isNaN(age) || age < 0 || age == "" || weight == "" || height == "" || isNaN(weight) || isNaN(height) || weight < 0 || height < 0 || weight > 150 || height > 300) {
        alert("Please check your inputs and try again.");
        return false;
    }
    if (selected == "Dog") {
        if (breedSelected == "Please Select a Breed") {
            alert("Please select a breed.");
        }
        else
        {
            dogAge = age * breed;
            tex = "Your dog breed is " + breedSelected +  " and your dog is " + dogAge + " years old in human years. The BMI is " + BMI + " and ";
            document.getElementById("resultText2").innerHTML = tex;
        }
    }
    else if (selected == "Cat") {
        if (catBreedSelected == "Please Select a Breed") {
            alert("Please select a breed.");
        }
        else {
            catAge = age * catBreeds[catBreedSelected];
            tex = "Your cat breed is " + catBreedSelected +  " and your cat is " + catAge + " years old in human years. The BMI is " + BMI + " and ";
        }
    }
    else if (selected == "Please Select an Animal") {
        alert("Please select an animal.");
    }
    if (BMI < 18.5) {
            document.getElementById("resultText2").innerHTML = tex + "you are underweight.";
        }
        else if (BMI > 18.5 && BMI < 24.9) {
            document.getElementById("resultText2").innerHTML = tex + "you are normal weight.";
        }
        else if (BMI > 25 && BMI < 29.9) {
            document.getElementById("resultText2").innerHTML = tex + "You are overweight.";
        }
        else if (BMI > 30) {
            document.getElementById("resultText2").innerHTML = tex + "You are extremely overweight.";
        }
    }


function updateBreeds() {
    var selected = AnimalOption.options[AnimalOption.selectedIndex].text;
    var breedSelected = Breeds.options[Breeds.selectedIndex].text;
    if (selected == "Dog") {
        document.getElementById("CatBreeds").style.display = "none";
        document.getElementById("Breeds").style.display = "block";
    }
    else if (selected == "Cat") {
        document.getElementById("CatBreeds").style.display = "block";
        document.getElementById("Breeds").style.display = "none";
    }
    else if (selected == "Please Select an Animal") {
        document.getElementById("CatBreeds").style.display = "none";
        document.getElementById("Breeds").style.display = "none";
    }
}

function sendToGallery() {
    window.location.href = "Gallery.html";
}

function ValidateForm() {
    var fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    var phone = document.getElementById('number').value;
    if (email == '' || fname == '' || comment == '' || phone == '' || isNaN(phone)) {
        alert("Note: ALL inputs are mandatory, please amend your entries and try again.");
    }
    if (email == '') {
        document.getElementById('email').style.border = "solid 3px red";
    }
    else {
        document.getElementById('email').style.border = "solid 3px green";
    }

    if (fname == '') {
        document.getElementById('name').style.border = "solid 3px red";
    }
    else {
        document.getElementById('name').style.border = "solid 3px green";
    }

    if (phone == '') {
        document.getElementById('number').style.border = "solid 3px red";
    }
    else {
        document.getElementById('number').style.border = "solid 3px green";
    }
    
    if (comment == '') {
        document.getElementById('comment').style.border = "solid 3px red";
    }
    else {
        document.getElementById('comment').style.border = "solid 3px green";
    }
   if (email != '' && fname != '' && comment != '' && phone != '' && !isNaN(phone) ) {
        alert("Thank you for your feedback.");
        return true;
   }
    return false;
}