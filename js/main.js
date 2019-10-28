// Фокус на первую ссылку навигации при загрузке

window.onload = function() {
  document.querySelector(".focus-link").focus();
  document.querySelector(".focus-link").style.outline = "none";
};

let body = document.querySelector("body");

// Форма авторизации

let logInSubmit = document.querySelector(".log-in .button");
let logIn = document.querySelector(".log-in div");
let logInForm = document.querySelector(".log-in form");

logIn.onclick = function(e) {
  if (logInForm.style.display === "block") {
    logInForm.style.display = "none";
  } else {
    logInForm.style.display = "block";
  }
  e.stopPropagation();
};

logInForm.onclick = function(e) {
  e.stopPropagation();
};

body.onclick = function() {
  logInForm.style.display = "none";
};

logInSubmit.onclick = function(e) {
  logInForm.style.display = "none";
  e.stopPropagation();
};

// Модальное окно

let contactSalesButton = document.querySelector(".article1 button");
let form = document.querySelector(".contact-form form");
let inputs = document.querySelectorAll(".contact-form input");
let sendData = document.querySelector(".contact-form button");
let backgroundDiv = document.querySelector("#background-div");

let name = "";
let email = "";
let phone = "";

function showBackground() {
  body.style.overflowY = "hidden";
  backgroundDiv.style.display = "block";
}

function showForm() {
  form.style.display = "block";
  form.style.left =
    (document.documentElement.clientWidth - form.offsetWidth) / 2 + "px";
  form.style.top =
    (document.documentElement.clientHeight - form.offsetHeight) / 2 + "px";
}

function hideModal() {
  backgroundDiv.style.display = "none";
  body.style.overflowY = "";
  form.style.display = "none";
}

function toggleDisable() {
  if (
    form.elements.name.value &&
    form.elements.email.value &&
    form.elements.phone.value.length === 18
  ) {
    name = form.elements.name.value;
    email = form.elements.email.value;
    phone = form.elements.phone.value;

    sendData.removeAttribute("disabled");
  } else {
    sendData.setAttribute("disabled", "disabled");
  }
}

contactSalesButton.onclick = function() {
  showBackground();
  showForm();
  toggleDisable();
};

sendData.onclick = function() {
  hideModal();
  inputs.forEach(input => (input.value = ""));
  sendData.setAttribute("disabled", "disabled");

  const data = {
    name,
    email,
    phone
  };

  // Отправляем на сервер
  console.log(JSON.stringify(data));
};

backgroundDiv.onclick = function() {
  hideModal();
  sendData.setAttribute("disabled", "disabled");
};

form.oninput = function() {
  toggleDisable();
};

// Маска
$(document).ready(function() {
  $("#phone").mask("+1 (000) 000-00-00", { placeholder: "+1 (___) ___-__-__" });
});
