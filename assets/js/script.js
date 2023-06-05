
const form = document.querySelector('#my-form');
//Get element
const firstNameInput = form.querySelector('#first-name');
const lastNameInput = form.querySelector('#last-name');
const phoneInput = form.querySelector('#phone');
const genderInput = form.querySelector('#gender');
const enquiryInput = form.querySelector('#enquiry');


function Validate()
{
   
   
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const genderValue = genderInput.value;
    const enquiryValue = enquiryInput.value.trim();

   
    const nameRegex = /^[a-zA-Z]+$/; // Only accept letters
    const phoneRegex = /^\d+$/; // Only accept numbers
    const genderRegex = /^(Male|Female)$/i; // Accept Male or Female, case insensitive

    let isValid = true; 

    document.getElementById("fn").style.color = "Red";
    document.getElementById("ln").style.color = "Red";
    document.getElementById("pn").style.color = "Red";
    document.getElementById("gd").style.color = "Red";
    document.getElementById("eq").style.color = "Red";

    //Detection firstName
    if (firstNameValue === '') {
      alert("Please enter your firstname.");
      return false;
    } else if (!nameRegex.test(firstNameValue)) {
      alert("Please enter your firstname.");
      return false;
    } else {
        document.getElementById("fn").innerHTML = "First Name:PASS";document.getElementById("fn").style.color = "Green";}

    // Detection lastName
    if (lastNameValue === '') {
         alert("Please enter your lastname.");
      return false;
    } else if (!nameRegex.test(lastNameValue)) {
      alert("Please enter your lastname.");
      return false;
    } else {document.getElementById("ln").innerHTML = "Last Name:PASS";document.getElementById("ln").style.color = "Green";}
    

    // Detection phone
    if (phoneValue === '') {
        alert("Please enter your phone.");
      return false;
    } else if (!phoneRegex.test(phoneValue)) {
        alert("Please enter your phone.");
      return false;
    } else {document.getElementById("pn").innerHTML ='Phone Number: PASS';document.getElementById("pn").style.color = "Green";}

    // Detection gender
    if (genderValue === '') {
        document.getElementById("gd").innerHTML = 'Gender: Please select your gender.';
        isValid = false;
    } else if (!genderRegex.test(genderValue)) {
        document.getElementById("gd").innerHTML = 'Invalid input for gender.';
        isValid = false;
    } else {document.getElementById("gd").innerHTML = 'Gender: PASS';document.getElementById("gd").style.color = "Green";}

    // Detection enquiry
    if (enquiryValue === '') {
        document.getElementById("eq").innerHTML = 'Question: Please enter your question';
        isValid = false;
    } else if (enquiryValue.split(/\s+/).length > 150) {
        document.getElementById("eq").innerHTML = 'Enquiry: Your enquiry should be limited to 150 words.';
        isValid = false;
    } else {document.getElementById("eq").innerHTML = 'Enquiry: PASS';document.getElementById("eq").style.color = "Green";}

}
