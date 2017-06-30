setInterval(function(){
  var related = document.querySelector('#related');
	if ( related == null ) {
		console.log("not loaded yet");
		return;
	}
  else {
    console.log("removed related");
    related.innerHTML = '';
    return;
  }
}, 1000);


// var eradicateRetry = setInterval(function(){
// 		if ( ! isEnabled() ) {
// 			return;
// 		}
//
// 		// Don't do anything if the FB UI hasn't loaded yet
// 		var streamContainer = document.getElementById('stream_pagelet');
// 		if ( streamContainer == null ) {
//
// 			return;
// 		}
//
// 		removeNewsFeed();
//
// 		// Add News Feed Eradicator quote/info panel
// 		if ( ! isAlreadyInjected() ) {
// 			injectUI( streamContainer );
// 		}
// }, 1000);
