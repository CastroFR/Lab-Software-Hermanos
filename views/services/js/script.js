// Lista inicial de servicios del laboratorio
const servicios = [
  "Análisis de sangre",
  "Pruebas de orina",
  "Pruebas de glucosa",
  "Examen de colesterol"
];

// Referencias al DOM
const listaServicios = document.getElementById("lista-servicios");
const botonAgregar = document.getElementById("agregar-servicio");

// Mostrar servicios al cargar
servicios.forEach(servicio => {
  const li = document.createElement("li");
  li.textContent = servicio;
  listaServicios.appendChild(li);
});

// Evento: agregar nuevo servicio al hacer clic
botonAgregar.addEventListener("click", () => {
  const nuevoServicio = prompt("Escribe el nombre del nuevo servicio:");
  if (nuevoServicio && nuevoServicio.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = nuevoServicio.trim();
    listaServicios.appendChild(li);
  } else {
    alert("Por favor, escribe un nombre válido.");
  }
});
