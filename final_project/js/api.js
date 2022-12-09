const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
console.log(requestURL)
fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    populateSelectControls(jsonObject, '#fruit1');
    populateSelectControls(jsonObject, '#fruit2');
    populateSelectControls(jsonObject, '#fruit3');
  });

  function populateSelectControls(drinks) {
    let select = document.querySelector('#mlevel')
    for(let i in drinks) {
      let option =  document.createElement("option")
      option.innerHTML = drinks[i].name;
      option.value = drinks[i].name;
      select.appendChild(option);
    }
    select.selectedIndex = -1;
    
  }