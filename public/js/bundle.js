(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var SVG = function SVG() {

    return {
      getSVG: function getSVG() {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          console.log(xhr.responseText);
          document.getElementById("svg").innerHTML = xhr.responseText;
        };
        xhr.open('GET', '../img/bg-hit.svg');
        xhr.send(null);
      },
      getSVGSprite: function getSVGSprite() {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          console.log(xhr.responseText);
          document.getElementById("svg").innerHTML = xhr.responseText;
        };
        xhr.open('GET', '../img/sprite.svg/sprite.svg');
        xhr.send(null);
      }
    };
  };

  //console.log(SVG().getSVG());
  console.log(SVG().getSVGSprite());
  //console.log(SVG.sum(4,3));
})();

},{}],2:[function(require,module,exports){
//import React from 'react';
"use strict";

},{}]},{},[2,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxzY3JpcHQuanMiLCJhc3NldHNcXGpzeFxcYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLENBQUMsWUFBSTtBQUNILE1BQUksTUFBTSxTQUFOLEdBQU0sR0FBTTs7QUFFZCxXQUFPO0FBQ0wsY0FBUSxrQkFBTTtBQUNaLFlBQUksTUFBTSxJQUFJLGNBQUosRUFBVjtBQUNBLFlBQUksTUFBSixHQUFhLFlBQVU7QUFDckIsa0JBQVEsR0FBUixDQUFZLElBQUksWUFBaEI7QUFDQSxtQkFBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLFNBQS9CLEdBQTJDLElBQUksWUFBL0M7QUFDRCxTQUhEO0FBSUEsWUFBSSxJQUFKLENBQVMsS0FBVCxFQUFlLG1CQUFmO0FBQ0EsWUFBSSxJQUFKLENBQVMsSUFBVDtBQUNELE9BVEk7QUFVTCxvQkFBYyx3QkFBTTtBQUNsQixZQUFJLE1BQU0sSUFBSSxjQUFKLEVBQVY7QUFDQSxZQUFJLE1BQUosR0FBYSxZQUFVO0FBQ3JCLGtCQUFRLEdBQVIsQ0FBWSxJQUFJLFlBQWhCO0FBQ0EsbUJBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQixTQUEvQixHQUEyQyxJQUFJLFlBQS9DO0FBQ0QsU0FIRDtBQUlBLFlBQUksSUFBSixDQUFTLEtBQVQsRUFBZSw4QkFBZjtBQUNBLFlBQUksSUFBSixDQUFTLElBQVQ7QUFDRDtBQWxCSSxLQUFQO0FBb0JELEdBdEJEOztBQXlCQTtBQUNBLFVBQVEsR0FBUixDQUFZLE1BQU0sWUFBTixFQUFaO0FBQ0E7QUFFRCxDQTlCRDs7O0FDRkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuKCgpPT57XHJcbiAgdmFyIFNWRyA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXRTVkc6ICgpID0+IHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ZnXCIpLmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCcuLi9pbWcvYmctaGl0LnN2ZycpO1xyXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRTVkdTcHJpdGU6ICgpID0+IHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ZnXCIpLmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCcuLi9pbWcvc3ByaXRlLnN2Zy9zcHJpdGUuc3ZnJyk7XHJcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgLy9jb25zb2xlLmxvZyhTVkcoKS5nZXRTVkcoKSk7XHJcbiAgY29uc29sZS5sb2coU1ZHKCkuZ2V0U1ZHU3ByaXRlKCkpO1xyXG4gIC8vY29uc29sZS5sb2coU1ZHLnN1bSg0LDMpKTtcclxuXHJcbn0pKCk7XHJcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuIl19
