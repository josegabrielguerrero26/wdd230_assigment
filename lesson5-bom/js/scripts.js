document.getElementById("submit").addEventListener("click",function (){
    let mycup = document.getElementById("favchap").value;
    console.log(mycup)

    if (mycup!=="") {
        //create button X
        const newBTN = document.createElement("button");
        newBTN.innerHTML="\u274C";

        //input variable
        const input=document.querySelector('input');
        input.value = "";
        
        // create a list with the lli
        const newLI= document.createElement("li");
        newLI.textContent=mycup;
        newLI.appendChild(newBTN);
        document.getElementById("list").appendChild(newLI);
        document.getElementById("favchap").value="";
        
        //remove element with X buttom
        newBTN.addEventListener('click', function () {
        document.getElementById("list").removeChild(newLI);
        newLI.removeChild(newBTN)});
        input.focus();
    }// end of if
 
});
