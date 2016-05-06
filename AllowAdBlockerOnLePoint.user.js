// ==UserScript==
// @name         AllowAdBlockerOnLePoint
// @namespace    @ludovicm67
// @version      1.0.0
// @description  Let's allow AdBlocker on LePoint !
// @author       @ludovicm67
// @include      *.lepoint.fr/**
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    // We remove warnings about the fact that we are using an AdBlocker
    var noAdsZone = document.querySelector('a[href*="/html/infos"').parentNode;
    noAdsZone.parentNode.removeChild(noAdsZone);

})();
