//ad buttom 

try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  document.getElementById('currentdate').textContent = new Date(). toLocaleDateString('en-US', options);   
} catch (e) {
  alert('Error with code or your browser does not support Locate');
}

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
  const element1=document.getElementById("joinus1");

  if (dayNumber==1){
    element.classList.add("showme");
    element1.classList.add("showme");
  }
  else if(dayNumber==2){
    element.classList.add("showme");
    element1.classList.add("showme");
  }
  else{
    element.classList.add("hide");
    element1.classList.add("showme");
  }
