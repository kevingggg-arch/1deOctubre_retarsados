const CONFIG = {

    nombreFinal: new URLSearchParams(window.location.search).get("nombre") || "Yessica",

    nombres: [
        "⚜︎Katia☃",
        "✈Jireth☻",
        "❆Vasti❆",
        "𐓏Esther𖣔",
        "㊙︎Dayri100☯︎",
        "⚂Leo☯︎",
        "⚔︎Yudit⚔︎",
        "𖣳Liz",
        "ꚰAvrilꚰ",
        "𖠜Sol✹",
        "♯Nana®",
        "⚠︎Yessica⚜︎",
        "⚜︎Angela⚜︎",
        "⚜︎Luz⚖︎",
        "♦︎Fanny◻︎",
        "㊙︎Luu🈂︎",
        "♣︎Ale☘︎",
        "⚜︎Isaacc♥︎",
        "⛑︎Toniii⚔︎",
        "✓Fershs⚜︎",
        "𖠎stef",
        "⛾Danii㋡",
        "❦Crisss☬",
        "☫Crarlitos☭",
        "✹Micki✿"
    ]

};

const contenedor = document.getElementById("names");
const finalName = document.getElementById("finalName");

finalName.textContent = CONFIG.nombreFinal;

let cantidad = 0;

function crearNombre() {

    if (cantidad >= 35) return;

    const nombre = document.createElement("div");

    nombre.classList.add("name");

    const texto =
        CONFIG.nombres[
            Math.floor(Math.random() * CONFIG.nombres.length)
        ];

    nombre.textContent = texto;

    nombre.style.left =
        Math.random() * 90 + 5 + "%";

    nombre.style.top =
        Math.random() * 85 + 5 + "%";

    nombre.style.fontSize =
        16 + Math.random() * 15 + "px";

    nombre.style.animationDelay =
        Math.random() * 2 + "s";

    nombre.style.animationDuration =
        4 + Math.random() * 4 + "s";


    // Movimiento aleatorio

    const direccionX =
        (Math.random() - 0.5) * 180;

    const direccionY =
        (Math.random() - 0.5) * 120;


    nombre.style.setProperty(
        "--moveX",
        direccionX + "px"
    );

    nombre.style.setProperty(
        "--moveY",
        direccionY + "px"
    );


    // Dirección de la estela

    const angulo =
        Math.atan2(direccionY, direccionX) * 180 / Math.PI;

    nombre.style.setProperty(
        "--angulo",
        angulo + "deg"
    );


    contenedor.appendChild(nombre);

    cantidad++;


    setTimeout(() => {

        nombre.remove();

        cantidad--;

    }, 8000);
}


// Crear nombres

const intervalo =
    setInterval(crearNombre, 350);


// Después de 15 segundos
// dejamos de crear nombres

setTimeout(() => {

    clearInterval(intervalo);

    setTimeout(() => {

        document
            .getElementById("darken")
            .classList.add("active");

        finalName.classList.add("show");
        document.body.classList.add("escena-final");

    }, 3000);

}, 15000);

// =================================
// FONDO DE PARTÍCULAS
// =================================

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

let particles = [];


function ajustarCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}


ajustarCanvas();


window.addEventListener(
    "resize",
    ajustarCanvas
);


// Crear partículas

for (let i = 0; i < 100; i++) {

    particles.push({

        x:
            Math.random() *
            canvas.width,

        y:
            Math.random() *
            canvas.height,

        size:
            Math.random() * 2 + 0.5,

        speedX:
            (Math.random() - 0.5) * 0.3,

        speedY:
            (Math.random() - 0.5) * 0.3

    });

}


// Animar partículas

function animarParticulas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p => {

        p.x += p.speedX;

        p.y += p.speedY;


        if (p.x < 0)
            p.x = canvas.width;

        if (p.x > canvas.width)
            p.x = 0;

        if (p.y < 0)
            p.y = canvas.height;

        if (p.y > canvas.height)
            p.y = 0;


        ctx.beginPath();


        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "rgba(255,255,255,0.7)";

        ctx.fill();

    });


    requestAnimationFrame(
        animarParticulas
    );
}


animarParticulas();


// =================================
// MÚSICA
// =================================

const musica =
    document.getElementById("musica");

const playButton =
    document.getElementById("playButton");


playButton.onclick = async function () {

    try {
        await musica.play();
        playButton.style.display = "none";
    } catch (error) {
        console.log("No se pudo reproducir la música:", error);
    }

};
// =================================
// 🍂 HOJAS DE OTOÑO
// =================================

const hojas = [
    "🍂",
    "🍁",
    "🍃",
    "🍂",
    "🍁",
    "🍂",
    "🍃",
    "🍁",
    "🍂",
    "🍁",
    "🍃"
];
const contenedorHojas = document.getElementById("leaves");

function crearHoja() {

    const hoja = document.createElement("div");

    hoja.classList.add("leaf");

    // Algunas hojas pasan cerca de la cámara
    const primerPlano = Math.random() < 0.22;

    if (primerPlano) {
        hoja.classList.add("foreground");
    }

    hoja.textContent =
        hojas[Math.floor(Math.random() * hojas.length)];

    hoja.style.left =
        Math.random() * 100 + "%";

    hoja.style.fontSize =
        16 + Math.random() * 28 + "px";

    hoja.style.animationDuration =
        primerPlano
            ? 8 + Math.random() * 5 + "s"
            : 6 + Math.random() * 6 + "s";

    hoja.style.setProperty(
        "--viento",
        (Math.random() - 0.5) * 300 + "px"
    );

    hoja.style.setProperty(
        "--giro",
        (Math.random() * 720 - 360) + "deg"
    );

    hoja.style.animationDelay =
        Math.random() * 2 + "s";

    contenedorHojas.appendChild(hoja);

    setTimeout(() => {
        hoja.remove();
    }, 14000);
}
setInterval(crearHoja, 700);

// =================================
// ☁️ NUBES DE ATARDECER
// =================================

const contenedorNubes =
    document.getElementById("clouds");

function crearNube() {

    const nube = document.createElement("div");

    nube.classList.add("cloud");

    nube.style.top =
        15 + Math.random() * 55 + "%";

    nube.style.width =
        220 + Math.random() * 350 + "px";

    nube.style.height =
        45 + Math.random() * 90 + "px";

    nube.style.animationDuration =
        35 + Math.random() * 45 + "s";

    nube.style.opacity =
        0.35 + Math.random() * 0.45;
// 🌅 Colores variados del atardecer

const tonosNube = [
    "255, 190, 120",
    "255, 125, 90",
    "218, 95, 105",
    "255, 215, 150"
];

const tono =
    tonosNube[
        Math.floor(Math.random() * tonosNube.length)
    ];

nube.style.background = `
    radial-gradient(
        ellipse at 50% 65%,
        rgba(${tono}, 0.45) 0%,
        rgba(${tono}, 0.25) 35%,
        transparent 75%
    )
`;

    contenedorNubes.appendChild(nube);
}

for (let i = 0; i < 7; i++) {
    crearNube();
}
// =================================
// ✨ POLVO DORADO
// =================================

const goldenDust =
    document.getElementById("goldenDust");

for (let i = 0; i < 65; i++) {

    const punto = document.createElement("div");

    punto.classList.add("sparkle");

    punto.style.left =
        Math.random() * 100 + "%";

    punto.style.top =
        Math.random() * 100 + "%";

    punto.style.animationDelay =
        Math.random() * 4 + "s";

    punto.style.animationDuration =
        2 + Math.random() * 4 + "s";

    goldenDust.appendChild(punto);
}
// =====================================
// 🌳 ÁRBOLES SECOS MÁS REALISTAS
// =====================================

const treeContainer = document.getElementById("trees");

const NS = "http://www.w3.org/2000/svg";

function crearArbol(lado) {

    const arbol = document.createElement("div");
    arbol.className = "dead-tree " + lado;

    const svg = document.createElementNS(NS, "svg");

    svg.setAttribute("viewBox", "0 0 500 800");
    svg.setAttribute("preserveAspectRatio", "xMidYMax meet");

    arbol.appendChild(svg);

    // Dibujar ramas naturales, gruesas en la base y finas en las puntas
    function rama(x, y, angulo, longitud, grosor, nivel) {

        if (nivel <= 0 || longitud < 5) return;

        const rad = angulo * Math.PI / 180;

        const curva = (Math.random() - 0.5) * longitud * 0.18;

        const x2 = x + Math.cos(rad) * longitud;
        const y2 = y + Math.sin(rad) * longitud;

        const cx = x + Math.cos(rad) * longitud * 0.5
            - Math.sin(rad) * curva;

        const cy = y + Math.sin(rad) * longitud * 0.5
            + Math.cos(rad) * curva;

        const camino = document.createElementNS(NS, "path");

        camino.setAttribute(
            "d",
            `M ${x} ${y} Q ${cx} ${cy} ${x2} ${y2}`
        );

        camino.setAttribute("fill", "none");
        camino.setAttribute("stroke", "#080609");
        camino.setAttribute("stroke-width", grosor);
        camino.setAttribute("stroke-linecap", "round");
        camino.setAttribute("stroke-linejoin", "round");

        svg.appendChild(camino);

        if (nivel > 1) {

            const variacion = Math.random() * 16;

            // Primera rama secundaria
            rama(
                x2,
                y2,
                angulo - 23 - variacion,
                longitud * 0.72,
                grosor * 0.68,
                nivel - 1
            );

            // Segunda rama secundaria
            rama(
                x2,
                y2,
                angulo + 25 + variacion,
                longitud * 0.66,
                grosor * 0.64,
                nivel - 1
            );

            // Tercera rama ocasional para dar volumen
            if (nivel >= 4 && Math.random() > 0.45) {

                rama(
                    x2,
                    y2,
                    angulo + (Math.random() - 0.5) * 20,
                    longitud * 0.70,
                    grosor * 0.52,
                    nivel - 1
                );
            }
        }
    }

    // TRONCO PRINCIPAL: alto y grueso
    rama(
        250,
        810,
        -90,
        175,
        43,
        7
    );

    // GRANDES RAMAS INFERIORES
    rama(250, 680, -150, 170, 28, 6);
    rama(250, 650, -30, 170, 28, 6);

    // GRANDES RAMAS INTERMEDIAS
    rama(230, 560, -125, 150, 21, 6);
    rama(270, 535, -55, 155, 21, 6);

    // RAMAS QUE SE EXTIENDEN HACIA EL CENTRO
    rama(220, 450, -105, 130, 15, 5);
    rama(280, 420, -75, 140, 15, 5);

    // COPA ALTA: RAMAS QUE FORMAN UN ARCO
    rama(235, 350, -100, 115, 11, 5);
    rama(265, 330, -80, 120, 11, 5);

    // PUNTAS SUPERIORES MÁS ABIERTAS
    rama(220, 280, -85, 90, 7, 4);
    rama(280, 260, -95, 90, 7, 4);

    // PUNTAS FINAS Y NATURALES
    rama(220, 280, -115, 75, 7, 4);
    rama(280, 260, -65, 80, 7, 4);

    rama(235, 220, -100, 60, 5, 4);
    rama(270, 205, -80, 65, 5, 4);

    // RAÍCES VISIBLES
    rama(250, 760, -155, 65, 15, 3);
    rama(250, 760, -25, 65, 15, 3);

    // SOMBRA DEL TRONCO PARA DAR PROFUNDIDAD
    const sombra = document.createElementNS(NS, "path");

    sombra.setAttribute(
        "d",
        "M 250 800 Q 225 650 250 510 Q 265 390 250 300"
    );

    sombra.setAttribute("fill", "none");
    sombra.setAttribute("stroke", "#030207");
    sombra.setAttribute("stroke-width", "13");
    sombra.setAttribute("stroke-linecap", "round");

    svg.appendChild(sombra);

    treeContainer.appendChild(arbol);
}

crearArbol("left");
crearArbol("right");
// ========================================
// 🌬️ VIENTO INTERACTIVO
// ========================================

let vientoX = 0;
let vientoObjetivo = 0;

let vientoY = 0;
let vientoObjetivoY = 0;

let ultimoMovimiento = 0;

// Detectar el movimiento del ratón
document.addEventListener("mousemove", function (evento) {

    const centroX = window.innerWidth / 2;

    const posicion =
        (evento.clientX - centroX) / centroX;

    vientoObjetivo = posicion * 180;

    vientoObjetivoY =
        (evento.clientY / window.innerHeight - 0.5) * 35;

    ultimoMovimiento = Date.now();

});

// Detectar el movimiento del dedo en móviles
document.addEventListener("touchmove", function (evento) {

    const toque = evento.touches[0];

    const centroX = window.innerWidth / 2;

    const posicion =
        (toque.clientX - centroX) / centroX;

    vientoObjetivo = posicion * 180;

    vientoObjetivoY =
        (toque.clientY / window.innerHeight - 0.5) * 35;

    ultimoMovimiento = Date.now();

}, { passive: true });

function animarViento() {

    // El viento vuelve a la calma cuando no hay movimiento
    if (Date.now() - ultimoMovimiento > 1200) {
        vientoObjetivo *= 0.96;
        vientoObjetivoY *= 0.96;
    }

    // Movimiento suave, sin saltos bruscos
    vientoX += (vientoObjetivo - vientoX) * 0.045;

    vientoY += (vientoObjetivoY - vientoY) * 0.045;

    document.documentElement.style.setProperty(
        "--vientoInteractivo",
        vientoX + "px"
    );

    document.documentElement.style.setProperty(
        "--vientoVertical",
        vientoY + "px"
    );

    requestAnimationFrame(animarViento);
}

animarViento();
	