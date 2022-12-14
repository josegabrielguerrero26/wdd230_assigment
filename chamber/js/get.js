const URL = "https://josegabrielguerrero26.github.io/wdd230_assigment/chamber/JSON/dire.json";


const display = document.getElementById("spots");
function buildBusinessCards(info) {
  let data = info.businesses.filter((p) => p.membership == "Gold" || p.membership == "Silver");
  for (let i = 0; i <= 1; i++) {
    a=data.splice(Math.floor(Math.random() * data.length), 1);

};
  let num = 1;
  data.forEach((business) => {


    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let picture = document.createElement("picture");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let a = document.createElement("a");
 

    card.setAttribute("class", `section_spot${num}`);
    h2.innerHTML = `${business.name}`;
    h3.textContent = 'CEO: ' + business.ceo;
    a.innerHTML = `${business.website}`;


    a.setAttribute("href", `${business.website}`);
    img.setAttribute("src", `${business.filepath}`);
    img.setAttribute("alt", `${business.name}`);
    
    card.appendChild(h2);
    card.appendChild(picture);
    picture.appendChild(img);
    card.appendChild(h3);
    card.appendChild(a);
   

    display.append(card);
    num += 1;
  });
}

async function getBusinesses() {
    let response = await fetch(URL);
    if (response.ok) {
      let data = await response.json();
      buildBusinessCards(data);
    } else {
      throw Error(response.statusText);
    }
  }
  
  getBusinesses();