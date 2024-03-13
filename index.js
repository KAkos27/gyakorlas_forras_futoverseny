import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

function letrehozTablazat() {
  const div = document.querySelector("#feladat_1");
  div.innerHTML += `<table></table>`;
  const tablazat = document.querySelector("#feladat_1 table");
  for (let i = 0; i < FUTOK.length; i++) {
    tablazat.innerHTML += `<tr><td>${FUTOK[i].nev}</td><td>${FUTOK[i].nemzetiseg}</td><td>${FUTOK[i].versenySzam}</td></tr>`;
  }
}

letrehozTablazat();

function osszesit() {
  let maratonOssz = 0;
  let felMaratonOssz = 0;
  let kmOssz = 0;
  for (let i = 0; i < FUTOK.length; i++) {
    if (FUTOK[i].versenySzam === "maraton") {
      maratonOssz++;
    } else if (FUTOK[i].versenySzam === "félmaraton") {
      felMaratonOssz++;
    } else {
      kmOssz++;
    }
  }
  const osszesito = document.querySelector("#feladat_2");
  osszesito.innerHTML += `<p>félmaraton: ${felMaratonOssz} db</p>`;
  osszesito.innerHTML += `<p>maraton: ${maratonOssz} db</p>`;
  osszesito.innerHTML += `<p>10 km: ${kmOssz} db</p>`;
}

osszesit();

function befutott() {
  const tablazat = document.querySelector("#feladat_3");
  const sorok = document.querySelectorAll("tr");
  sorok.forEach((sor, i) => {
    sor.addEventListener("click", () => {
      sor.className = "befutott";
      if (!befutottVersenyzok.includes(i)) {
        tablazat.innerHTML += `<tr><td>${FUTOK[i].nev}</td><td>${FUTOK[i].nemzetiseg}</td><td>${FUTOK[i].versenyIdo}</td></tr>`;
        befutottVersenyzok.push(i);
      }
      if (befutottVersenyzok.length === FUTOK.length) {
        alert("A verseny véget ért!");
      }
    });
  });

  const torolGomb = document.querySelector("button");
  torolGomb.addEventListener("click", () => {
    const befutottak = document.querySelectorAll(".befutott");
    befutottak.forEach((befutott) => {
      befutott.className = "";
    });
    tablazat.innerHTML = "";
    befutottVersenyzok.length = 0;
  });
}

befutott();
