/*  Stephen Shaw
    sshaw7@my.smccd.edu
	CIS 128
	sw.js
	Homework 4 part 2
	04/13/2019
*/
var cacheVersion = "ver-1";
var cachedFiles = ["index.html", "style.css", "manifest.json", "images/lightblue.jpg", "images/lightgold.jpg", "images/downArrow.png", "images/margarita.png"];


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
			caches.match(event.request));
	)
}

