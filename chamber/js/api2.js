const URL = "https://josegabrielguerrero26.github.io/wdd230_assigment/chamber/JSON/dire.json";


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("cards");

function buildBusinessCards(info, type) {
  let data = info.businesses;
  data.forEach((business) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let h1 = document.createElement("p");
    let ceo = document.createElement('p');
    let mainb = document.createElement('p');
    let ratings=document.createElement('p');
    let email=document.createElement('p');
    let image = document.createElement('img');

    card.setAttribute("id", "section");
    h2.textContent =  ' Name: ' + business.name;
    h1.textContent='Headcount: ' + business.numberofemployees;
    ceo.textContent = 'CEO Name: ' + business.ceo;
    mainb.textContent = 'Industry: ' + business.mainbusiness;
    ratings.textContent='Ratings: ' + business.ratings;
    email.textContent='Email: '+ business.website
    
    

    if (type == "grid") {
      let img = document.createElement("img");
      img.setAttribute("src", `${business.filepath}`);
      img.setAttribute("alt", `${business.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);
      card.appendChild(h2);
      card.appendChild(h1);
      card.appendChild(ceo);
      card.appendChild(email);
    } else {
      card.append(h2);
      card.appendChild(mainb);
      card.appendChild(ratings);
      card.appendChild(ceo);
      card.appendChild(email)
    }

    display.classList.add(type);
    display.append(card);
  });
}

async function getBusinesses(type) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}

function deleteItems() {
  for (let i = 0; i < 10; i++) {
    document.getElementById("section").remove();
  }
}

getBusinesses("grid");

gridbutton.addEventListener("click", () => {
  if (display.classList.value == "cards list") {
    deleteItems();
    display.classList.remove("list");
    getBusinesses("grid");
  }
});

listbutton.addEventListener("click", () => {
  if (display.classList.value == "cards grid") {
    deleteItems();
    display.classList.remove("grid");
    getBusinesses("list");
  }
});