/* ------ Link ---------*/

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele =>ele.classList.remove('active'));
        link.classList.add('active');
    })
})
/*----------- Typewhiter -----------*/

const typeWriter = document.getElementById("typewriter-text");
const text = "Anahí P. Sotelo";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);

/*------ Dinamismo en los proyectos -------*/