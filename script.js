window.onload = function() {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
        link.appendChild(document.createElement('span'))
        link.appendChild(document.createElement('span'))
        link.appendChild(document.createElement('span'))
        link.appendChild(document.createElement('span'))
    })
}