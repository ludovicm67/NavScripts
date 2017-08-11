// ==UserScript==
// @name         LePoint
// @namespace    @ludovicm67
// @version      1.0.6
// @description  Let's allow AdBlocker on LePoint !
// @author       @ludovicm67
// @include      *.lepoint.fr/**
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    // We remove warnings about the fact that we are using an AdBlocker
    if (document.querySelector('a[href*="/html/infos"]')) {
        var noAdsZone = document.querySelector('a[href*="/html/infos"]').parentNode;
        noAdsZone.parentNode.removeChild(noAdsZone);
    }

    // We remove most of zones for ads, ...
    var adsZone = document.querySelectorAll('.footer-market, .button-type, .bg-yellow, .bandeau-cookies, .art-social, .btn-open-menu, .like-aside-left');
    for (var i=0; i < adsZone.length; i++) {
        adsZone[i].parentNode.removeChild(adsZone[i]);
    }

    // We insert some images
    var imgs = document.querySelectorAll('img[data-src]');
    for (i = 0; i < imgs.length; i++) {
        var imgParent = imgs[i].parentNode;
        imgParent.classList.remove('image-wrap');
        imgParent.style.paddingBottom = '0';
        imgs[i].src = imgs[i].dataset.src;
    }

    // We remove comments section
    var coms = document.getElementById('section-commentaires');
    coms.parentNode.removeChild(coms);

    // Justify the content
    var content = document.querySelectorAll('.art-text');
    for (i = 0; i < content.length; i++) {
        content[i].style.textAlign = 'justify';
    }

})();
