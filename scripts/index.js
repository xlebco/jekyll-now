// select all address-details and add click listener to them
var addressesLinks = document.querySelectorAll('.js-address');
var addressDetailsBlocks = document.querySelectorAll('.js-address-details');


// show and hide address-details on click
addressesLinks.forEach(function (block) {
  block.addEventListener('click', toggleHidden);});

function toggleHidden() {

  event.preventDefault();
  removeAll();
  var addressDetails = this.nextElementSibling;
  var address = this;
  address.classList.toggle('active');
  addressDetails.classList.toggle('hidden');

}

// remove active class from all links
//add hidden class to all address-details

function removeAll () {

  addressesLinks.forEach(function(link){
    link.classList.remove('active');
  });
  addressDetailsBlocks.forEach(function(block){
    block.classList.add('hidden');
  });

}
