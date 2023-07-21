document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contactModal").style.display = "block";
});
window.addEventListener("click", function(event) {
    var modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
