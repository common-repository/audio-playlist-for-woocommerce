(()=>{"use strict";(()=>{const e=e=>`${e.charAt(0).toLowerCase()}${e.replace(/[\W_]/g,"|").split("|").map((e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`)).join("").slice(1)}`;function a(e){for(var a=e+"=",l=decodeURIComponent(document.cookie).split(";"),i=0;i<l.length;i++){for(var t=l[i];" "===t.charAt(0);)t=t.substring(1);if(0===t.indexOf(a))return t.substring(a.length,t.length)}return""}function l(e,a,l){var i=new Date;i.setTime(i.getTime()+24*l*60*60*1e3);var t="expires="+i.toUTCString();document.cookie=e+"="+a+";"+t+";path=/"}const i={common:{init(){!function(e){function i(e){var a,l;return(a=(a=Math.floor(e/60))>=10?a:"0"+a)+":"+((l=Math.floor(e%60))>=10?l:"0"+l)}function t(e,a){return Math.floor(100*e/a)}function r(e,a){return Math.floor(e*a/100)}e((function(){let l=e("#sirvelia-player audio")[0];l.onloadedmetadata=function(){let i=a("sirvelia-player-time");i&&(l.currentTime=i,e("#playlist-time-range").val(t(i,l.duration)));let r=a("sirvelia-player-volume");r&&(l.volume=r,e("#playlist-volume-range").val(100*r));let s=a("sirvelia-player-play");if(s&&"true"==s){let a=l.play();void 0!==a&&a.then((a=>{e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-block")})).catch((e=>{}))}}}));let s=!1;e("#sirvelia-player audio").on("timeupdate",(function(a){if(!s){var r=e(this)[0];0!==r.currentTime?(e(".current-time").html(i(r.currentTime)),e("#playlist-time-range").val(t(r.currentTime,r.duration))):(e(".current-time").html("00:00"),e("#playlist-time-range").val(0));let a=[];e("#sirvelia-player .player-playlist").children().each((function(){let l=e(this).find(".song-title").html(),i=e(this).find("a.song").attr("href"),t=e(this).find("a.view-song").attr("href"),r={title:l,url:i,isActive:e(this).hasClass("active"),productUrl:t};a.push(r)}));var p=JSON.stringify(a);l("sirvelia-player-time",r.currentTime,1),l("sirvelia-player-volume",r.volume,1),l("sirvelia-player-play",!r.paused,1),l("sirvelia-player-playlist",p,1)}})),e("#playlist-time-range").on("mousedown",(function(a){let l=e("#sirvelia-player audio");l.attr("src")&&l[0].pause(),s=!0})),e("#playlist-time-range").on("mousemove",(function(a){let l=e("#sirvelia-player audio");if(s&&l.attr("src")){let a=r(e(this).val(),l[0].duration);0!==a?e(".current-time").html(i(a)):e(".current-time").html("00:00")}})),e("#playlist-time-range").on("mouseup",(function(a){var l=e("#sirvelia-player audio");l.attr("src")&&((l=l[0]).currentTime=r(e(this).val(),l.duration),l.play(),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-block")),s=!1})),e("#playlist-volume-range").on("mousemove",(function(a){var l=e("#sirvelia-player audio");l.attr("src")&&((l=l[0]).volume=e(this).val()/100)})),e("#playlist-volume-range").on("mouseup",(function(a){l("sirvelia-player-volume",e("#sirvelia-player audio")[0].volume,1)})),e("#sirvelia-player .showHide-btn").on("click",(function(a){var l=e(this);a.preventDefault(),e("#sirvelia-player .playlist-wrapper").toggle(),l.text(e.trim(l.text())===AudioPlaylistForWoocommerceStrings.open_playlist+" ▲"?AudioPlaylistForWoocommerceStrings.close_playlist+" ▼":AudioPlaylistForWoocommerceStrings.open_playlist+" ▲")})),e("#sirvelia-player .previous-btn").on("click",(function(a){a.preventDefault();var l=e("#sirvelia-player #player-audio");if(l.attr("src")){var i=e("#sirvelia-player .playlist-item.active"),t=i.prev();0===t.length&&(t=i.siblings(":last"));var r=t.find("a.song").attr("href");return e("#sirvelia-player .current-song").html(t.find(".song-title").html()),l.attr("src",r),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-block"),i.removeClass("active"),t.addClass("active"),l[0].paused?l[0].play():l[0].currentTime=0}})),e("#sirvelia-player .next-btn").on("click",(function(a){a.preventDefault();var l=e("#sirvelia-player #player-audio");if(l.attr("src")){var i=e("#sirvelia-player .playlist-item.active"),t=i.next();0===t.length&&(t=i.siblings(":first"));var r=t.find("a.song").attr("href");return e("#sirvelia-player .current-song").html(t.find(".song-title").html()),l.attr("src",r),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-block"),i.removeClass("active"),t.addClass("active"),l[0].paused?l[0].play():l[0].currentTime=0}})),e("#sirvelia-player #player-audio").on("ended",(function(a){a.preventDefault();var i=e(this),t=e("#sirvelia-player .playlist-item.active"),r=t.next(),s=!1;0===r.length&&(0===(r=t.siblings(":first")).length&&(r=t),s=!0);var p=r.find("a.song").attr("href");e("#sirvelia-player .current-song").html(r.find(".song-title").html()),i.attr("src",p),t.removeClass("active"),r.addClass("active"),s?(e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-block"),e("#playlist-time-range").val(0),l("sirvelia-player-play",!1,1)):(e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-block"),i[0].currentTime=0,i[0].play(),e("#playlist-time-range").val(0))})),e("#sirvelia-player").on("click",".playlist-item .remove-song",(function(a){a.preventDefault();let i=e(this).parent();if(i.hasClass("active")){let a=i.siblings(":first"),t=e("#sirvelia-player #player-audio");if(t[0].pause(),e("#playlist-time-range").val(0),0!==a.length){let l=a.find(".song-info a.song").attr("href");t.attr("src",l),a.addClass("active"),e("#sirvelia-player .current-song").html(a.find(".song-title").html()),e(".current-time").html("00:00"),e(".view-album").html(a.find(".view-song").html())}else t.attr("src",""),e("#sirvelia-player .current-song").html(""),e(".current-time").html(""),e(".view-album").html("");e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-block"),l("sirvelia-player-time",0,1),l("sirvelia-player-volume",0,1),l("sirvelia-player-play",!1,1)}i.remove();let t=[];e("#sirvelia-player .player-playlist").children().each((function(){let a=e(this).find(".song-title").html(),l=e(this).find("a.song").attr("href"),i=e(this).find("a.view-song").attr("href"),r={title:a,url:l,isActive:e(this).hasClass("active"),productUrl:i};t.push(r)})),l("sirvelia-player-playlist",JSON.stringify(t),1)})),e("#sirvelia-player").on("click",".playlist-item .song",(function(a){var l=e(this);a.preventDefault(),e("#sirvelia-player .current-song").html(l.find(".song-title").html());var i=e("#sirvelia-player #player-audio"),t=l.attr("href");return i.attr("src",t),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-block"),l.parents(".playlist-item").siblings().removeClass("active"),l.parents(".playlist-item").addClass("active"),i[0].paused?i[0].play():i[0].currentTime=0})),e("#sirvelia-player .playPause-btn").on("click",(function(a){a.preventDefault();var l=e("#sirvelia-player #player-audio");if(l.attr("src"))return e(this).find("svg").toggleClass("pb-block pb-hidden"),l[0].paused?l[0].play():l[0].pause()})),e("#sirvelia-player .remove-all").on("click",(function(a){a.preventDefault();var i=e("#sirvelia-player #player-audio");i[0].pause(),i.attr("src",""),e("#sirvelia-player .player-playlist").html(""),e("#playlist-time-range").val(0),e(".player-info .current-song").html(""),e(".player-info .current-time").html("00:00"),e(".player-info .view-album").html(""),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-block"),l("sirvelia-player-time",0,1),l("sirvelia-player-volume",0,1),l("sirvelia-player-play",!1,1),l("sirvelia-player-playlist",{},1)})),e(".add-product-playlist").on("click",(function(a){a.preventDefault();let l=e(this).data("json"),i=e("#sirvelia-player .player-playlist a.song"),t=[];i&&(t=i.map((function(){return e(this).attr("href")})).get()),e("#sirvelia-player .player-playlist .active").removeClass("active");for(let a=l.length-1;a>=0;a--){let i=l[a].url;-1===e.inArray(i,t)&&e("#sirvelia-player .player-playlist").prepend('<li class="playlist-item pb-flex pb-justify-between pb-items-center">\n              <span class="song-info pb-flex pb-items-center pb-gap-2 pb-border-b pb- pb-border-0 pb-border-b-gray-200">\n                <a class="song pb-text-white hover:pb-gray-200 pb-no-underline" href="'+i+'">\n                  <span class="song-title">'+l[a].title+'</span>\n                </a>\n                <a href="'+l[a].productUrl+'" class="view-song pb-text-white">'+AudioPlaylistForWoocommerceStrings.view+'</a>\n              </span>\n              <a href="#" title="'+AudioPlaylistForWoocommerceStrings.remove+'" class="remove-song pb-flex pb-text-white hover:pb-gray-200 pb-no-underline">\n                <svg class="pb-text-red-500 pb-w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path>\n                </svg>\n              </a>\n            </li>')}e("#sirvelia-player .player-playlist .playlist-item:first").addClass("active"),e("#sirvelia-player .current-song").html(l[0].title);let r=e("#sirvelia-player .view-album");r.length>0?(r.html("view"),r.attr("href",l[0].productUrl)):e("#sirvelia-player .player-info .info-data").append('<a href="'+l[0].productUrl+'" class="view-album">'+AudioPlaylistForWoocommerceStrings.view+"</a>"),e("#sirvelia-player .playPause-btn .apw-play-btn").removeClass("pb-block"),e("#sirvelia-player .playPause-btn .apw-play-btn").addClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").removeClass("pb-hidden"),e("#sirvelia-player .playPause-btn .apw-pause-btn").addClass("pb-block");var s=e("#sirvelia-player #player-audio");return s.attr("src",l[0].url),s[0].paused?s[0].play():s[0].currentTime=0}))}(jQuery)},finalize(){}}};window.addEventListener("DOMContentLoaded",(()=>new class{constructor(e){this.routes=e}fire(e,a="init",l){document.dispatchEvent(new CustomEvent("routed",{bubbles:!0,detail:{route:e,fn:a}})),""!==e&&this.routes[e]&&"function"==typeof this.routes[e][a]&&this.routes[e][a](l)}loadEvents(){this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(e).forEach((e=>{this.fire(e),this.fire(e,"finalize")}));var a=document.getElementsByClassName("plubo-shortcode");if(a.length>0)for(var l=0;l<a.length;l++)a[l].dataset.tag.toLowerCase().replace(/-/g,"_").split(/\s+/).map(e).forEach((e=>{this.fire(e),this.fire(e,"finalize")}));this.fire("common","finalize")}}(i).loadEvents()))})()})();