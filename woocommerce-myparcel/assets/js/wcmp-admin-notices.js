!function n(i,o,u){function c(r,e){if(!o[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(s)return s(r,!0);throw(e=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",e}t=o[r]={exports:{}},i[r][0].call(t.exports,function(e){return c(i[r][1][e]||e)},t,t.exports,n,i,o,u)}return o[r].exports}for(var s="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,r,t){"use strict";jQuery(function(r){r(document).on("click",".myparcel-dismiss-notice .notice-dismiss",function(e){e={action:"dismissNotice",messageid:e.target.parentNode.getAttribute("data-messageid")||null,security:wcmp_params.nonce};r.post(wcmp_params.ajax_url,e)})})},{}]},{},[1]);
//# sourceMappingURL=source-maps/wcmp-admin-notices.js.map
