const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
console.log(fruit.json[0].name, fruit.json[0].id)
fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    populateSelectControls(jsonObject, '#fruit1');
    populateSelectControls(jsonObject, '#fruit2');
    populateSelectControls(jsonObject, '#fruit3');
  });

  function populateSelectControls(drinks, mlevel) {
    let select = document.querySelector(mlevel)
    for(let x in drinks) {
      let option =  document.createElement("option")
      option.innerHTML = drinks[x].name;
      option.value = drinks[x].name;
      select.appendChild(option);
    }
    select.selectedIndex = -1;
  }