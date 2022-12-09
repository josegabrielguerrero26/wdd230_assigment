
var nextStep = document.querySelector('#btnSend');

nextStep.addEventListener('click', function (e) {
  e.preventDefault();
  // Hide first view
  document.getElementById('form-drink').style.display = 'none';
  document.getElementById('btnSend').style.display = 'none';


  // Show thank you message element
  document.getElementById('thank_you').style.display = 'block';
});
