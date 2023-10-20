let UserInput = document.querySelector(".UserInput");
let UserLabel = document.querySelector(".UserLabel");
let PasswordInput = document.querySelector(".PasswordInput");
let PasswordLabel = document.querySelector(".PasswordLabel");
let phoneLabel = document.querySelector(".PhoneLabel");
let phoneInput = document.querySelector(".PhoneInput");
let EmailLabel = document.querySelector(".EmailLabel");
let EmailInput = document.querySelector(".EmailInput");
let check = document.querySelector(".checkbox");
let checkphone = /^01[0-2,5]\d{8}$/;
let checkemail = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;

function login() {
  if (
    UserInput.value == "" ||
    UserInput.value.length < 3 ||
    !isNaN(UserInput.value)
  ) {
    UserLabel.innerHTML = "Invalid User Name";
    UserLabel.style.color = "red";
    return false;
  } else if (
    (PasswordInput.value.length =
      "" ||
      !PasswordInput.value.includes("@") ||
      PasswordInput.value.length < 6)
  ) {
    PasswordLabel.innerHTML = "Invalid Password";
    PasswordLabel.style.color = "red";
    return false;
  } else if (!checkphone.test(phoneInput.value)) {
    PasswordLabel.innerHTML = "Password";
    PasswordLabel.style.color = "white";
    phoneLabel.innerHTML = "Invaled Phone Number";
    phoneLabel.style.color = "red";
    return false;
  } else if (!checkemail.test(EmailInput.value)) {
    phoneLabel.innerHTML = "Telephone";
    phoneLabel.style.color = "white";
    EmailLabel.innerHTML = "Invalid Email";
    EmailLabel.style.color = "red";
    return false;
  }
}

check.addEventListener("click", () => {
  if (PasswordInput.type === "text") {
    PasswordInput.type = "password";
  } else if (PasswordInput.type === "password") {
    PasswordInput.type = "text";
  }
});
