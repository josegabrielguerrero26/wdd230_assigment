document.getElementById("mybtn").addEventListener("click",function (){
    let mycup = document.getElementById("theitem").value;
    console.log(mycup)

    if (mycup!=="") {
        //create button X
        const newBTN = document.createElement("button");
        newBTN.innerHTML="\u274C";

        // create a list with the lli
        const newLI= document.createElement("li");
        newLI.textContent=mycup;
        newLI.appendChild(newBTN);
        document.getElementById("favs").appendChild(newLI);
        document.getElementById("theitem").value="";
        
        //remove element with X buttom
        newBTN.addEventListener('click', function () {
        document.getElementById("favs").removeChild(newLI);
        newLI.removeChild(newBTN)});
            
    }// end of if

});