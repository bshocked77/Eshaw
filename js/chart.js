var c = document.getElementById("radarChart");
var ctx = c.getContext("2d");

function drawChartArea(){
  ctx.beginPath();
  ctx.moveTo(205, 60); // HTML point
  ctx.lineTo(330, 165); // CSS point
  ctx.lineTo(270, 292); // GIT point
  ctx.lineTo(160, 270); // PHP point
  ctx.lineTo(90, 168); // JS point
  ctx.lineTo(205, 60); // Back to start

  ctx.lineWidth = 1.6;
  ctx.fillStyle = '#5a829a';
  ctx.fill();
  ctx.stroke();


}

function addLabels(){
  ctx.font = "18px lato, sans-serif";
  ctx.fillText("HTML", 180, 30);
  ctx.fillText("CSS", 360, 130);
  ctx.fillText("Javascript", 8, 120);
  ctx.fillText("PHP", 40, 340);
  ctx.fillText("GIT", 330, 340);
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
    pentagon(205,205,150,-Math.PI / 2);
    ctx.lineWidth = 2;
    ctx.stroke();

};


function drawGuidelines(){

      function guideLines(){
         var xCoords = [205, 348, 293, 117, 62];
         var yCoords = [55, 159, 325, 325, 158];

         for(var i = 0; i <= 4; i++){
          ctx.moveTo(210,205); // center start point
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
addLabels();
drawChartArea();
drawGuidelines();
