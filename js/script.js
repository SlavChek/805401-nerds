var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var lfname = popup.querySelector("[name=last-first-name]");
var form = popup.querySelector(".appointment-form");
var email = popup.querySelector("[name=email-adress]");
var postmail = popup.querySelector("[name=mail]");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    lfname.focus();
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

form.addEventListener("submit", function (evt) {
        if (!lfname.value || !email-adress.value || !postmail.value) {
          evt.preventDefault();
          console.log("Нужно ввести логин и пароль");
        }
  });
