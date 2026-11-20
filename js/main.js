document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("enquiry").addEventListener("submit", function (e) {
    e.preventDefault();
    if (this.reportValidity()) {
        document.getElementById("success").style.display = "block";
    }
});
