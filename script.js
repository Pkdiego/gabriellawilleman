
const scrollToTopButton = document.getElementById('scrollToTopBtn');

// Função para verificar a posição da janela e mostrar/ocultar o botão
function checkScrollPosition() {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Função para rolar suavemente de volta ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adiciona um ouvinte de evento de rolagem para verificar a posição da janela
window.addEventListener('scroll', checkScrollPosition);

// Adiciona um ouvinte de evento de clique para rolar de volta ao topo quando o botão é clicado
scrollToTopButton.addEventListener('click', scrollToTop);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Remove o caractere '#' do href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Role suavemente até o elemento de destino
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener("scroll", function () {
    var myBg = document.querySelector(".my-bg");
    if (window.scrollY > 0) {
        myBg.classList.add("scrolled-down");
    } else {
        myBg.classList.remove("scrolled-down");
    }
});

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var contentz = document.querySelectorAll('.content');
    var logoImg = document.getElementById("logo-img");
    
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "white";
        contentz.forEach(function (content) {
            content.style.color = "#6A3844";
        });
        // Mudar para logo2.png
        logoImg.src = "/imagem/logo.png";
    } else {
        navbar.style.backgroundColor = "";
        contentz.forEach(function (content) {
            content.style.color = "#FFFFFF";
        });
        // Voltar para logo.png
        logoImg.src = "/imagem/logo2.png";
    }
});


document.addEventListener("scroll", function () {
    const elementsToAnimate = document.querySelectorAll(".animar");

    elementsToAnimate.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Verifica se o elemento está parcialmente visível na janela de visualização
        if (elementTop < window.innerHeight && elementBottom >= 0) {
            element.classList.add("active");
        }
    });
});


/*TOGGLE*/

function mytoggleButton() {
    var myul = document.getElementById('myul');
    myul.classList.toggle('show-nav');
}

function closeMenu() {
    var myul = document.getElementById('myul');
    myul.classList.remove('show-nav');
}

