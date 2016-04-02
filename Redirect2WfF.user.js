// ==UserScript==
// @name         Redirect2WfF
// @namespace    @ludovicm67
// @version      1.0.0
// @description  Redirect to WorldForFun
// @author       @ludovicm67
// @include      *.youtube.com/watch*
// @include      *.dailymotion.com/video/*
// @grant        none
// ==/UserScript==
'use strict';

var url = location.href;
var hostname = location.hostname;
var wffDomainUrl = "http://www.world-for-fun.com/";

if(hostname == 'www.youtube.com') {
    var match = url.match("v=([a-zA-Z0-9\_\-]+)&?");
    if(match.length == 2) {
        location.href = wffDomainUrl + "video/youtube/" + match[1];
    }
}
else if(hostname == 'www.dailymotion.com') {
    var match = url.match("dailymotion.com/video/([a-zA-Z0-9]+)");
    if(match.length == 2) {
        location.href = wffDomainUrl + "video/dailymotion/" + match[1];
    }
}
