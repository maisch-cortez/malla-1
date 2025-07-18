
const malla = {
  nodes: [
    { id: "topicos", name: "Tópicos de Neurobiología" },
    { id: "procesos", name: "Procesos Psicológicos y Neurociencias" },
    { id: "ingles1", name: "Inglés I" },
    { id: "ingles2", name: "Inglés II" },
    { id: "ingles3", name: "Inglés III" },
    { id: "ingles4", name: "Inglés IV" },
    { id: "comunicacion", name: "Habilidades Comunicativas" },
    { id: "tic", name: "Razonamiento Científico y TIC’s" },
    { id: "epistemologia", name: "Psicología y Epistemología" },
    { id: "inv1", name: "Investigación I" },
    { id: "inv2", name: "Investigación II" },
    { id: "taller1", name: "Taller Integración I" },
    { id: "taller2", name: "Taller Integración II" },
    { id: "psico1", name: "Psicoanálisis I" },
    { id: "psico2", name: "Psicoanálisis II" },
    { id: "des1", name: "Desarrollo I" },
    { id: "des2", name: "Desarrollo II" },
    { id: "tallerfinal", name: "Taller Final" }
  ],
  edges: [
    ["topicos", "procesos"],
    ["ingles1", "ingles2"],
    ["ingles2", "ingles3"],
    ["ingles3", "ingles4"],
    ["comunicacion", "tic"],
    ["epistemologia", "inv1"],
    ["inv1", "inv2"],
    ["inv2", "taller1"],
    ["taller1", "taller2"],
    ["psico1", "psico2"],
    ["psico1", "taller1"],
    ["des1", "des2"],
    ["des2", "tallerfinal"]
  ]
};

const state = {};
const contenedor = document.getElementById("malla");

malla.nodes.forEach(nodo => {
  state[nodo.id] = false;
  const div = document.createElement("div");
  div.className = "node locked";
  div.id = "nodo-" + nodo.id;
  div.textContent = nodo.name;
  div.addEventListener("click", () => toggle(nodo.id));
  contenedor.appendChild(div);
});

function toggle(id) {
  const dependeDe = malla.edges.filter(edge => edge[1] === id).map(edge => edge[0]);
  const habilitado = dependeDe.every(pre => state[pre]);
  if (dependeDe.length && !habilitado) return;

  state[id] = !state[id];
  const div = document.getElementById("nodo-" + id);
  div.classList.toggle("locked", !state[id]);
}
