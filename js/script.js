let vardas = "Aiste";
console.log(vardas);
vardas = "Auste";
console.log(vardas);
console.log(typeof vardas); // string - primityvaus kintamojo tipas

let amzius = 35;
console.log(typeof amzius); //number. Number nera lygu string
amzius = "35";
console.log(typeof amzius); // string

let amziusZodis = "35";
console.log(typeof amziusZodis); // string

let pilnametis = true;
let vaikas = false;
console.log(typeof pilnametis); // boolean
console.log(typeof vaikas); // boolean

let tusciaReiksme = null; //null
console.log(typeof tusciaReiksme); // object/null, tuscias
console.log(tusciaReiksme); // null

let nepriskirtaReiksme; //undefined
console.log(typeof nepriskirtaReiksme); // undefined
console.log(nepriskirtaReiksme); // undefined

console.log(1 + 1); // 2

let skaicius1 = 1;
let skaicius2 = 1;
console.log(skaicius1 === skaicius2); // true

let amziausMasyvas = [12, 15, 18, 4, 35, 31];
console.log(amziausMasyvas); // [12, 15, 18, 4, 35, 31]
console.log(typeof amziausMasyvas); // object
console.log(amziausMasyvas[0]); // 12
console.log(amziausMasyvas[1]); // 15
console.log(amziausMasyvas[2]); // 18
console.log(amziausMasyvas[3]); // 4
console.log(amziausMasyvas[4]); // 35
console.log(amziausMasyvas[5]); // 31
console.log(amziausMasyvas[6]); // undefined
console.log(amziausMasyvas.length); // 6

amziausMasyvas.push(45);
console.log(amziausMasyvas); // [12, 15, 18, 4, 35, 31, 45]
amziausMasyvas[1] = 100;
console.log(amziausMasyvas); // [12, 100, 18, 4, 35, 31, 45]
amziausMasyvas = [...amziausMasyvas, 45]; // [12, 100, 18, 4, 35, 31, 45, 45]
console.log(amziausMasyvas); // [12, 100, 18, 4, 35, 31, 45, 45]

//1 ===1 -> true
let arr = [1, 2];
let arr2 = [1, 2];
let arr3 = arr;
//let arr3 = [1, 2];
console.log(arr === arr2); // false - nes tai yra skirtingi objektai
console.log(arr3 === arr); // true - nes tai yra tas pats objektas

let asmuo = {
  vardas: "Aiste",
  "pilnas vardas": "Aiste K.",
};
let asmuo2 = {
  vardas: "Aiste",
  "pilnas vardas": "Aiste K.",
};
console.log(asmuo); // {vardas: "Aiste"}
console.log(asmuo.vardas); // Aiste
console.log(asmuo["vardas"]); // Aiste
console.log(asmuo["pilnas vardas"]); // Aiste K.
console.log(asmuo === asmuo2); // false - nes tai yra skirtingi objektai

console.log(1 + 1); // 2
console.log(2024 - 1989); // 35
console.log(2 / 2); // 1
console.log(2 * 2); // 4
console.log(2 * (2 + 2)); // 8

if (17 > 18) {
  console.log("Jūs pilnametis");
} else {
  console.log("Jūs nepilnametis");
}

let x = 2;
let y = 3;

console.log(x < 10 && y > 1); // true
console.log(x < 10 && y < 1); // false
console.log(x == 2 || y == 5); // true
console.log(!true); // false
console.log(!false); // true

console.log(document.getElementById("read-more-btn")); // <button id="read-more-btn">Read more</button>

const readMoreBtn = document.getElementById("read-more-btn");
console.log(readMoreBtn); // <button id="read-more-btn">Read more</button>

readMoreBtn.innerText = "Aiste"; // pakeicia mygtuko teksta i Aiste tik vaizde
readMoreBtn.innerHTML = "<p>Aiste 2</p>"; // pakeicia mygtuko teksta i Aiste 2 htmle
readMoreBtn.style.backgroundColor = "blue";
readMoreBtn.style.width = "500px";

let cardContentElements = document.getElementsByClassName("card__content");
console.log(cardContentElements);

let masyvas = [1, 2, 3, 4];
// pirmas budas
for (let i = 0; i < cardContentElements.length; i++) {
  let newPrimaryBtn = document.createElement("a");
  newPrimaryBtn.textContent = `Read more ${i}`;
  newPrimaryBtn.href = "https://www.google.com";
  newPrimaryBtn.classList.add("btn-primary");
  newPrimaryBtn.id = `new-read-more-btn-${i}`;

  console.log(newPrimaryBtn);
  cardContentElements[i].appendChild(newPrimaryBtn);
}
//antras budas, bet dar reikia papildyti
masyvas.forEach((elementas, indexas) => {
  console.log(`masyvo reiksme yra ${elementas} ir jo indexas - ${indexas}`);
});
//pirmas budas
pasveikinimas("Jonas", "Jonaitis", 35);
pasveikinimas("Jone", "Jonaite", 36);
pasveikinimas("Jonyte", "Jonaityte", 4);
function pasveikinimas(vardas, pavarde, amzius) {
  console.log(`Labas vakaras ${vardas} ${pavarde} man yra ${amzius} metai`);
}

//antras budas. Tokios funkcijos turetu buti kodo virsuje
const sudetiDviReiksmes = function (skaicius1, skaicius2) {
  console.log(skaicius1 + skaicius2);
};
sudetiDviReiksmes(2, 5);
sudetiDviReiksmes(4, 5);

(function () {
  console.log(`Kodas is 141 eilutes buvo ivykdytas`);
})();

const contactUsBtn = document.getElementById("contact-us-btn");
console.log(contactUsBtn);
contactUsBtn.addEventListener("mouseover", function () {
  alert("Mygtukas paspaustas");
});

// document.addEventListener("keydown", function (event) {
//   console.log(event.key);
//   if (event.key === "d") {
//     alert("Labas Aiste");
//   }
// });

const tekstinisLaukas = document.getElementById("tekstinis-laukas");
const tekstinioLaukoReiksme = document.getElementById(
  "tekstinio-lauko-reiksme"
);
// tekstinisLaukas.addEventListener("blur", function () {
//   console.log(tekstinisLaukas.value);
//   tekstinioLaukoReiksme.textContent = tekstinisLaukas.value;
// });

const forma = document.getElementById("forma");
forma.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(tekstinisLaukas.value);
  if (tekstinisLaukas.value.trim()) {
    tekstinioLaukoReiksme.textContent = "Forma validi";
    tekstinioLaukoReiksme.style.color = "green";

    setTimeout(function () {
      window.location.href = "https://google.lt"; //galetu buti padekos forma, aciu kad uzpildete
    }, 3000);
  } else {
    tekstinioLaukoReiksme.textContent = "Forma nevalidi";
    tekstinioLaukoReiksme.style.color = "red";
  }
});
