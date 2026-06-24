var burger = document.querySelector(".burger");
var mobileMenu = document.querySelector(".mobile-menu");

if (burger && mobileMenu) {
    burger.onclick = function () {
        mobileMenu.classList.toggle("show");
    };
}

var faqButtons = document.querySelectorAll(".faq-icon");

for (var i = 0; i < faqButtons.length; i++) {
    faqButtons[i].onclick = function () {
        var box = this.parentElement.parentElement;
        box.classList.toggle("open");

        if (box.classList.contains("open")) {
            this.innerText = "x";
        } else {
            this.innerText = "+";
        }
    };
}

var forms = document.querySelectorAll("form");

for (var f = 0; f < forms.length; f++) {
    forms[f].onsubmit = function (event) {
        event.preventDefault();
        var btn = this.querySelector("button");
        if (btn) {
            btn.innerText = "Done";
            setTimeout(function () {
                btn.innerText = btn.getAttribute("data-text") || "Send";
            }, 1200);
        }
    };
}
