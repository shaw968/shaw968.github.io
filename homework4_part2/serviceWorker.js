/*  Stephen Shaw
    sshaw7@my.smccd.edu
	CIS 128
	serviceWorker.js
	Homework 4 part 2
	04/13/2019
*/
var cacheVersion = "ver-1"
var cachedFiles = ["index.html", "style.css", "lightblue.jpg", "lightgold.jpg", "downArrow.png"]


self.oninstall = function(event) {
	console.log("installed");
	caches.open(cacheVersion).then(function(cache) {
	    cache.addAll(cachedFiles);
}

self.onactivate = function(event) {
	console.log("activated");
}

self.onfetch = function(event) {
	console.log("fetching");
	event.respondWith(
	    fetch(event.request).catch(function(caches){
			caches.match(event.request)
		})
	)
}

