document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 1) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
    }
  });
  