window.onload = function() {
    const sidebar1 = document.querySelector(".sidebar1");
    const toggle1 = document.querySelector(".sidebar1 .toggle");
    toggle1.addEventListener("click", ()=> {
        sidebar1.classList.toggle("active")
    })
}