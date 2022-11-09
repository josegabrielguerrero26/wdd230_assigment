//ad buttom 

let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.querySelector("#lastModified").textContent= dateTime;

const today= new Date();
console.log(today);

  const dayNumber = today.getDay();
  console.log(dayNumber);

  const element=document.getElementById("joinus");

  if (dayNumber==1){
    element.classList.add("showme");
  }
  else if(dayNumber==2){
    element.classList.add("showme");
  }
  else{
    element.classList.add("hide");
  }
