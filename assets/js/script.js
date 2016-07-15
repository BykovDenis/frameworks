'use strict';

(()=>{
  var SVG = () => {

    return {
      getSVG: () => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
          console.log(xhr.responseText);
          document.getElementById("svg").innerHTML = xhr.responseText;
        }
        xhr.open('GET','../img/bg-hit.svg');
        xhr.send(null);
      },
      getSVGSprite: () => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
          console.log(xhr.responseText);
          document.getElementById("svg").innerHTML = xhr.responseText;
        }
        xhr.open('GET','../img/sprite.svg/sprite.svg');
        xhr.send(null);
      }
    }
  };


  //console.log(SVG().getSVG());
  console.log(SVG().getSVGSprite());
  //console.log(SVG.sum(4,3));

})();
