// select all address-details and add click listener to them
var addressesLinks = document.querySelectorAll('.js-address');
var addressDetailsBlocks = document.querySelectorAll('.js-address-details');

// show and hide address-details on click
addressesLinks.forEach(function (block) {
  block.addEventListener('click', toggleHidden);});

function toggleHidden() {

  var address = this;
  var addressDetails = this.nextElementSibling;

  addressDetails.classList.add('js-current');

  event.preventDefault();


  removeAll();

  address.classList.toggle('active');
  addressDetails.classList.toggle('hidden');
  addressDetails.classList.remove('js-current');
}

// remove active class from all links
//add hidden class to all address-details

function removeAll () {

  addressesLinks.forEach(function(link){
    link.classList.remove('active');
  });
  addressDetailsBlocks.forEach(function(block){
    if (!block.classList.contains('js-current')){
      block.classList.add('hidden');
    }

  });

}
