
const form = document.querySelector('#my-form');

// 获取表单元素中的每个输入框
const NameInput = form.querySelector('#name');
const phoneInput = form.querySelector('#phone');
const genderInput = form.querySelector('#gender');
const enquiryInput = form.querySelector('#enquiry');


function Validate()
{
    // 获取输入值并去除首尾空格
    const NameValue = NameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const genderValue = genderInput.value;
    const enquiryValue = enquiryInput.value.trim();

    // 正则表达式验证
    const nameRegex = /^[a-zA-Z]+$/; // 只接受字母
    const phoneRegex = /^\d+$/; // 只接受数字
    const genderRegex = /^(Male|Female)$/i; // 接受Male或者Female，不区分大小写

    let isValid = true; // 表单有效性的开关，默认为true

    document.getElementById("fn").style.color = "Red";
    document.getElementById("ln").style.color = "Red";
    document.getElementById("pn").style.color = "Red";
    document.getElementById("gd").style.color = "Red";
    document.getElementById("eq").style.color = "Red";

    // 检测firstName字段
    if (NameValue === '') {
        document.getElementById("fn").innerHTML = "Name: Please enter your  name.";
        isValid = false;
    } else if (!nameRegex.test(NameValue)) {
        document.getElementById("fn").innerHTML = "Name: Please enter letters.";
        isValid = false;
    } else {
        document.getElementById("fn").innerHTML = "Name:PASS";document.getElementById("fn").style.color = "Green";}

    // 检测phone字段
    if (phoneValue === '') {
        document.getElementById("pn").innerHTML =('Phone Number: Please enter your phone number.');
        isValid = false;
    } else if (!phoneRegex.test(phoneValue)) {
        document.getElementById("pn").innerHTML =('Phone Number: Invalid input for phone number.');
        isValid = false;
    } else {document.getElementById("pn").innerHTML ='Phone Number: PASS';document.getElementById("pn").style.color = "Green";}

    // 检测gender字段
    if (genderValue === '') {
        document.getElementById("gd").innerHTML = 'Gender: Please select your gender.';
        isValid = false;
    } else if (!genderRegex.test(genderValue)) {
        document.getElementById("gd").innerHTML = 'Invalid input for gender.';
        isValid = false;
    } else {document.getElementById("gd").innerHTML = 'Gender: PASS';document.getElementById("gd").style.color = "Green";}

    // 检测enquiry字段
    if (enquiryValue === '') {
        document.getElementById("eq").innerHTML = 'Enquiry: Please enter your enquiry.';
        isValid = false;
    } else if (enquiryValue.split(/\s+/).length > 150) {
        document.getElementById("eq").innerHTML = 'Enquiry: Your enquiry should be limited to 150 words.';
        isValid = false;
    } else {document.getElementById("eq").innerHTML = 'Enquiry: PASS';document.getElementById("eq").style.color = "Green";}

}
