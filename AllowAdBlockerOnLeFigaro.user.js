// ==UserScript==
// @name         AllowAdBlockerOnLeFigaro
// @namespace    @ludovicm67
// @version      1.0.8
// @description  Let's allow AdBlocker on LeFigaro again !
// @author       @ludovicm67
// @include      *.lefigaro.fr/**
// @grant        none
// ==/UserScript==
'use strict';

// We remove warnings about the fact that we are using an AdBlocker
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

// We remove most of zones for ads
var adsZone = document.querySelectorAll('.fig-col--pub, .fig-premium-abo, .fig-adgps, .pave-bg, .pub-carrousel-mini, .pub-zoom-react, .fig-gps-placeholder, .pub-zoom, .s24-shopping, .s24-art-pub-top, .s24-pub, .fig-promo, .mad__shoppingbox, .mad__market__droit.mad__market__droit__article, .pane-bloc-ad, .pub-icone, .fig-ad, .OUTBRAIN, .tvm-ad');
for(var i=0; i<adsZone.length; i++) {
    adsZone[i].style.display = 'none';
}

// We adjusts some elements width
var elW = document.querySelectorAll('.fig-art-col-left, .fig-col--comments');
for(var i=0; i<elW.length; i++) {
    elW[i].style.width = 'auto';
}
