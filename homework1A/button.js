/*Stephen Shaw
  sshaw7@my.smccd.edu
  CIS 128
  homework 1
  button.js
  January 31, 2019
*/

/*"use strict";*/
$(document).ready(function() {
	$("#button1").click(function() {
		$("h1").animate( 
		{ fontSize: "38px" }, 2000)
		.animate( 
		{ fontSize: "28px" }, 3000, function(){
	        $("#pic").animate(
		      { borderWidth: "2px" }, "fast");
		      $("h1").css("color", "rgb(0, 0, 179)");
		    });  
	});
 });
 