// ==UserScript==
// @name         AllowAdBlockerOnLeFigaro
// @namespace    @ludovicm67
// @version      1.0.4
// @description  Let's allow AdBlocker on LeFigaro again !
// @author       @ludovicm67
// @include      *.lefigaro.fr/**
// @grant        none
// ==/UserScript==
'use strict';

// We remove all the warnings about the fact that we are using an AdBlocker
var warningMessages = document.querySelectorAll('a[href*="comment-desactiver-facilement-votre-bloqueur-de-publicites-sur-le-figarofr.php"]');
for(var i=0; i<warningMessages.length; i++) {
    warningMessages[i].style.display = 'none';
}

// We make the articles readable again (and without disabling the AdBlocker)
var blurredText = document.querySelectorAll('.fig-article-body');
for(var i=0; i<blurredText.length; i++) {
    blurredText[i].style.color = 'initial';
    blurredText[i].style.textShadow = 'none';
}

// We remove all the zone for ads
var adsZone = document.querySelectorAll('.fig-adgps, .pave-bg, .pub-carrousel-mini, .pub-zoom-react, .fig-gps-placeholder, .pub-zoom, .s24-shopping, .s24-art-pub-top, .s24-pub');
for(var i=0; i<adsZone.length; i++) {
    adsZone[i].style.display = 'none';
}
