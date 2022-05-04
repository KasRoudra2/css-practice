window.onload = function() {
    const links = document.querySelectorAll(".radial-menu li, .magic-menu li");
    const profileMenu = document.querySelector(".profile-menu");
    const radialMenu = document.querySelector(".radial-menu");
    // const nineDotMenu = document.querySelector(".nine-dot-menu");
    const profileToggle = document.querySelector(".profile-menu .toggle");
    const radialToggle = document.querySelector(".radial-menu .toggle");
    const nineDotToggle = document.querySelector(".nine-dot-menu .toggle");
    links.forEach(link =>{
        link.addEventListener("click", (e)=> {
            e.preventDefault();
            link.classList.toggle("active")
            links.forEach(link2 =>{
                if(link2.classList.contains("active") && link2 != link){
                    link2.classList.remove("active")
                }
            });
        })

    });
    profileToggle.addEventListener("click", ()=> {
        profileMenu.classList.toggle("active")
    });
    radialToggle.addEventListener("click", ()=> {
        radialMenu.classList.toggle("active")
    });
    nineDotToggle.addEventListener("click", ()=> {
        nineDotToggle.classList.toggle("active")
    });
}