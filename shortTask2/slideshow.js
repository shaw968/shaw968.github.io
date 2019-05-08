/*  Stephen Shaw
    sshaw7@my.smccd.edu
	CIS 114 OL
	slideshow.js
	Midterm 1
	02/28/2018
*/


"use strict";
var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    var imageCache = [];
    var imageCounter = 0;
    var timer;
    
	var runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $("image").src = image.src;
    $("caption").firstChild.nodeValue = image.title;
    };
	
    var listNode = $("image_list");    // the ul element
    var links = listNode.getElementsByTagName("a");
    
	// Preload image, copy title properties, and store in array
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
    }
	
    // Attach start and pause event handlers
    $("start").onclick = function() {
		runSlideShow();
        timer = setInterval(runSlideShow, 3000);
		$("start").disabled = true;
		$("pause").disabled = false;
		$("previous").disabled = true;
		$("next").disabled = true;
	};
	
    $("pause").onclick = function() {
        clearInterval(timer);
		$("pause").disabled = true;
		$("start").disabled = false;
		if (imageCounter == 0) {
		    $("previous").disabled = true;
	    } else {$("previous").disabled = false;}
	    if (imageCounter == imageCache.length - 1) {
		    $("next").disabled = true;
	    } else {$("next").disabled = false;}
	};
	
	$("previous").onclick = function() {
		$("next").disabled = false;
		imageCounter = (imageCounter - 1) % imageCache.length;
        var image = imageCache[imageCounter];
        $("image").src = image.src;
        $("caption").firstChild.nodeValue = image.title;
		if (imageCounter == 0) {
			$("previous").disabled = true;
		}
	}
	
	$("next").onclick = function() {
		$("previous").disabled = false;
		imageCounter = (imageCounter + 1) % imageCache.length;
        var image = imageCache[imageCounter];
        $("image").src = image.src;
        $("caption").firstChild.nodeValue = image.title;
		if (imageCounter == imageCache.length - 1) {
		   $("next").disabled = true;
		}  
	};
};
