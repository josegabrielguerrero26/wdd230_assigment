// hamburger botton

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  document.getElementById('currentdate').textContent = new Date(). toLocaleDateString('en-US', options);   
} catch (e) {
  alert('Error with code or your browser does not support Locate');
}


