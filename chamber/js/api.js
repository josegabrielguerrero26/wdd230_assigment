
import companies from '../JSON/dire.json' assert{type: 'json'};
console.log(companies[0].ceo, companies[3].name)


const business = companies;
for (let i = 0; i < business.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h1 = document.createElement('p');
    let ceo = document.createElement('p');
    let mainb = document.createElement('p');
    let ratings=document.createElement('p');
    let email=document.createElement('p');
    let image = document.createElement('img');

    image.setAttribute('src', business[i].filepath);
    h2.textContent =  ' Name: ' + business[i].name ;
    h1.textContent='Headcount: ' + business[i].numberofemployees;
    ceo.textContent = 'CEO Name: ' + business[i].ceo;
    mainb.textContent = 'Industry: ' + business[i].mainbusiness;
    ratings.textContent='Ratings: ' + business[i].ratings;
    email.textContent='Email: '+ business[i].website
    image.setAttribute('loading', 'lazy');


    card.appendChild(h2);
    card.appendChild(h1);
    card.appendChild(ceo);
    card.appendChild(mainb);
    card.appendChild(ratings);
    card.appendChild(email)
    card.appendChild(image);
    document.querySelector('div.cards').appendChild(card);
  
    
} ;

