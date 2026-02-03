function showSidebar() {
  const sidebar = document.querySelector(".navbar");
  let mena = document.querySelector(".menu-button");
  sidebar.style.display = "flex";
  mena.style.display = "none";
}

function hideSidebar() {
  const sidebar = document.querySelector(".navbar");
  let mena = document.querySelector(".menu-button");
  sidebar.style.display = "none";
  mena.style.display = "flex";
}

const texto_type = ["Dark Css", "Dev Fontend", "UI Designer"];

let t = 0,
  c = 0,
  del = false;

const digito = document.querySelector(".digito");

setInterval(() => {
  del ? c-- : c++;
  digito.textContent = texto_type[t].slice(0, c) + "|";
  if (c === texto_type[t].length + 1) del = true;
  if (c === 0 && del) {
    del = false;
    t = (t + 1) % texto_type.length;
  }
}, 140);
