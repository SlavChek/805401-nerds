var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var lfname = popup.querySelector("[name=last-first-name]");
var form = popup.querySelector(".appointment-form");
var postmail = popup.querySelector("[name=email-adress]");
var textarea = popup.querySelector("[name=mail]");
var isStorageSupport = true;
var storage = "";

  try {
    storage = localStorage.getItem("lfname");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  
    if (storage) {
      lfname.value = storage;
      postmail.focus();
    } else {
    lfname.focus();
  }
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
    if (!lfname.value || !postmail.value || !textarea.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }else {if (isStorageSupport) {
      localStorage.setItem("lfname", lfname.value  );
    }
          }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });