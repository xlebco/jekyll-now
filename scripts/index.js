// select all address-details and add click listener to them
var addressesLinks = document.querySelectorAll('.js-address');


addressesLinks.forEach(function (block) {
  block.addEventListener("click", function(event){
    //prevents from moving page up upon click on a link
    event.preventDefault();
}
);} );
addressesLinks.forEach(function (block) {
  block.addEventListener('click', toggleHidden);});


// show and hide address-details on click

function toggleHidden () {

var addressDetails = this.nextElementSibling;
var address = this;
address.classList.toggle('active');
addressDetails.classList.toggle('hidden');

}
