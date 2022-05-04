window.onload = function() {
    const link = document.querySelector(".link");
    const jsRipple = document.querySelector(".js-ripple a");
    link.addEventListener("click", (e)=> {
        e.preventDefault();
        link.classList.toggle("clicked")
    });
    jsRipple.addEventListener("click", function(e) {
        const x = e.clientX - e.target.offsetLeft + "px";
        const y = e.clientY - e.target.offsetTop + "px";
        const ripples = document.createElement("span");
        ripples.style.left = x;
        ripples.style.top = y;
        this.appendChild(ripples);
        setTimeout(() => {
            this.removeChild(ripples);
        }, 500);
    });
}