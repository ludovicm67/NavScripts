// ==UserScript==
// @name         AllowAdBlockerOnLePoint
// @namespace    @ludovicm67
// @version      1.0.1
// @description  Let's allow AdBlocker on LePoint !
// @author       @ludovicm67
// @include      *.lepoint.fr/**
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    // We remove warnings about the fact that we are using an AdBlocker
    var noAdsZone = document.querySelector('a[href*="/html/infos"]').parentNode;
    noAdsZone.parentNode.removeChild(noAdsZone);
    
    // We remove most of zones for ads, ...
    var adsZone = document.querySelectorAll('.footer-market, .button-type, .bg-yellow');
    for(var i=0; i<adsZone.length; i++) {
        adsZone[i].style.display = 'none';
    }

})();
