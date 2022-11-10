
import companies from '../JSON/dire.json' assert{type: 'json'};
console.log(companies[0].ceo, companies[3].name)

const business = companies;
for (let i = 0; i < business.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let ceo = document.createElement('p');
    let mainb = document.createElement('p');
    let ratings=document.createElement('p');
    let image = document.createElement('img');

    image.setAttribute('src', business[i].filepath);
    h2.textContent = business[i].name + ' ' + business[i].numberofemployees;
    ceo.textContent = 'CEO Name: ' + business[i].ceo;
    mainb.textContent = 'Industry: ' + business[i].mainbusiness;
    ratings.textContent='Ratings: ' + business[i].ratings;
    image.setAttribute('loading', 'lazy');


    card.appendChild(h2);
    card.appendChild(ceo);
    card.appendChild(mainb);
    card.appendChild(ratings);
    card.appendChild(image);
    document.querySelector('div.cards').appendChild(card);
} ;