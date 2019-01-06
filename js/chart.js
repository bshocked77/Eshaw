var c = document.getElementById("radarChart");
var ctx = c.getContext("2d");


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

    ctx.stroke();

};


function drawGuidelines(){

}
drawPentagon();
drawGuidelines();
