//ad buttom 
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
