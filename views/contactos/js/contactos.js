/* Js para contacros */

/* 
╭━━━╮╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╭╯╰┳╮
┃┃╱╰╋━━┳━┻╮╭┻╋━━╮
┃┃╭━┫╭╮┃╭╮┃┃╭┫╭╮┃
┃╰┻━┃╰╯┃╭╮┃╰┫┃╭╮┃
╰━━━┻━━┻╯╰┻━┫┣╯╰╯
╱╱╱╱╱╱╱╱╱╱╱╭╯┃
╱╱╱╱╱╱╱╱╱╱╱╰━╯
*/

/* Obtencion de los ids del DOM */
const textoContenedor = document.getElementById("textoContenedor");

setTimeout(() => {
    textoContenedor.style.transform = "translateX(0)";
    textoContenedor.style.opacity = 1;
}, 500);

textoContenedor.innerHTML += `
    <h2 class='text-center pt-4 pb-4 text-wrap'>Calle roja, 56, C.P. 35.66 Corralejo.</h2>
    <h3 class='text-center pt-4 pb-4 text-wrap'>laboratorioHermanos@email.com</h3>
    <section id="redesSociales" class=' redesSociales text-center fs-3'>
        <a class='text-decoration-none m-4' href="https://www.instagram.com" target="_blank">
            <i class="bi bi-instagram text-danger"></i>
        </a>
        <a class='text-decoration-none m-4' href="https://www.facebook.com" target="_blank">    
            <i class="bi bi-facebook"></i>
        </a>    
    </section>
`;

// Crea y agrega el icono de TikTok
const redesSociales = document.getElementById('redesSociales');
const tiktokAnchor = document.createElement('a');
tiktokAnchor.href = 'https://www.tiktok.com';
tiktokAnchor.target = '_blank';
tiktokAnchor.className = 'text-decoration-none m-4';

const tiktokIcon = document.createElement('i');
tiktokIcon.className = 'bi bi-tiktok text-dark';

tiktokAnchor.appendChild(tiktokIcon);
redesSociales.appendChild(tiktokAnchor);