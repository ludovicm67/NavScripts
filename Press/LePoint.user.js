// ==UserScript==
// @name         LePoint
// @namespace    @ludovicm67
// @version      1.0.5
// @description  Let's allow AdBlocker on LePoint !
// @author       @ludovicm67
// @include      *.lepoint.fr/**
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    // We remove warnings about the fact that we are using an AdBlocker
    if(document.querySelector('a[href*="/html/infos"]')) {
        var noAdsZone = document.querySelector('a[href*="/html/infos"]').parentNode;
        noAdsZone.parentNode.removeChild(noAdsZone);
    }

    // We remove most of zones for ads, ...
    var adsZone = document.querySelectorAll('.footer-market, .button-type, .bg-yellow, .bandeau-cookies, .art-social, .btn-open-menu');
    for(var i=0; i<adsZone.length; i++) {
        adsZone[i].style.display = 'none';
    }

    // We insert some images
    var imgs = document.querySelectorAll('img[data-src]');
    for(i=0; i<imgs.length; i++) {
        imgs[i].parentNode.classList.remove('image-wrap');
        imgs[i].src = imgs[i].dataset.src;
    }

    // We remove comments section
    var coms = document.getElementById('section-commentaires');
    coms.parentNode.removeChild(coms);

})();
