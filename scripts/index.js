// select all address-details and add click listener to them
const addressesLinks = document.querySelectorAll('.js-address');


addressesLinks.forEach(block => block.addEventListener("click", function(event){
    event.preventDefault()
})); //prevents from moving page up upon click on a link
addressesLinks.forEach(block => block.addEventListener('click', toggleHidden));


// show and hide address-details on click

function toggleHidden () {

const addressDetails = this.nextElementSibling;
const address = this;
address.classList.toggle('active');
addressDetails.classList.toggle('hidden');

}
