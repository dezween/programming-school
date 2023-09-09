document.addEventListener("DOMContentLoaded", function () {
    const menuToggler = document.getElementById("menu__toggler");
    const headerOverlay = document.getElementById("headerOverlay");

    menuToggler.addEventListener("change", function () {
        if (!menuToggler.checked) {
            headerOverlay.style.display = "block";
        } else {
            headerOverlay.style.display = "none";
        }
    });
});