// ==UserScript==
// @name         Seizure
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://tools.is.oregonstate.edu/reftool2/*
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    var count = 0;
    document.onmousemove = function(){
    	count++;
    	if(count == 50) {
    		count = 0;
			var styleElement = document.getElementById("style-js");
			var r = Math.floor(Math.random() * 256);
	    	var g = Math.floor(Math.random() * 256);
	    	var b = Math.floor(Math.random() * 256);
	    	var text = "body, a, button {color: rgb(" + r + "," + g + "," + b + ") !important;}";
	    	if(!styleElement){
	    		styleElement = document.createElement("style");
	    		styleElement.type = "text/css";
	    		styleElement.id = "style-js";
				document.getElementsByTagName('head')[0].appendChild(styleElement);
	    	}
			styleElement.innerHTML = text;
    	}  
    };
})();