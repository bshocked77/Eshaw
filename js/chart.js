var c = document.getElementById("radarChart");
var ctx = c.getContext("2d");

function addLabels(){
  
}
function drawPentagon(){

    function pentagon(x, y, radius, rotation){
        for(var i = 0; i < 5; i ++){
            const ang = (i / 5) * Math.PI * 2 + rotation;
            ctx.lineTo(
                Math.cos(ang) * radius + x,
                Math.sin(ang) * radius + y
            );
         }
         ctx.closePath();
    }

    ctx.beginPath();
    pentagon(180,190,180,-Math.PI / 2);
    ctx.lineWidth = 2;
    ctx.stroke();

};


function drawGuidelines(){

      function guideLines(){
         var xCoords = [180, 350, 285, 75, 10];
         var yCoords = [10, 135, 335, 335, 135];

         for(var i = 0; i <= 4; i++){
          ctx.moveTo(180,190); // center start point
          var x = xCoords[i];
          var y = yCoords[i];
          ctx.lineTo(x,y);
         }
  }

  ctx.beginPath();
  guideLines();
  ctx.lineWidth = 2;
  ctx.stroke();

}
drawPentagon();
drawGuidelines();
addLabels();
