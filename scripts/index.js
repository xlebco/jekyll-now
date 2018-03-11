// Address
(function(){
  // select all address-details and add click listener to them
  var addressesLinks = document.querySelectorAll('.js-address');
  var addressDetailsBlocks = document.querySelectorAll('.js-address-details');

  // show and hide address-details on click

  function toggleHidden (event) {

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

  addressesLinks.forEach(function (block) {
    block.addEventListener('click', toggleHidden);});

})();


// Logo
(function(){
  var logo = document.querySelector('.logo'),
    logoAnd = logo.querySelector('.logo-and');

  window.onload = function(){
    document.documentElement.classList.add('is-loaded');
  };
})();


// Background Video
(function(){
  var isMobileOrTablet = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  var supportVideoType = function(type){
    var video = document.createElement('video');

    var formats = {
      mpeg4: 'video/mp4; codecs="mp4v.20.8"',
      h264: 'video/mp4; codecs="avc1.42E01E"',
      ogg: 'video/ogg; codecs="theora"',
      webm: 'video/webm; codecs="vp8, vorbis"'
    };

    return '' !== video.canPlayType(formats[type] || type);
  }

  var asyncLoadBgVideo = function(type){
    var bgVideo = document.querySelector('.bg-video'),
      video = bgVideo.querySelector('video'),
      src = bgVideo.getAttribute('data-src-' + type);

    var request = new XMLHttpRequest();

    request.open('GET', src, true);
    request.responseType = 'blob';

    request.onload = function(){
      if (this.status === 200) {
        var videoBlob = this.response,
          videoSrc = URL.createObjectURL(videoBlob); // IE10+

        video.src = videoSrc;
      }
    }

    request.onerror = function(){
      video.style.display = 'none';
    }

    request.send();
  }

  if (!isMobileOrTablet) {
    if (supportVideoType('mpeg4') || supportVideoType('h264')) {
      asyncLoadBgVideo('mp4');
    } else if (supportVideoType('ogg')) {
      asyncLoadBgVideo('ogg');
    } else if (supportVideoType('webm')) {
      asyncLoadBgVideo('webm');
    }
  }
})();